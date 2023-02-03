import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import PlaceList from './PlaceList';


const placesList = () => {
  let [ places, setPlaces] = useState([]);
  let {user, setUser, authToken, setAuthToken}=useContext(UserContext)


const getplaces = async (e) => {
    try {

      const data = await fetch("https://backend.insjoaquimmir.cat/api/places", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bearer '  + authToken,

        },
        method: "GET",
    })
      const resposta = await data.json();
      if (resposta.success == true )
      {
        setPlaces(resposta.data);
        setAuthToken(authToken);  

      }else{
        console.log("La resposta /api/places no ha triomfat")
      }            
      
    } catch {
      console.log("Error /api/places");
      console.log("catch /api/places");
    }
  };
  useEffect(()=>{
    getplaces();
}, [])
  return (
      <> 
        <table className='placesList'>
          <tbody>
            <tr id='placesListHeader'>
              <th>Id</th>
              <th>Name</th>
              <th>Author</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Visibility</th>
              <th>Favourites</th>
              <th>Opciones</th>

            </tr>       
            {places.map((place) => (
                <tr key={places.id} id='place'><PlaceList place={place} /></tr>
            ))}
          </tbody>
      </table>
    </>
    
  )
}


export default placesList