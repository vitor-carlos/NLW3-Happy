import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowRight, FiPlus} from "react-icons/fi";
import { Map,TileLayer, Marker, Popup } from 'react-leaflet';



import mapMarkertImg from '../images/map-marker.svg';
//import { FiPrinter } from 'react-icons/fi';//

import'../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';


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

<Map center={[-23.9823302,-46.2187237]}
     zoom={15}
     style={{width: '100%', height:'100%'}}
>
  <TileLayer 
  url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>



<Marker 
icon={mapIcon}
position={[-23.9823302,-46.2187237]}
>
  <Popup clssButton={false} minWidth={240} maxWidth={240} className="map-popup">
Lar das Meninas
<Link to="/orphanages/1">
  <FiArrowRight size={20} color="#fff"/>
</Link>
  </Popup>
</Marker>
</Map>


<Link to="/orphanages/create" className="create-orphanage">
<FiPlus size={32} color="#fff" />
</Link>

  </div>

);
}
export default OrphanagesMap;