import React, { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(5); // number (number) - kui tehakse arvutusi: kogus, hinnad, summa
  const [sonum, uuendaSonum] = useState("Uuenda kogust!"); // sõnaline (string) - kõik ülejäänud: telefoninumber, isikukood, nimed
  const [laigitud, uuendaLaigitud] = useState(false); // kahendväärtus (boolean): sisselogitud, makstud, täisealine

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Panid tagasi nulli");
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Vähendasid kogust");
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Suurendasid kogust");
  }

  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda laigitut</button>
      <div>{sonum}</div>
      { kogus > 0 && <button onClick={nulli}>Nulli</button>}
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span className={kogus >= 10 ? "kuldne" : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht