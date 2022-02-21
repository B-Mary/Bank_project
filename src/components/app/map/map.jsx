import React from 'react';
import classes from './map.module.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

 import 'leaflet/dist/leaflet.css';
 import L from "leaflet";

const position = [56.70, 60.35]

const iconBank = L.icon({
  iconUrl: '/img/icon/location.svg',
  iconSize: [64, 64],
  iconAnchor: [32, 64],
})

const markers = [
    {location : [57.09, 65.32], popupText: "Маркер1"},
    {location : [55.45, 37.36], popupText: "Маркер2"},
    {location : [51.53, 46.00], popupText: "Маркер3"},
    {location : [54.59, 73.22], popupText: "Маркер4"},
    {location : [55.57, 49.70], popupText: "Маркер5"},
]

function MapRender (){
    return (
        <div className={classes["map-wrapp"]}>
            <h2 className={classes["map-wrapp__title"]}>Отделения Лига Банка</h2>
            <MapContainer center={position} zoom={5} scrollWheelZoom={false} style={{ height: "462px", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={iconBank}>
                    <Popup>
                    {markers.popupText} <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
        
    )
}

export default MapRender;