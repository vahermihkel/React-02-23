import React, { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json";

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

// uef --> kohe kui lehele tulles, midagi küsitakse võõralt URL-lt siis peab uef tegema
// localStorage.getItem("categories");
  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(response => response.json())
      .then(json => setCategories(json || []))
  }, []);

  const add = () => {
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice());
    // localStorage.setItem("categories", categories)
    fetch(config.categoriesDbUrl, {
      "method": "PUT",
      "body": JSON.stringify(categories)
    })
  }

  const remove = (index) => {
    categories.splice(index,1);
    setCategories(categories.slice());
    // localStorage.setItem("categories", categories)
    fetch(config.categoriesDbUrl, {
      "method": "PUT",
      "body": JSON.stringify(categories)
    })
  }

  return (
    <div>
      <label>Kategooria</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={add}>Sisesta</button> <br />
      {categories.map((category, index) => 
        <div key={index}>
          <div>{category.name}</div>
          <button onClick={() => remove(index)}>Kustuta</button>
        </div>)}
    </div>
  )
}

export default MaintainCategories