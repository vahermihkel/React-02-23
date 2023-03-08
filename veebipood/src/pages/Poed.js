import React, { useState } from 'react'

function Poed() {
  const [poed, uuendaPoed] = useState(["Ülemiste","Viimsi","Rocca al Mare","Magistrali","Vesse","Kristiine","Järveotsa"]);

  const paneOriginaali = () => {
    uuendaPoed(["Ülemiste","Viimsi","Rocca al Mare","Magistrali","Vesse","Kristiine","Järveotsa"]);
  }

  const sorteeriAZ = () => {
    poed.sort(); // tavaline .sort() teeb alati A-Z
    // poed.sort((a,b) => a.localeCompare(b)); 
    uuendaPoed(poed.slice()); // .slice() lõige - lõikab ära pärinevuskoha
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.localeCompare(a)); 
    uuendaPoed(poed.slice());
  }

  const sorteeriPikkusKasv = () => {
    poed.sort((a,b) => a.length - b.length); 
    uuendaPoed(poed.slice());
  }

  const sorteeriPikkusKah = () => {
    poed.sort((a,b) => b.length - a.length);  // kui vastupidi, vahetan a ja b asukoha ära
    uuendaPoed(poed.slice());
  }

  const sorteeriAZKolmas = () => {                                             // 012345678910
    poed.sort((a,b) => a[2].localeCompare(b[2])); // järjekorranumer algab 0st    Elas metsas
    uuendaPoed(poed.slice());
  }

  const filtreeriEgaLoppevad = () => {
    const tulem = poed.filter(yksPood => yksPood.endsWith("e")); // vasakule poole kuidas tähistan ühte elementi (hetkel poodi)
    uuendaPoed(tulem);                         // paremale poole pean ütlema millisel tingimusel jätan ta alles
  }

  const filtreeriVah7Tahelised = () => {
    const tulem = poed.filter(yksPood => yksPood.length >= 7);
    uuendaPoed(tulem); 
  }

  const filtreeri9Tahelised = () => {
    const tulem = poed.filter(yksPood => yksPood.length === 9);
    uuendaPoed(tulem); 
  }

  const filtreeriIsSisaldavad = () => {
    const tulem = poed.filter(yksPood => yksPood.includes("is"));
    uuendaPoed(tulem); 
  }

  const filtreeriKolmasTahtI = () => {
    const tulem = poed.filter(yksPood => yksPood[2] === "i");
    uuendaPoed(tulem); 
  }

  return (
    <div>
      <button onClick={paneOriginaali}>Pane tagasi originaali</button>
      <br /><br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriPikkusKasv}>Sorteeri sõna pikkus kasvavalt</button>
      <button onClick={sorteeriPikkusKah}>Sorteeri sõna pikkus kahanevalt</button>
      <button onClick={sorteeriAZKolmas}>Sorteeri A-Z kolmanda tähe järgi</button>
      <br /><br />
      <button onClick={filtreeriEgaLoppevad}>Filtreeri e'ga lõppevad</button>
      <button onClick={filtreeriVah7Tahelised}>Filtreeri vähemalt 7 tähelised</button>
      <button onClick={filtreeri9Tahelised}>Filtreeri täpselt 9 tähelised</button>
      <button onClick={filtreeriIsSisaldavad}>Filtreeri sisaldab lühendit 'is'</button>
      <button onClick={filtreeriKolmasTahtI}>Filtreeri kolmas täht 'i'</button>
      {poed.map(yksPood => <div>{yksPood}</div>)}
      <div>----------------------</div>
      <div>Ülemiste</div>
      <div>Viimsi</div>
      <div>Rocca al Mare</div>
      <div>Magistrali</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div>
    </div>
  )
}

export default Poed