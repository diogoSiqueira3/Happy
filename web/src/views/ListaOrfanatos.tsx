import React from 'react';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/mapMarker.svg';
import '../styles/pages/lista-orfanatos.css';

function ListaOrfanatos() {
    return (
        <div id="page-map" className="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="marker" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Belo Horizonte</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>

            <MapContainer
                center={[-19.8846547,-44.0355033]}
                zoom={12}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            </MapContainer>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    )
}

export default ListaOrfanatos;