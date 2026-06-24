import React, { useEffect } from 'react'

function Top() {


  useEffect(()=>{
    document.title = 'OTAKU-HUB | Top'
  })
  return (
    <div>
      <h1>top</h1>
    </div>
  )
}

export default Top
