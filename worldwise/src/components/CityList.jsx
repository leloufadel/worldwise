import styles from './CityList.module.css';
import Spinner from './Spinner';
import CityItem from './CityItem';


function CityList({cities, Isloading}) {
 
  if(Isloading){
    return <Spinner />
  }
  return (
    <ul className={styles.CityList}>
      {cities.map(city => 
        <CityItem key={city.id} city={city} />
      )}
    </ul>
  )
}

export default CityList;