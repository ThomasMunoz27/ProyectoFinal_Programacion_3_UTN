import styles from '../../../UI/Administration/Header/AdministrationHeader.module.css'
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back" />

export const AdministrationHeader = () => {
  return (
    <header className={styles.header}><button className={styles.headerBtn}> <span className="material-symbols-outlined">
    arrow_back
    </span> </button></header>
  )
}
