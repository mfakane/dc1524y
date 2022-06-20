import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import RandomBag from "../../randomBag.js";

type PrimaryTargetKind =
  | "skywardLeap"
  | "spiralPierce"
  | "cauterize"
  | undefined;
type SecondaryTargetKind =
  | "altarFlare"
  | "liquidHeaven"
  | "thunderStruck"
  | undefined;
type TargetKind = PrimaryTargetKind | SecondaryTargetKind;
type Marker =
  | "circle"
  | "triangle"
  | "square"
  | "plus"
  | "attack1"
  | "attack2"
  | "attack3"
  | "attack4"
  | "attack5"
  | "bind1"
  | "bind2"
  | "bind3"
  | "stop1"
  | "stop2"
  | "off";

const generate = () => {
  const primaryBag = new RandomBag<PrimaryTargetKind>([
    "skywardLeap",
    "spiralPierce",
    "spiralPierce",
    "cauterize",
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  const players = [...Array(8)].map((_, i) => {
    return {
      noun: `<${i + 1}>`,
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
  ).forEach((x) => (x.secondaryTarget = "thunderStruck"));

  const markerMap: [TargetKind, Marker][] = [
    ["skywardLeap", "circle"],
    ["spiralPierce", "bind1"],
    ["spiralPierce", "bind2"],
    ["cauterize", "triangle"],
    ["liquidHeaven", "attack4"],
    ["altarFlare", "attack3"],
    ["thunderStruck", "stop1"],
    ["thunderStruck", "stop2"],
  ];
  const getMarker = (kind: TargetKind): Marker => {
    const index = markerMap.findIndex((x) => x[0] === kind);
    if (index === -1) return "off";

    const marker = markerMap[index][1];
    markerMap.splice(index, 1);
    return marker;
  };
  const playersByMarker = new Map<Marker, string>();
  for (const player of players) {
    if (player.primaryTarget)
      playersByMarker.set(getMarker(player.primaryTarget), player.noun);
    if (player.secondaryTarget)
      playersByMarker.set(getMarker(player.secondaryTarget), player.noun);
  }

  return [
    `
騎神トールダンは「至天の陣：風槍」の構え。<se.3> <wait.4>
騎神トールダンの「至天の陣：風槍」 <se.3> <wait.6>
/mk circle ${playersByMarker.get("circle")}
/mk bind1 ${playersByMarker.get("bind1")}
/mk bind2 ${playersByMarker.get("bind2")} <wait.5>
/mk stop1 ${playersByMarker.get("stop1")}
/mk stop2 ${playersByMarker.get("stop2")} <wait.2>
/mk off <circle>
/mk off <bind1>
/mk off <bind2>
/mk triangle ${playersByMarker.get("triangle")}
ヴェズルフェルニルの「ツイスターダイブ」 <se.5> <wait.6>
/mk off <triangle>
騎神トールダンの「レベレーション・アスカロンメルシー」 <se.4>
`.trim(),
    `
/mk attack3 ${playersByMarker.get("attack3")}
/mk attack4 ${playersByMarker.get("attack4")}
ヘヴンリキッド (1), アルターフレア (1) <se.3> <wait.1>
/mk attack2 <attack3>
/mk attack3 <attack4>
ヘヴンリキッド (2), アルターフレア (2) <se.3> <wait.1>
/mk attack1 <attack2>
/mk attack2 <attack3>
ヘヴンリキッド (3), アルターフレア (3) <se.3> <wait.1>
/mk off <attack1>
/mk attack1 <attack2>
ヘヴンリキッド (4), アルターフレア (4) <se.3> <wait.1>
/mk off <attack1>
ヘヴンリキッド (5) <se.3> <wait.1>
聖騎士グリノーの「エンプティディメンション」 <se.4>`.trim(),
  ];
};

const WrathOfTheHeavens: FunctionComponent = () => {
  const [text, setText] = useState(generate());
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <p>
        <button onClick={() => setText(generate())}>生成</button>
      </p>
      <textarea readonly rows={15} cols={60}>
        {text[0]}
      </textarea>
      <br />
      <textarea readonly rows={15} cols={60}>
        {text[1]}
      </textarea>
    </form>
  );
};

export default WrathOfTheHeavens;
