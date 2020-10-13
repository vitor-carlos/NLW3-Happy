import React from 'react';

import'./styles/global.css';
import'./styles/pages/landing.css';

import logoImg from './images/Logo.svg';

interface TitleProps{
  text:string;
}
function App() {
  return (
    <div id="page-landing">
<div className="content-wrapper">
  <img src={logoImg} alt="Happy"/>
<main>
  <h1>Leve felicidade para o Mundo</h1>
  <p>Visite orfanatos e mude o dia de muitas crianças.</p>
<div className="location">
  <strong>Guarujá</strong>
  <span>São Paulo</span>
</div>
</main>

</div>
    </div>
  );
}


export default App;
