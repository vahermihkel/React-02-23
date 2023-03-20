import React, { useState } from 'react'
import poedFailist from "../data/poed.json";

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist);

  const paneOriginaali = () => {
    uuendaPoed(poedFailist);
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

  const muudaSuurteksTahtedeks = () => {
    const tulem = poed.map(yksPood => yksPood.toUpperCase());
    uuendaPoed(tulem);
  }

  const muudaKoikITahedOTaheks = () => {
    const tulem = poed.map(yksPood => yksPood.replaceAll("i", "o"));
    uuendaPoed(tulem);
  }

  const muudaKoigileKriipsudEtte = () => {
    const tulem = poed.map(yksPood => "--" + yksPood);
    uuendaPoed(tulem);
  }

  const arvutaTahedKokku = () => {
    let sum = 0; // let abil on võimalik anda muutujale pärast tema loomist uus väärtus
    // sum = sum + poed[0].length;
    // sum = sum + poed[1].length;
    //          "Kristiine" => 8  = 0 + 8
    //          "Viimsi" =>   14   =  8 + 6
    //      "Rocca al Mare" =>  27   =  14 + 13
    poed.forEach(yksPood => sum = sum + yksPood.length);
    return sum;
  }

  return (
    <div>
      <div>Tähtede arv kokku: {arvutaTahedKokku()}</div>
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
      <br /><br />
      <button onClick={muudaSuurteksTahtedeks}>Muuda suurteks tähtedeks</button>
      <button onClick={muudaKoikITahedOTaheks}>Muuda i tähed o tähtedeks</button>
      <button onClick={muudaKoigileKriipsudEtte}>Muuda i tähed o tähtedeks</button>
      {poed.map((yksPood, jarjekorraNumber) => <div key={jarjekorraNumber}>{yksPood}</div>)}
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