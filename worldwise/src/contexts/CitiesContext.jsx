import {useState, useEffect, useContext, createContext} from 'react';


const CitiesContext = createContext();
const Base_Url = 'https://localhost:8080';

function CitiesProvider({children}){

const [cities, setCities] = useState([]);
const [Isloading, setIsloading] = useState([]);

useEffect(function() {

async function fetchCities(){
  try{
    setIsloading(true);
    const resp = await fetch(`${Base_Url}/cities`)
  const data = await resp.json();
  setCities(data);
  } catch(error){
    console.error(error);
  
  }finally{
    setIsloading(false)
  }
}
fetchCities();
}, []
);
 return (
    <CitiesContext.Provider value= {{cities, Isloading}}>
    {children}
    </CitiesContext.Provider>
 )
}

export {CitiesProvider};