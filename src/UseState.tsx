import { useState } from "react";

function ClicCounter(){
  const [count, SetCount] = useState<number>(0);

  return (
    <div>
      <p>Compteur: {count}</p>
      <button onClick= {() => SetCount(count + 1)}> Incrementer</button>
    </div>
  )
}

export default ClicCounter;
