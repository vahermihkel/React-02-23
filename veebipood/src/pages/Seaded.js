import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

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
  const aadressViide = useRef();

  // siin on VALIKU KÜSIMUS, kas teha 1 või 3 funktsiooni
  // kui onClick on .map() sees, siis PEAN TEGEMA 1 funktsiooni mis sulgude seest võtab muutuja

  // const muudaKeelEst = () => {
  //   uuendaKeel("est");
  //   localStorage.setItem("keel","est");
  // }

  // const muudaKeelEng = () => {
  //   uuendaKeel("eng");
  //   localStorage.setItem("keel","eng");
  // }

  // const muudaKeelRus = () => {
  //   uuendaKeel("rus");
  //   localStorage.setItem("keel","rus");
  // }

  const muudaKeel = (uusKeel) => {
    uuendaKeel(uusKeel);
    localStorage.setItem("keel",uusKeel);
  }

  const salvestaEmail = () => {
    if (emailViide.current.value.includes("@") === false) {
      toast.error("Kontrolli e-mail");
    } else {
      toast.success("Email salvestatud!");
      localStorage.setItem("email", emailViide.current.value);
    }
  }

  // js check if string is numbers only
  // stackoverflow
  // regex (regular expression --- regulaaravaldis)
  const salvestaTelefon = () => {
    if (/^\d+$/.test(telefonViide.current.value) === false) {
      toast.error("Telefoni number ei koosne ainult numbritest!");
    } else {
      toast.success("Telefon salvestatud!");
      localStorage.setItem("telefon", telefonViide.current.value);
    }
  }

  const salvestaAadress = () => {
    // salvestab ära brauseri vahemällu, ainult sinu arvutis, selles brauseris, sellel veebilehel
    if (aadressViide.current.value[0] === aadressViide.current.value[0].toLowerCase()) {
      toast.error("Aadress kirjuta suure algustähega");
    } else {
      toast.success("Aadress salvestatud!");
      localStorage.setItem("aadress", aadressViide.current.value);
    }
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
      <br />
      <label>Aadress</label>
      <input ref={aadressViide} type="text" />
      <button onClick={salvestaAadress}>Sisesta</button>
      <br /><br />
      <button onClick={() => muudaKeel("est")}>Eesti keelseks</button>
      <button onClick={() => muudaKeel("eng")}>Inglise keelseks</button>
      <button onClick={() => muudaKeel("rus")}>Vene keelseks</button>
      { keel === "est" && <div>Leht on eesti keelne</div>}
      { keel === "eng" && <div>Page is in English</div>}
      { keel === "rus" && <div>Pycckij Rsõk</div>}
      <ToastContainer 
          position="bottom-right"
          theme="dark"
        />
    </div>
  )
}

export default Seaded