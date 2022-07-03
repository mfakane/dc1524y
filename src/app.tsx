import { Fragment, FunctionComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import DeathOfTheHeavens from "./thordan2/doth";
import WrathOfTheHeavens from "./thordan2/woth";

type Phase = "woth" | "doth";

export const App: FunctionComponent = () => {
  const [phase, setPhase] = useState<Phase>(
    (location.hash || "woth").replace(/^#/, "") as Phase
  );

  useEffect(() => {
    const onHashChange = (ev: HashChangeEvent) =>
      setPhase((location.hash || "woth").replace(/^#/, "") as Phase);
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  });

  return (
    <Fragment>
      <h1>絶竜詩戦争: 練習マクロガチャ</h1>
      <p>
        練習したいフェーズを選択してください。邂逅編 4
        などに突入して使える、練習用マクロを生成します。
        <br />
        生成ボタンを押すたびにマクロ中のランダム要素が入れ替わります。
      </p>
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
