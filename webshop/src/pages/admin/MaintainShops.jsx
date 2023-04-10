import React, { useRef } from 'react'

function MaintainShops() {
  // kuvada kõiki poode listina
  // lisada uut poodi läbi vormi
  // kustutada ühte poodi
  const nameRef = useRef();
  const openTimeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();

  // shops.push({"name": nameRef.current.value, "openTime": openTime.current.value, ...});


  return (
    <div>MaintainShops</div>
  )
}

export default MaintainShops