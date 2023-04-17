import React from 'react'

function FilterButtons({dbProducts, setProducts, categories}) {
  // const filterProductsMemory = () => {}
  // const filterProductsUsb = () => {}

  const filterProducts = (categoryClicked) => {
    const filteredProducts = dbProducts.filter((product) => product.category === categoryClicked);
    setProducts(filteredProducts);
  }

  return (
    <div>
      {
        categories.map(category => <button onClick={() => filterProducts(category.name)}>{category.name}</button>)
      }
    </div>
  )
}

/* <button onClick={() => filterProducts("memory bank")}>memory bank</button>
<button onClick={() => filterProducts("usb drive")}>usb drive</button>
<button onClick={() => filterProducts("motorcycle")}>motorcycle</button>
<button onClick={() => filterProducts("motors")}>motors</button> */

export default FilterButtons