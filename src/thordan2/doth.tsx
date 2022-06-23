import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import RandomBag from "@/randomBag.js";

type TargetKind = "doom1" | "doom2" | "doom3" | "doom4" | undefined;
type DirectionKind = "marker" | "compass" | "kanji";

const generate = (playerCount: number, directionKind: DirectionKind) => {
  const prefix = playerCount === 1 ? "/e" : "/p";
  const doomBag = new RandomBag<TargetKind>([
    "doom1",
    "doom2",
    "doom3",
    "doom4",
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  const players = [...Array(8)].map((_, i) => {
    return {
      index: i,
      pronoun: `<${i + 1}>`,
      doomTarget: doomBag.pop(),
    };
  });
  const directions =
    directionKind === "marker"
      ? ["A", "1", "B", "2", "C", "3", "D", "4"]
      : directionKind === "compass"
      ? ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
      : ["北", "北東", "東", "南東", "南", "南西", "西", "北西"];
  const eye1 = RandomBag.selectOne(directions);
  const eye2 =
    directions[
      (directions.indexOf(eye1) + 3 + Math.floor(Math.random() * 3)) %
        directions.length
    ];

  const playerTarget = (
    kind: TargetKind,
    text: (pronoun: string) => string,
    whenNotPresent?: string
  ) => {
    const player = players.find(
      (x) => x.doomTarget === kind || x.doomTarget === kind
    );
    return player && player.index < playerCount
      ? text(player.pronoun)
      : whenNotPresent ?? "";
  };

  return [
    `
${prefix} 騎神トールダンは「至天の陣：死刻」の構え。<se.3> <wait.4>
${prefix} 騎神トールダンの「至天の陣：死刻」 <se.3> <wait.4>
${prefix} トールダン・邪眼配置 ${eye1}・${eye2} <se.4> <wait.3>
${playerTarget("doom1", (x) => `/mk attack1 ${x}`)}
${playerTarget("doom2", (x) => `/mk attack2 ${x}`)}
${playerTarget("doom3", (x) => `/mk attack3 ${x}`)}
${playerTarget(
  "doom4",
  (x) => `/mk attack4 ${x} <wait.7>`,
  `${prefix} (死の宣告 デバフ付与) <wait.7>`
)}
${prefix} 聖騎士ゲリックの「ヘヴィインパクト」 <se.3> <wait.2>
${prefix} ヴェズルフェルニルの「ツイスターダイブ」 <se.5> ヘヴィインパクト (2) <wait.2>
${prefix} ヘヴィインパクト (3) <se.3> <wait.2>
${prefix} ヘヴィインパクト (4) <se.3> <wait.4>
${prefix} 聖騎士シャリベルは「ヘヴンフレイム」を唱えた。 <se.5> <wait.5>
${prefix} 騎神トールダンの「竜の邪眼」 <se.4>
${prefix} 聖騎士グリノーの「フェイスアンムーブ」 <se.3> <wait.2>
${prefix} 聖騎士シャリベルの「ヘヴンフレイム」 <se.4>`.trim(),
  ];
};

const DeathOfTheHeavens: FunctionComponent = () => {
  const [playerCount, setPlayerCount] = useState(8);
  const [directionKind, setDirectionKind] = useState("marker" as DirectionKind);
  const [continuation, setContinuation] = useState("/e 次のマクロへ！ <se.7>");
  const [text, setText] = useState(generate(playerCount, directionKind));
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
        方角の表記:{" "}
        <select
          value={directionKind}
          onChange={(e) =>
            setDirectionKind(e.currentTarget.value as DirectionKind)
          }
        >
          <option value="marker">八方位マーカー</option>
          <option value="compass">英頭文字</option>
          <option value="kanji">漢字</option>
        </select>
        <br />
        マクロ継続通知:{" "}
        <input
          value={continuation}
          autocomplete="off"
          onChange={(e) => setContinuation(e.currentTarget.value)}
        />
        <br />
        <button onClick={() => setText(generate(playerCount, directionKind))}>
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

export default DeathOfTheHeavens;
