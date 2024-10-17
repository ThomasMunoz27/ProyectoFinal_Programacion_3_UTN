import { Route, Routes } from "react-router-dom"
import { Header } from "../components/UI/HomeComps/HomeHeader/Header"

import { Home } from "../components/screens/Home/Home"




export const AppRouter = () => {

  return (
    <>
    <Header/>
    <Routes>

        <Route path="/" element={<Home/>}></Route>

        

    </Routes>
  
    </>
  )
}
