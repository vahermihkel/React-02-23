import React, { useRef, useState } from 'react'

// tumesinine - JS liigitusega: const, function
//              väärtus, millel pole jutumärke: true, false, null, undefined
//              HTML: tag   img, input, div, button
// sinine - muutuja, mida muudetakse ja mida kasutatakse HTML-s: kogus, sonum, laigitud, inputiLuger, keel, viide
// helesinine - JS sissekirjutatud muutuja (mille kaudu saab funktsioone teha)
//              localStorage (.getItem, .setItem), console (.log), JSON (.stringify, .parse)
//              HTML sissekirjutatud tagi omadused    src="", className="", onClick={}, alt="", type=""
// kollane - kõik funktsioonid
// oranž - jutumärkides väärtused
// valge - igasugused märgid
// sulud: loogelised, tavalised, kandilised --- on kollased, lillad, sinised
//      visual studio code-s on sisseehitatud, et samat värvi sulg paneb kinni sama värvi sulu
// {{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}
// kollane, liulla, sinine, kollane, lilla, sinine, kollane, lilla, sinine
// tumeroheline - kommentaar

function Seaded() {
  const [keel, uuendaKeel] = useState(localStorage.getItem("keel"));
  const emailViide = useRef();
  const telefonViide = useRef();

  const muudaKeelEst = () => {
    uuendaKeel("est");
    localStorage.setItem("keel","est");
  }

  const muudaKeelEng = () => {
    uuendaKeel("eng");
    localStorage.setItem("keel","eng");
  }

  const muudaKeelRus = () => {
    uuendaKeel("rus");
    localStorage.setItem("keel","rus");
  }

  const salvestaEmail = () => {
    localStorage.setItem("email", emailViide.current.value);
  }

  const salvestaTelefon = () => {
    localStorage.setItem("telefon", telefonViide.current.value);
  }

  return (
    <div>
      <br />
      <label>E-mail</label>
      <input ref={emailViide} type="text" />
      <button onClick={salvestaEmail}>Sisesta</button>
      <br />
      <label>Telefoninumber</label>
      <input ref={telefonViide} type="text" />
      <button onClick={salvestaTelefon}>Sisesta</button>
      <br /><br />
      <button onClick={muudaKeelEst}>Eesti keelseks</button>
      <button onClick={muudaKeelEng}>Inglise keelseks</button>
      <button onClick={muudaKeelRus}>Vene keelseks</button>
      { keel === "est" && <div>Leht on eesti keelne</div>}
      { keel === "eng" && <div>Page is in English</div>}
      { keel === "rus" && <div>Pycckij Rsõk</div>}
    </div>
  )
}

export default Seaded