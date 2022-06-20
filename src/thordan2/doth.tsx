import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import RandomBag from "@/randomBag.js";
import Marker from "@/marker.js";

const generate = () => {
  return [``];
};

const DeathOfTheHeavens: FunctionComponent = () => {
  const [text, setText] = useState(generate());
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <p>
        <button onClick={() => setText(generate())}>生成</button>
      </p>
      <textarea readonly rows={15} cols={80}>
        {text[0]}
      </textarea>
    </form>
  );
};

export default DeathOfTheHeavens;
