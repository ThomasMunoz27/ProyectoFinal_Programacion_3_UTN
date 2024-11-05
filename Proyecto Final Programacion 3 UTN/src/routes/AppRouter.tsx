import { Route, Routes } from "react-router-dom"

import { Home } from "../components/screens/Home/Home"
import { Administration } from "../components/screens/Administration/Index/Administration"
import { Categories } from "../components/screens/Administration/Categories/Categories"
import { Products } from "../components/screens/Administration/Products/Products"
import { Alergenos } from "../components/screens/Administration/Alergenos/Alergenos"




export const AppRouter = () => {

  return (
    <>
    <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/administracion" element={<Administration/>} />
        <Route path="/administracion/categorias" element={<Categories/>}/>
        <Route path="/administracion/productos" element={<Products/>}/>
        <Route path="/administracion/alergenos" element={<Alergenos/>}/>
    </Routes>
  
    </>
  )
}
