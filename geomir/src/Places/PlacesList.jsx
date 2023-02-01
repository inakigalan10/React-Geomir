
import React, { useState, useContext, useEffect, useCallback } from 'react';
import { UserContext } from "../userContext";
import { PlaceList } from './PlaceList'
import './places.css'
export const PlacesList = () => {
  let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)
  let [places, setPlaces] = useState([]);

  const sendPlacesList = async (e) => {
    try{
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places", {
          headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + authToken
          },
          method: "GET",
      })
      const resposta = await data.json();
          if (resposta.success === true) {
            setPlaces(resposta.data)
          }else{
              setMissatge(resposta.message);
          }

    }catch {
      console.log(data);
    }
  }
  useEffect(() => { sendPlacesList(); }, []);
  console.log(usuari); 
  return (
    <>
      
      <table id='tablePlaceList'>
        <tbody>
          <tr id='tr1PlaceList'>
            <th>Id</th>
            <th>Name</th>
            <th>Author</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Reviews</th>
            <th>Visibility</th>
            <th>Favorites</th>

          </tr>       
          {places.map((place) => (
              <tr  key={places.id} ><PlaceList place={place} /></tr>
          ))}
        </tbody>
      </table>

    </>
  )
}