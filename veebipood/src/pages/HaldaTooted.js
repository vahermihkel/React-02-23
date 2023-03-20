import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import tootedFailist from "../data/tooted.json";

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const kustuta = (jrkNr) => {
    tootedFailist.splice(jrkNr,1);
    uuendaTooted(tootedFailist.slice());
  }

  return (
    <div>
      {tooted.map((toode, index) => 
        <div key={index}>
          {toode}
          <button onClick={() => kustuta(index)}>Kustuta</button>
          <Link to={"/muuda/" + index}> <button>Muuda</button> </Link>
        </div>)}
    </div>
  )
}

export default HaldaTooted