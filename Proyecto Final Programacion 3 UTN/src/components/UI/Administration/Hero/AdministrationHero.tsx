import { useSelector } from 'react-redux';
import styles from '../../../UI/Administration/Hero/AdministrationHero.module.css'
import { RootState } from '../../../../redux/store/store';

export const AdministrationHero = () => {

  const selectedSucursal = useSelector(
    (state: RootState) => state.sucursal.selectedSucursal
  );

  return (

    
    <div className={styles.hero}>
      <h3>Administracion de la sucursal: {selectedSucursal?.nombre}</h3>
    
    
    
    </div>
  )
}
