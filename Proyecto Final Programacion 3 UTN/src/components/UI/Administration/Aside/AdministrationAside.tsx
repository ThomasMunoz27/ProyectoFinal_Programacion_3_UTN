import styles from '../../../UI/Administration/Aside/AdministrationAside.module.css'

export const AdministrationAside = () => {
  return (
    <aside className={styles.aside}>
      
      <h1 className={styles.asideTitle}>Administración</h1>
      <div className={styles.asideButtons}>
        <button className={styles.asideBtn}>Categorías</button>
        <button className={styles.asideBtn}>Productos</button>
        <button className={styles.asideBtn}>Alergenos</button>
      </div>

    </aside>
  )
}
