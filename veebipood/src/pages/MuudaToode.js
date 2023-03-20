import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const { index } = useParams();      
  // path="/muuda/:index"  element={ <MuudaToode /> }
  // console.log(index); <--- vigade leidmiseks konsooli logimine
  const leitud = tootedFailist[index];
  // console.log(leitud); <--- vigade leidmiseks konsooli logimine
  const nimiViide = useRef();
  const navigate = useNavigate(); // import!

  const muuda = () => {
    // const cars = ["Volvo", "Jeep", "Mercedes"]; failist
    // cars[0] = "Ford"; 
    tootedFailist[index] = nimiViide.current.value;  // nimiViide.current.value
    navigate("/halda");
  }

  return (
    <div>
      {/* <div>{index}</div>
      <div>{leitud}</div> */}
      <label>Toote uus nimi</label> <br />
      <input type="text" ref={nimiViide} defaultValue={leitud} /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaToode