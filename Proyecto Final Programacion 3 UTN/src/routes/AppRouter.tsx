import { Route, Routes } from "react-router-dom"
import { Header } from "../components/UI/HomeComps/HomeHeader/Header"

import { Home } from "../components/screens/Home/Home"
import { Administration } from "../components/screens/Administration/Index/Administration"




export const AppRouter = () => {

  return (
    <>
    <Header/>
    <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/administracion" element={<Administration/>} />
        

    </Routes>
  
    </>
  )
}
