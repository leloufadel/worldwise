import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { useState, useEffect } from 'react';

import "./App.css";

import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

function App() {

  const [cities, setCities] = useState([]);
  const [Isloading, setIsloading] = useState([]);
  const Base_Url = 'https://localhost:8080';

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app/*" element={<AppLayout />}>
          <Route path="cities" element={<CityList cities={cities} Isloading ={Isloading}/>} />
          <Route path="countries" element={<CountryList cities={cities} Isloading ={Isloading} />} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
