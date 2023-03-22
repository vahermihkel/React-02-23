import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json";

function LisaToode() {  // Reacti hookid
  const [sonum, uuendaSonum] = useState("Lisa uus toode!"); // oleku muutmine
  const nimiViide = useRef(); // reference ehk viide inputist
  const hindViide = useRef();
  const piltViide = useRef();
  const aktiivneViide = useRef();

  // function lisa2() {}

  const lisa = () => {
    if (nimiViide.current.value === "") {
      uuendaSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
      uuendaSonum("Toode lisatud " + nimiViide.current.value);
      tootedFailist.push({
        "nimi": nimiViide.current.value,
        "hind": Number(hindViide.current.value),
        "pilt": piltViide.current.value,
        "aktiivne": aktiivneViide.current.checked
      });
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={nimiViide} type="text" /> <br />
      <label>Uue toote hind</label> <br />
      <input ref={hindViide} type="number" /> <br />
      <label>Uue toote pilt</label> <br />
      <input ref={piltViide} type="text" /> <br />
      <label>Uue toote aktiivsus</label> <br />
      <input ref={aktiivneViide} type="checkbox" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

//<button onClick={() => lisa()}>Sisesta</button>
//<button onClick={lisa}>Sisesta</button>
// MITTE:
//<button onClick={lisa()}>Sisesta</button>



// HTML ja CSS osas:
// https://www.udacity.com/course/intro-to-html-and-css--ud001
// https://www.codecademy.com/learn/learn-html
// https://www.udemy.com/course/web-development-learn-by-doing-html5-css3-from-scratch-introductory/
// https://www.udemy.com/course/html5-fundamentals-for-beginners
// https://www.codecademy.com/learn/learn-css
// https://www.freecodecamp.org/learn/2022/responsive-web-design
// Kordust on palju, erinevaid lähenemisi on palju, aga pärast nende vaatamist peaks olema HTML ja CSS mugav.
  
// Läheme raskemaks. JavaScripti koolitused:
// Esimesena: https://www.youtube.com/watch?v=W6NZfCO5SIk (kokku pakitud 1h sisse JavaScripti põhiteadmised, pigem nii lühikese ajaga keeruline mõista, aga annab pildi kiiresti korraks JavaScriptist ette)
// Järgmisena:
// https://www.codecademy.com/learn/introduction-to-javascript
// https://www.udacity.com/course/intro-to-javascript--ud803
// Nende kahe puhul palun mitte korraga vaadata ühte algusest lõpuni vaid nii, et teete ühes teema ära ja siis vaatate teises sama teemat. Ise teeksin nii:
// CodeAcademy peatükid 1-2
// Udacity peatükid 1-2
// CodeAcademy peatükk 3
// Udacity peatükk 3
// CodeAcademy peatükk 4,5
// Udacity peatükk 5 (4 jääb vahele!)
// CodeAcademy peatükk 6
// Udacity peatükk 6
// CodeAcademy peatükk 7
// Udacity peatükk 4 (!)
// CodeAcademy lõpuni ehk peatükid 8,9,10
// Udacity lõpuni ehk peatükk 7

export default LisaToode