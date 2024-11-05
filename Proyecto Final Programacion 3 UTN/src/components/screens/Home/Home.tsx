import { Aside } from "../../UI/HomeComps/Aside/Aside"
import { Header } from "../../UI/HomeComps/HomeHeader/Header"
import { ViewSucursals } from "../../UI/HomeComps/ViewSucursals/ViewSucursals"
import styles from "./Home.module.css"

export const Home = () => {
  localStorage.clear()
  return (
    <>
    <Header/>

    <div className={styles.mainContainer}>

      <Aside/>
      
      <ViewSucursals/>

    </div>
    </>
  )
}
