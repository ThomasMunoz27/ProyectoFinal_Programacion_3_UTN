import { AdministrationAside } from "../../../UI/Administration/Aside/AdministrationAside"
import ListCategories from "../../../UI/Administration/Categories/ListCategories/ListCategories";
import { AdministrationHeader } from "../../../UI/Administration/Header/AdministrationHeader"
import styles from "./Categories.module.css";


export const Categories = () => {
  return (
    <>
      <AdministrationHeader />
      <div className={styles.mainContent}>
        <AdministrationAside />
        
        <ListCategories/>
        
      </div>
    </>
  )
}
