'use client'

import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L, { map } from 'leaflet'
import { useState } from 'react'
import PlaceForm from './PlaceForm'

function ShowLatLongOnClick() {

    const Map = useMap()

    useMapEvent('click', (event) => {
        const lat = event.latlng.lat
        const long = event.latlng.lng

        //Criar e exibir um popup na posição do click
        L.popup().setLatLng([lat, long]).setContent(`Você clicou nesta posição do mapa: ${lat.toFixed(2)} ${long.toFixed(2)}`).openOn(Map)
        
    })

    return null

}

type Props = {
    setFormPosition: (position: [number, number]) => void
}

function ShowPlaceFormOnClick({setFormPosition}: Props) {
    useMapEvent("click", (e) => {
        
        const position: [number, number] = [e.latlng.lat, e.latlng.lng]
            setFormPosition(position)

    })


    return null
}

export default function Map() {

    const [formPosition, setFormPosition] =
        useState<[number,number] | null >(null)

    return (

        <MapContainer
            center={[-3.0, -39.0]}
            zoom={13}
            scrollWheelZoom={true}
            className=' h-[600px] w-3/4 rounded-lg shadow-lg'
        >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-3.0, -39.0]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>

            {/* <ShowLatLongOnClick/> */}
            <ShowPlaceFormOnClick setFormPosition={setFormPosition} />

            {formPosition && (
            <Marker 
                position={formPosition} 
                icon={
                    new L.icon({
                        iconUrl:"https://cdn-icons-png.flaticon.com/512/9055/9055170.png",
                        iconSize:[40,40],
                    })
                } >

                <Popup>
                    <PlaceForm 
                        lat={parseFloat(formPosition[0].toFixed(2))} 
                        lng={parseFloat(formPosition[1].toFixed(2))} />
                </Popup>
            </Marker>)}

        </MapContainer>

    )

}