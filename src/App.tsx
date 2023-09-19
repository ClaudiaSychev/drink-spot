import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import CocktailDetails from './pages/CocktailDetails';
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/drink/:id" element={<CocktailDetails />} />
          
        </Route>
      </Routes>

  );
}



export default App;
