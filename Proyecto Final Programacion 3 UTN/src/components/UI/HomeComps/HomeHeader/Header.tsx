import { Button } from "react-bootstrap";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate()

  const handleNavigateToAdmin = ()=>{
    navigate(`/administracion`)
  }
    // Me gustaría que al apretar adminEmpresas.com vuelva al inicio.
  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>adminEmpresas.com</h1>
      <Button onClick={handleNavigateToAdmin} variant="primary">Ir a administracion</Button>
    </header>
  )
}
