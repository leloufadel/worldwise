import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { useState, useEffect } from 'react';

import "./App.css";
import City from "./components/City";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
function App() {



return (
  <CitiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app/*" element={<AppLayout />}>
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<CountryList  />} />
          <Route path="cities/:id" element={<City />} />
          <Route path="form" element={<Form/>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
