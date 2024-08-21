import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
function App() {
  const [showModel, setShowModel] = useState(false);

  const handelToggelModel = () => {
    setShowModel(!showModel)
  }

  useEffect(()=>{
    async function fetchAPIData () {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = "https://api.nasa.gov/planetary/apod" +
      `?api_key=${NASA_KEY}`
      try {
        const res = await fetch(url)
        const data = await res.json()
        console.log('Data\n,', data)
      } catch(err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  },[ ])

  return (
    <>
      <Main />
      {showModel && (
        <SideBar handelToggelModel = {handelToggelModel}/>
        )}
      <Footer handelToggelModel = {handelToggelModel}/>
    </>
  )
}

export default App
