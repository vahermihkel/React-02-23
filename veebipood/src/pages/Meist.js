import React, { useState } from 'react'

function Meist() {
  const [naitaEmaili, uuendaNaitaEmaili] = useState(false);
                                    // kui pole sellist võtit - tuleb "null"
  const [telefon, uuendaTelefon] = useState(localStorage.getItem("telefon") || "");
  const [aadress, uuendaAadress] = useState(localStorage.getItem("aadress") || "")

  return (
    <div>
      <div>Meie e-mail: {naitaEmaili === true && localStorage.getItem("email")}
    {naitaEmaili === false && <button onClick={() => uuendaNaitaEmaili(true)}>Näita e-maili</button> }
      </div>
      <div>Meie telefon: {telefon}
        {telefon.startsWith("+372") === false && <button onClick={() => uuendaTelefon("+372" + telefon)}>Lisa suunakood</button>}
      </div>
      <div>Meie aadress: {aadress}
        <button onClick={() => uuendaAadress(aadress.toUpperCase())}>Suurteks tähtedeks</button>
        <button onClick={() => uuendaAadress(aadress.toLowerCase())}>Väikesteks tähtedeks</button>
      </div>
    </div>
  )
}

export default Meist