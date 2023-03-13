import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {// index/järjekorranumber:  0        1        2         3          4
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);
  // const months = []; <-- seda ei näidata HTMLs

        // const abil või noole ees luuakse uus muutuja
  const lisa = (uusToode) => {
    ostukorv.push(uusToode);
    uuendaOstukorv(ostukorv.slice()); // <---- HTML uuenduseks
  }

  const kustuta = (j2rjekorraNumber) => {
    ostukorv.splice(j2rjekorraNumber,1); // .splice kustutamiseks, sulgude sees:  mitmendat koma mitu tükki kustutan
    uuendaOstukorv(ostukorv.slice());
  }

  return (
    <div>
      {ostukorv.map((toode, jrkNr) => 
        <div key={jrkNr}>
          {toode} 
          <button onClick={() => lisa(toode)}>+</button>
          <button onClick={() => kustuta(jrkNr)}>x</button>
        </div> )}
      Ostukorv on tühi.
      <Link to="/">Tooteid lisama</Link>
    </div>
  )
}

export default Ostukorv