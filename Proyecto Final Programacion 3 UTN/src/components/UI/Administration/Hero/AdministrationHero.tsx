import { useSelector } from 'react-redux';
import styles from '../../../UI/Administration/Hero/AdministrationHero.module.css'
import { RootState } from '../../../../redux/store/store';

export const AdministrationHero = () => {

  const storedSucursal = localStorage.getItem('sucursal');
    const selectedSucursal = storedSucursal ? JSON.parse(storedSucursal) : useSelector(
        (state: RootState) => state.sucursal.selectedSucursal
    )

  return (
    //aca se hace el navigate de los botones del aside
    
    
    <div className={styles.hero}>
      <h3>Administracion de la sucursal: {selectedSucursal?.nombre}</h3>
    
    
    
    </div>
  )
}
