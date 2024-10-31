import { Button } from 'react-bootstrap'
import styles from '../../../UI/Administration/Header/AdministrationHeader.module.css'
import { useNavigate } from 'react-router-dom'
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back" />

export const AdministrationHeader = () => {
  
  const navigate = useNavigate()
  const handleNavigateBack = () => {
    navigate(-1)
  }

  return (
    <header className={styles.header}>
      <Button className={styles.headerBtn} onClick={handleNavigateBack}>
        <span className="material-symbols-outlined">
          arrow_back
        </span> 
      </Button>
    
    </header>
  )
}
