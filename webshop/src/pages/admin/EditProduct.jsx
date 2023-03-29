import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom' // Link, useParams --> 
//    react-router-dom, sest tegemist on URL ja navigeerimisega
import productsFromFile from "../../data/products.json";

function EditProduct() {
  const { id } = useParams();
  // ENNE VEEBIPOES: const leitud = productsFromFile[id];       productsFromFile[93.876.610] 
  //  kui on kandilised sulud, see tähendab järjekorranumbri alusel leidmiseks
  // .find vs .filter ---> küsivad mis on tingimus
  // .find annab mulle 1, kõige esimene
  // .filter annab mulle kõik kellel tingimus vastab
  // const found = productsFromFilter.filter(element.id === id)[0]
                                               //  93876610 === "93876610"
  const found = productsFromFile.find(element => element.id === Number(id)); // .find    .filter / .sort / .map / .forEach
  const index = productsFromFile.findIndex(element => element.id === Number(id));
  // !==    ! - keerab vastupidiseks, ei võrdu
// ===    vasak ja parem pool võrduvad
// !==    vasak ja parem pool ei võrdu

// kogus !== 0   pane nulli tagasi
// kogus === 0   suurenda/vähenda

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate(); // koos impordiga (react-router-dom)
  const [isUnique, setUnique] = useState(true);

  const edit = () => {
    productsFromFile[index] = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked
    }
    navigate("/admin/maintain-products");
    // productsFromFile[5] = updatedProduct;
    // ["Nobe", "BMW", "Tesla"][0] = "Audi";
  }

  const checkIdUniqueness = () => {
    const product = productsFromFile.find(element => element.id === Number(idRef.current.value));
    if (product === undefined) {
      setUnique(true);
    } else {
      setUnique(false);
    }
  }

    // const products = productsFromFile.filter(element => element.id === Number(idRef.current.value));
    // if (products.length === 0) {
    //   setUnique(true); // positiivne -> kellelgi pole
    // } else {
    //   setUnique(false);
    // }

    // const index = productsFromFile.findIndex(element => element.id === Number(idRef.current.value));
    // if (index === -1) {
    //   setUnique(true); // positiivne -> kellelgi pole
    // } else {
    //   setUnique(false);
    // }

  return (
    <div>
      {found !== undefined && <div>
        {isUnique === false && <div>Id ei ole unikaalne!</div>}
        <label>Id</label> <br />
        <input ref={idRef} onChange={checkIdUniqueness} defaultValue={found.id} type="number" /> <br />
        <label>Name</label> <br />
        <input ref={nameRef} defaultValue={found.name} type="text" /> <br />
        <label>Price</label> <br />
        <input ref={priceRef} defaultValue={found.price} type="number" /> <br />
        <label>Image</label> <br />
        <input ref={imageRef} defaultValue={found.image} type="text" /> <br />
        <label>Category</label> <br />
        <input ref={categoryRef} defaultValue={found.category} type="text" /> <br />
        <label>Description</label> <br />
        <input ref={descriptionRef} defaultValue={found.description} type="text" /> <br />
        <label>Active</label> <br />
        <input ref={activeRef} defaultChecked={found.active} type="checkbox" /> <br />
        <button disabled={isUnique === false} onClick={edit}>Edit</button> <br />
      </div>}
      {found === undefined && <div>Toodet ei leitud!</div>}
    </div>
  )
}

export default EditProduct