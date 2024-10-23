import { Aside } from "../../UI/HomeComps/Aside/Aside"
import { ViewSucursals } from "../../UI/HomeComps/ViewSucursals/ViewSucursals"
import styles from "./Home.module.css"

export const Home = () => {
  return (
    
    <div className={styles.mainContainer}>

      <Aside/>
      
      <ViewSucursals/>

    </div>
    
  )
}
