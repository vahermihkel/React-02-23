import React, { useState } from 'react'
import poedFailist from "../data/poed.json";

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist);

  const paneOriginaali = () => {
    uuendaPoed(poedFailist);
  }

  const sorteeriAZ = () => {
    //poed.sort(); // tavaline .sort() teeb alati A-Z, aga kui on tegemist stringidega
    poed.sort((a,b) => a.nimi.localeCompare(b.nimi)); 
    uuendaPoed(poed.slice()); // .slice() lõige - lõikab ära pärinevuskoha
  }

  const sorteeriZA = () => {
        // Ülemiste.localeCompare(Viimsi)
  //  {"nimi": "Ülemiste", "tel": "51312321"}.localeCompare({"nimi": "Viimsi", "tel": "51312322"})
    poed.sort((a,b) => b.nimi.localeCompare(a.nimi)); 
    uuendaPoed(poed.slice());
  }

  const sorteeriPikkusKasv = () => {
      // Ülemiste.length - Viimsi.length
  //  {"nimi": "Ülemiste", "tel": "51312321"}.length - {"nimi": "Viimsi", "tel": "51312322"}.length
    poed.sort((a,b) => a.nimi.length - b.nimi.length); 
    // Object.keys(poed[0]).length <--- objekti võtmete arvu saamiseks
    uuendaPoed(poed.slice());
  }

  const sorteeriPikkusKah = () => {
    poed.sort((a,b) => b.nimi.length - a.nimi.length);  // kui vastupidi, vahetan a ja b asukoha ära
    uuendaPoed(poed.slice());
  }

  const sorteeriAZKolmas = () => {                                             // 012345678910
    poed.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2])); // järjekorranumer algab 0st    Elas metsas
    uuendaPoed(poed.slice());
  }

  const filtreeriEgaLoppevad = () => {
    const tulem = poed.filter(yksPood => yksPood.nimi.endsWith("e")); // vasakule poole kuidas tähistan ühte elementi (hetkel poodi)
    uuendaPoed(tulem);                         // paremale poole pean ütlema millisel tingimusel jätan ta alles
  }

  const filtreeriVah7Tahelised = () => {
    const tulem = poed.filter(yksPood => yksPood.nimi.length >= 7);
    uuendaPoed(tulem); 
  }

  const filtreeri9Tahelised = () => {
    const tulem = poed.filter(yksPood => yksPood.nimi.length === 9);
    uuendaPoed(tulem); 
  }

  const filtreeriIsSisaldavad = () => {
    const tulem = poed.filter(yksPood => yksPood.nimi.includes("is"));
    uuendaPoed(tulem); 
  }

  const filtreeriKolmasTahtI = () => {
    const tulem = poed.filter(yksPood => yksPood.nimi[2] === "i");
    uuendaPoed(tulem); 
  }

  const muudaSuurteksTahtedeks = () => {
    // Ülemiste => Ülemiste.toUpperCase     Ülemiste   --->   ÜLEMISTE
    //  {"nimi": "Magistrali", "tel": "51312324"} => Ülemiste.toUpperCase()
    const tulem = poed.map(yksPood => {return{nimi: yksPood.nimi.toUpperCase(), tel: yksPood.tel}});
    uuendaPoed(tulem);
  }

  const muudaKoikITahedOTaheks = () => {
    const tulem = poed.map(yksPood => {return{nimi: yksPood.nimi.replaceAll("i", "o"), tel: yksPood.tel}});
    uuendaPoed(tulem);
  }

  const muudaKoigileKriipsudEtte = () => {
    const tulem = poed.map(yksPood => {return{nimi: "--" + yksPood.nimi, tel: yksPood.tel}});
    uuendaPoed(tulem);
  }

  const muudaKoigileSuunakood = () => {
    const tulem = poed.map(yksPood => {return{nimi: yksPood.nimi, tel: "+372" + yksPood.tel}});
    uuendaPoed(tulem);
  }
  // NaN  ---> Not a Number
  const arvutaTahedKokku = () => {
    let sum = 0; // let abil on võimalik anda muutujale pärast tema loomist uus väärtus
    // sum = sum + poed[0].length;
    // sum = sum + poed[1].length;
    //          "Kristiine" => 8  = 0 + 8
    //          "Viimsi" =>   14   =  8 + 6
    //      "Rocca al Mare" =>  27   =  14 + 13
    poed.forEach(yksPood => sum = sum + yksPood.nimi.length);
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
      <button onClick={muudaKoigileSuunakood}>Muuda telefonidele suunakood</button>
      {poed.map((yksPood, jarjekorraNumber) => <div key={jarjekorraNumber}>{yksPood.nimi}, tel: "{yksPood.tel}" </div>)}
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