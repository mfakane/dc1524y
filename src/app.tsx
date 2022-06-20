import { Fragment, FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import DeathOfTheHeavens from "./thordan2/doth";
import WrathOfTheHeavens from "./thordan2/woth";

type Phase = "woth" | "doth";

export const App: FunctionComponent = () => {
  const [phase, setPhase] = useState<Phase>("woth");

  return (
    <Fragment>
      <h1>絶竜詩戦争: 練習マクロガチャ</h1>
      <select
        value={phase}
        onChange={(e) => setPhase(e.currentTarget.value as Phase)}
      >
        <option value={"woth" as Phase}>至天の陣：風槍</option>
        <option value={"doth" as Phase}>至天の陣：死刻</option>
      </select>
      {phase === "woth" && <WrathOfTheHeavens />}
      {phase === "doth" && <DeathOfTheHeavens />}
    </Fragment>
  );
};
