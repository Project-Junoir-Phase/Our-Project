import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; 

mapboxgl.accessToken = 'pk.eyJ1Ijoid29ya3NwYWNlODU0IiwiYSI6ImNsbDlnZHgxbzFmNmQzY2w3cnlteDF6cmQifQ.0mKeOtdHiEMHDyGzUef0fw';

const Maps = ({onChange , onChangeEnd}) => {
console.log(onChangeEnd);



  const mapContainer = useRef(null);
  const map = useRef(null);
  const markerRef = useRef(null);
  const [lng, setLng] = useState(10.16579);
  const [lat, setLat] = useState(36.81897); 
  const [zoom, setZoom] = useState(9);
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });
map.current.on('load', () => {
      map.current.on('click', (e) => {
        const { lng, lat } = e.lngLat;

        if (markerRef.current) {
          markerRef.current.remove();
        }

        markerRef.current = new mapboxgl.Marker({
          color: "#FF0000",
          width: 30,
          height: 30,
        })
        .setLngLat([lng, lat])
        .addTo(map.current);

        setLng(lng); // remove toFixed here
        setLat(lat); // remove toFixed here

        reverseGeocode(lng, lat);
      });
    });

    return () => map.current.remove();
 }, []);
  const reverseGeocode = async (longitude, latitude) => {
     try {
       const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`);
       const data = await response.json();
 
       if (data.features.length > 0) {
         const name = data.features[0].place_name;
         onChange(name)
         onChangeEnd(name)
         
       } else {
         setLocationName('');
       }
     } catch (error) {
       console.error('Error fetching location:', error);
     }
  };
 
  return (
     <div>
       <div className="sidebar">
         Longitude: {lng} | Latitude: {lat} | Location: {locationName}
       </div>
       <div ref={mapContainer} className="map-container mt-16 " style={{ width: '670px', height: '620px' }} />
     </div>
  );
 };


 export default Maps