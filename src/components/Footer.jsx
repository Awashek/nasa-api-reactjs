import React from 'react'

export default function Footer(props) {
  const { handelToggelModel } = props
  return (
    <footer>
      <div className='bgGradient'></div>
     <div>
        <h2>The Brutal Martian Landscape</h2>
        <h1>APOD PROJECT</h1>
     </div>
     <button 
      onClick={handelToggelModel}>
      <i className="fa-solid fa-circle-info"></i>
     </button>
    </footer>
  )
}
