import { AdministrationAside } from "../../../UI/Administration/Aside/AdministrationAside"
import { AdministrationHeader } from "../../../UI/Administration/Header/AdministrationHeader"
import { AdministrationHero } from "../../../UI/Administration/Hero/AdministrationHero"
import styles from "./Administration.module.css"

export const Administration = () => {

  

  return (
    <>
    <AdministrationHeader/>
    <div className={styles.main}>
      <AdministrationAside/> 

      <AdministrationHero />
    </div>
    </>
  )
}
