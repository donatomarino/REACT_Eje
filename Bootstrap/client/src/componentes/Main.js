import React from 'react';
// Importar Routes y Route para que se puedan linkear y redirigir a los componentes que se llaman
import { Routes, Route } from "react-router-dom";
import Tercero from './Tercero';
import Welcome from './Welcome';
import Bootstrap from './Bootstrap';
import SwitchExample from './SwitchExample';

const Main = () => {
  return (
    <div className='Main'>

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/tercero' element={<Tercero />} />
        <Route path='/bootstrap' element={<Bootstrap />} />
        <Route path='/switchexample' element={<SwitchExample />} />
      </Routes>

    </div>
  )
}

export default Main