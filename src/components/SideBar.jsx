import React from 'react'

export default function SideBar(props) {
  const {handelToggelModel, data} = props
  return (
     <div className='sidebar'>
        <div onClick = {handelToggelModel} className='bgOverlay'></div>
          <div className='sidebarContents'>
            <h2>{data?.title}</h2>  
            <div>
              <p className='descriptionTitle'>{data?.date}</p>
              <p>{data?.explanation}</p>
            </div>
            <button onClick={handelToggelModel}>
            <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div> 
  )
}
