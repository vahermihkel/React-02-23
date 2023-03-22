import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);
  // const months = []; <-- seda ei näidata HTMLs

  const tyhjenda = () => {
    // ostukorv.splice(0) <--- tühjendamist
    // uuendaOstukorv(ostukorv.slice());
    ostukorvFailist = [];
    uuendaOstukorv(ostukorvFailist.slice());
  }

        // const abil või noole ees luuakse uus muutuja
  const lisa = (uusToode) => {
    ostukorvFailist.push(uusToode);
    uuendaOstukorv(ostukorvFailist.slice()); // <---- HTML uuenduseks
  }

  const kustuta = (j2rjekorraNumber) => {
    ostukorvFailist.splice(j2rjekorraNumber,1); // .splice kustutamiseks, sulgude sees:  mitmendat koma mitu tükki kustutan
    uuendaOstukorv(ostukorvFailist.slice());
  }

  const arvutaKogusumma = () => {
    let summa = 0;
    ostukorv.forEach(toode => summa = summa + toode.hind);
    return summa;
  }

  return (
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {ostukorv.length > 0 && <div>Ostukorvis kokku {ostukorv.length} eset</div> }
      {ostukorv.map((toode, jrkNr) => 
        <div key={jrkNr}>
          <img className="pilt" src={toode.pilt} alt="" />
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          <button onClick={() => lisa(toode)}>+</button>
          <button onClick={() => kustuta(jrkNr)}>x</button>
        </div> )}
      {ostukorv.length === 0 &&
        <div>
          Ostukorv on tühi.
          <Link to="/">Tooteid lisama</Link>
        </div>}
      {ostukorv.length > 0 && 
        <div className={ arvutaKogusumma() > 500000 ? "kuldne" : undefined }>
          Kokku: {arvutaKogusumma()} €
        </div> }
    </div>
  )
}

export default Ostukorv