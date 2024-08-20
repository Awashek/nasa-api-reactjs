import React from 'react'

export default function SideBar(props) {
  const {handelToggelModel} = props
  return (
     <div className='sidebar'>
        <div onClick={handelToggelModel} className='bgOverlay'></div>
          <div className='sidebarContents'>
            <h2>The Brutal Martian Landscape</h2>  
            <div>
              <p>Description</p>
              <p>ashvjadhjhwda asbdajbasdkads adbkjadb
                asvhjdasvjhadsbadsjbadk
              </p>
            </div>
            <button onClick={handelToggelModel}>
            <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div> 
  )
}
