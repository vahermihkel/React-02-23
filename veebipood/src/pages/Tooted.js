import React, { useState } from 'react'
import ostukorvFailist from "../data/ostukorv.json";
import tootedFailist from "../data/tooted.json";
import { Link } from 'react-router-dom';

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const sorteeriAZ = () => {
    // tooted.sort();
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKasv = () => {
    tooted.sort((a,b) => a.hind - b.hind);
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKah = () => {
    tooted.sort((a,b) => b.hind - a.hind);
    uuendaTooted(tooted.slice());
  }

  const lisaOstukorvi = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
  }

  const filtreeriEsitaheAlusel = (esitaht) => {
    const vastus = tootedFailist.filter(toode => toode.nimi[0] === esitaht);
    uuendaTooted(vastus);
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriHindKasv}>Sorteeri hind kasv</button>
      <button onClick={sorteeriHindKah}>Sorteeri hind kah</button>
      <br /><br />
      <button onClick={() => filtreeriEsitaheAlusel("B")}>B</button>
      <button onClick={() => filtreeriEsitaheAlusel("N")}>N</button>
      <button onClick={() => filtreeriEsitaheAlusel("T")}>T</button>
      {tooted.map((toode, index) => 
        <div key={index}>
          <Link to={"/yksik-toode/" + index}>
            <img className="pilt" src={toode.pilt} alt="" />
            <div>{toode.nimi}</div>
            <div>{toode.hind}</div>
          </Link>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default Tooted