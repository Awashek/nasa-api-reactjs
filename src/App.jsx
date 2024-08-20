import { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
function App() {
  const [showModel, setShowModel] = useState(false);

  const handelToggelModel = () => {
    setShowModel(!showModel)
  }

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
