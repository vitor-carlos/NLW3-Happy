import React from 'react';
import { Link } from 'react-router-dom';
import {FiPlus} from "react-icons/fi";
import { Map } from 'react-leaflet';


import mapMarkertImg from '../images/map-marker.svg';
//import { FiPrinter } from 'react-icons/fi';//

import'../styles/pages/orphanages-map.css';


function OrphanagesMap(){
return(
  <div id="page-map">
    <aside>
      <header>
        <img src={mapMarkertImg} alt="Happy"/>
      <h2>Escolha um orfanato no mapa</h2>
      <p>Muitas crianças estão esperando a sua visita :)</p>
      </header>
      <footer>
        <strong>Guarujá</strong>
        <span>São Paulo</span>
      </footer>
    </aside>


    <div></div>
<Link to="" className="create-orphanage">
<FiPlus size={32} color="#fff" />
</Link>

  </div>

);
}
export default OrphanagesMap;