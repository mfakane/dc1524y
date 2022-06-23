import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import RandomBag from "@/randomBag.js";

type PrimaryTargetKind =
  | "skywardLeap"
  | "spiralPierce1"
  | "spiralPierce2"
  | "cauterize"
  | undefined;
type SecondaryTargetKind =
  | "altarFlare"
  | "liquidHeaven"
  | "thunderStruck1"
  | "thunderStruck2"
  | undefined;
type TargetKind = PrimaryTargetKind | SecondaryTargetKind;

const generate = (playerCount: number, continuation: string) => {
  const prefix = playerCount === 1 ? "/e" : "/p";
  const primaryBag = new RandomBag<PrimaryTargetKind>([
    "skywardLeap",
    "spiralPierce1",
    "spiralPierce2",
    "cauterize",
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  const players = [...Array(8)].map((_, i) => {
    return {
      index: i,
      pronoun: `<${i + 1}>`,
      primaryTarget: primaryBag.pop(),
      secondaryTarget: undefined as SecondaryTargetKind,
    };
  });

  RandomBag.selectOne(players.filter((x) => x.primaryTarget)).secondaryTarget =
    "altarFlare";
  RandomBag.selectOne(players.filter((x) => !x.primaryTarget)).secondaryTarget =
    "liquidHeaven";
  RandomBag.selectMany(
    2,
    players.filter((x) => !x.secondaryTarget)
  ).forEach(
    (x, i) =>
      (x.secondaryTarget = i === 0 ? "thunderStruck1" : "thunderStruck2")
  );

  const playerTarget = (
    kind: TargetKind,
    text: (pronoun: string) => string,
    whenNotPresent?: string
  ) => {
    const player = players.find(
      (x) => x.primaryTarget === kind || x.secondaryTarget === kind
    );
    return player && player.index < playerCount
      ? text(player.pronoun)
      : whenNotPresent ?? "";
  };

  return [
    `${prefix} 騎神トールダンは「至天の陣：風槍」の構え。<se.3> <wait.4>
${prefix} 騎神トールダンの「至天の陣：風槍」 <se.3> <wait.6>
${playerTarget(
  "skywardLeap",
  (x) => `/mk circle ${x}`,
  `${prefix} (スカイワードリープ マーカー付与)`
)}
${playerTarget("spiralPierce1", (x) => `/mk bind1 ${x}`)}
${playerTarget(
  "spiralPierce2",
  (x) => `/mk bind2 ${x} <wait.5>`,
  `${prefix} (スパイラルピアス マーカー付与) <wait.5>`
)}
${playerTarget("thunderStruck1", (x) => `/mk stop1 ${x}`)}
${playerTarget(
  "thunderStruck1",
  (x) => `/mk stop2 ${x} <wait.2>`,
  `${prefix} (サンダーウィング デバフ付与) <wait.2>`
)}
/mk off <circle>
/mk off <bind1>
/mk off <bind2>
${playerTarget("cauterize", (x) => `/mk triangle ${x}`)}
${prefix} ヴェズルフェルニルの「ツイスターダイブ」 <se.5> <wait.6>
/mk off <triangle>
${prefix} 騎神トールダンの「レベレーション・アスカロンメルシー」 <se.4>
${continuation}`,
    `${playerTarget("liquidHeaven", (x) => `/mk attack4 ${x}`)}
${playerTarget("altarFlare", (x) => `/mk attack3 ${x}`)}
${prefix} ヘヴンリキッド (1), アルターフレア (1) <se.3> <wait.1>
${playerTarget("liquidHeaven", (x) => `/mk attack3 ${x}`)}
${playerTarget("altarFlare", (x) => `/mk attack2 ${x}`)}
${prefix} ヘヴンリキッド (2), アルターフレア (2) <se.3> <wait.1>
${playerTarget("liquidHeaven", (x) => `/mk attack2 ${x}`)}
${playerTarget("altarFlare", (x) => `/mk attack1 ${x}`)}
${prefix} ヘヴンリキッド (3), アルターフレア (3) <se.3> <wait.1>
${playerTarget("liquidHeaven", (x) => `/mk attack1 ${x}`)}
${playerTarget("altarFlare", (x) => `/mk off ${x}`)}
${prefix} ヘヴンリキッド (4), アルターフレア (4) <se.3> <wait.1>
${playerTarget("liquidHeaven", (x) => `/mk off ${x}`)}
${prefix} ヘヴンリキッド (5) <se.3> <wait.1>
${prefix} 聖騎士グリノーの「エンプティディメンション」 <se.4>`,
  ];
};

const WrathOfTheHeavens: FunctionComponent = () => {
  const [playerCount, setPlayerCount] = useState(8);
  const [continuation, setContinuation] = useState("/e 次のマクロへ！ <se.7>");
  const [text, setText] = useState(generate(playerCount, continuation));
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <p>
        練習人数:{" "}
        <select
          value={playerCount}
          onChange={(e) => setPlayerCount(parseInt(e.currentTarget.value))}
        >
          <option value={8}>8</option>
          <option value={7}>7</option>
          <option value={6}>6</option>
          <option value={5}>5</option>
          <option value={4}>4</option>
          <option value={3}>3</option>
          <option value={2}>2</option>
          <option value={1}>1</option>
        </select>
        <br />
        マクロ継続通知:{" "}
        <input
          value={continuation}
          autocomplete="off"
          onChange={(e) => setContinuation(e.currentTarget.value)}
        />
        <br />
        <button onClick={() => setText(generate(playerCount, continuation))}>
          生成
        </button>
      </p>
      {text.map((x) => (
        <>
          <textarea readonly rows={15} cols={80}>
            {x.replace(/\n\n+/g, "\n").trim()}
          </textarea>
          <br />
        </>
      ))}
    </form>
  );
};

export default WrathOfTheHeavens;
