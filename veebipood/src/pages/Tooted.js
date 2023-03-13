import React, { useState } from 'react'
import ostukorvFailist from "../data/ostukorv.json";

function Tooted() {
  const [tooted, uuendaTooted] = useState(["Nobe", "Tesla", "BMW"]);

  const lisaOstukorvi = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
  }

  return (
    <div>
      {tooted.map((toode, index) => 
        <div key={index}>
          {toode}
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default Tooted