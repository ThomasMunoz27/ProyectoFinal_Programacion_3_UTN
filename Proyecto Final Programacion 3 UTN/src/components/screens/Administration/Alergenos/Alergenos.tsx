import { AdministrationAside } from "../../../UI/Administration/Aside/AdministrationAside"
import { AdministrationHeader } from "../../../UI/Administration/Header/AdministrationHeader"
import styles from "./Alergenos.module.css";


export const Alergenos = () => {
  return (
    <>
      <AdministrationHeader />
      <div className={styles.mainContent}>
        <AdministrationAside />
        <div className={styles.contentHero}>
          Alergenos
        </div>
      </div>
    </>
  )
}
