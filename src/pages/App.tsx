import React from 'react';
import Formulario from '../components/Formulario'
import Lista  from '../components/Lista';
import Timer from '../components/Timer';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Timer/>
    </div>
  );
}

export default App;
