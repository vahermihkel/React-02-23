import React, { useRef, useState } from 'react' // <---- useState importida
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from 'react-toastify';

function AddProduct() {
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [isUnique, setUnique] = useState(true); // <------------

  const add = () => {
    productsFromFile.push({
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked
    })
    idRef.current.value = "";
    nameRef.current.value = "";
    priceRef.current.value = "";
    imageRef.current.value = "";
    categoryRef.current.value = "";
    descriptionRef.current.value = "";
    activeRef.current.checked = false;
    toast.success("Toode edukalt lisatud!");
  }

  // KODUS: ID unikaalsus
  const checkIdUniqueness = () => { // --
    const product = productsFromFile.find(element => element.id === Number(idRef.current.value));
    if (product === undefined) {
      setUnique(true);
    } else {
      setUnique(false);
      toast.error("Id pole unikaalne!");
    }
  } // --

  return ( 
    <div>
      {isUnique === false && <div>Id ei ole unikaalne!</div>}       {/* <--- */}
      <label>New id</label> <br />
      <input onChange={checkIdUniqueness} ref={idRef} type="number" /> <br />
      <label>New product</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>New price</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>New image</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>New category</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef}type="text" /> <br />
      <label>Active</label> <br />
      <input ref={activeRef} type="checkbox" /> <br />
      <button disabled={isUnique === false} onClick={add}>Add</button> <br />
      <ToastContainer />
    </div>
  )
}

export default AddProduct