import { AdministrationAside } from "../../../UI/Administration/Aside/AdministrationAside"
import { AdministrationHeader } from "../../../UI/Administration/Header/AdministrationHeader"
import styles from "./Products.module.css";
import { ListProducts } from "../../../UI/Administration/Products/ListProducts/ListProducts";

export const Products = () => {
  return (
    <>
      <AdministrationHeader />
      <div className={styles.mainContent}>
        <AdministrationAside />
        <div className={styles.contentHero}>
          <ListProducts/>
        </div>
      </div>
    </>
  )
}
