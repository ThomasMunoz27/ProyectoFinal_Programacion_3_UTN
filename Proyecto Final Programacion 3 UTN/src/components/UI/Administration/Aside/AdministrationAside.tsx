import { Button } from 'react-bootstrap'
import styles from '../../../UI/Administration/Aside/AdministrationAside.module.css'
import { useNavigate } from 'react-router-dom'

export const AdministrationAside = () => {

  const navigate = useNavigate()
  const handleNavigateToCategories = () => {
    navigate('/administracion/categorias')
  }

  const handleNavigateToProducts = () => {
    navigate('/administracion/productos')
  }

  const handleNavigateToAlergenos = () => {
    navigate('/administracion/alergenos')
  }

  return (
    <aside className={styles.aside}>
      
      <h1 className={styles.asideTitle}>Administración</h1>
      <div className={styles.asideButtons}>
        <Button onClick={handleNavigateToCategories} className={styles.asideBtn}>
          Categorías
        </Button>

        <Button onClick={handleNavigateToProducts} className={styles.asideBtn}>
          Productos
        </Button>

        <Button onClick={handleNavigateToAlergenos} className={styles.asideBtn}>
          Alergenos
        </Button>
      </div>

    </aside>
  )
}
