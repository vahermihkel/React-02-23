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
// kollane, lilla, sinine, kollane, lilla, sinine, kollane, lilla, sinine
// tumeroheline - kommentaar

// () -> funktsiooni, mis käivitub, kollase sõna taga
//       if sees kontrollime kas tõene või väär
// {} -> JavaScriptis koodiblokki   const nimi = () => {}    if () {} else {}
//       HTMLs JavaScripti (dünaamikat)   
//                                           {} = useParams    <- mitu tk pole määratletud
// [] -> array'd ehk väärtuste kogum   [keel, muudaKeel] = useState <- peab olema täpselt 2tk
// =  -> annan väärtust
// ==  -> kontrollin kas vasak ja parem pool on võrdne ilma tüübi kontrollita (react annab warningu)
// === -> kontrollin kas vasak ja parem pool on võrdne
// && -> kui vasakul on tõde, siis parem ilmub
// || -> kui vasakul on tühjus (null), siis võetakse kasutusele parem
// ; -> rea lõpu tähistus
// ?  :   ->  tavaliselt className sees   KUI ON TÕDE ? "Võetakse see" : "Ei ole tõde, võetakse see"
//        lühendatud if else , ternary operator
// >=   suurem väiksem
// <    väiksem
// .    saab välja kutsuda omadusi (   .length    .getItem  )

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