import { AdministrationAside } from "../../../UI/Administration/Aside/AdministrationAside"
import { AdministrationHeader } from "../../../UI/Administration/Header/AdministrationHeader"
import styles from "./Products.module.css";

export const Products = () => {
  return (
    <>
      <AdministrationHeader />
      <div className={styles.mainContent}>
        <AdministrationAside />
        <div className={styles.contentHero}>
          Products
        </div>
      </div>
    </>
  )
}
