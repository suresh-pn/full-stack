import React from 'react';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Man from './pages/Man'
import Women from './pages/Women';
import Kids from './pages/Kids';
import Accessories from './pages/Accessories';
import Details from './pages/Details';
import Cosmetics from './pages/Cosmetics';
import CartDetails from './pages/CartDetails';
import ProceedToPayment from './pages/ProceedToPayment';
function App() {
  return (
    <Routes>
      <Route path='/'>
      <Route index element = {<Home/>}/>
      <Route path='/Man' element={<Man/>}/>
      <Route path='/Women' element={<Women/>}/>
      <Route path='/Kids' element={<Kids/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/Accessories' element={<Accessories/>}/>
      <Route path='/Cosmetics' element={<Cosmetics/>}/>
      <Route path='/cart' element={<CartDetails/>}/>
      <Route path='/payment' element={<ProceedToPayment/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
