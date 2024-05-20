import { useState, useEffect, createContext } from "react";

const CitiesContext = createContext();
const Base_Url = "https://localhost:8080";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [Isloading, setIsloading] = useState([]);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsloading(true);
        const resp = await fetch(`${Base_Url}/cities`);
        const data = await resp.json();
        setCities(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsloading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <CitiesContext.Provider value={{ cities, Isloading, currentCity, getCity, }}>
      {children}
    </CitiesContext.Provider>
  );
}

async function getCity(id) {
  try {
    setIsloading(true);
    const resp = await fetch(`${Base_Url}/cities/${id}`);
    const data = await resp.json();
    setCurrentCity(data);
  } catch (error) {
    console.error(error);
  } finally {
    setIsloading(false);
  }
}

function useCities() {
  const context = useContext(CitiesContext);
  if (!context) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return context;
}
export { CitiesProvider, useCities };
