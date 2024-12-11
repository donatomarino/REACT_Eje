import React from 'react';
// Importamos BrowserRouter para entender que el Componente Main va hacer de enrutador de componentes de React
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './componentes/Main';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
