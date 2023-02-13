import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import { PlaceGrid } from './PlaceGrid'

export const placesGrid = () => {
  let [places, setPlaces] = useState([]);
  let { username, setUserName, authToken, setAuthToken } = useContext(UserContext)

  const sendPlacesGrid = async (e) => {
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
          console.log(resposta);
          if (resposta.success == true) {
              setPlaces(resposta.data)
              setAuthToken(authToken);
          }else{
            setMissatge("La resposta no ha triomfat");
          }

    }catch {
      console.log("Algo ha salido mal");
    }
  }
  useEffect(() => { sendPlacesGrid(); }, []);
  return (
    <>
        <div className='placegrid'>
          { places.map ( (place)=> ( 
              <PlaceGrid place={place} />
          ) ) }
          
        </div>  
    </>
  )
}
export default placesGrid