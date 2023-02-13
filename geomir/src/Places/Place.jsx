import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { UserContext } from "../userContext";
import './places.css';


export default function places() {
  let { id } = useParams();
  let { userEmail, setUserEmail, authToken, setAuthToken } = useContext(UserContext);
  let [isLoading, setIsLoading] = useState(true)
  let [place, setplace] = useState({});

  const getplace = async (e) => {
    try {

      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + authToken,
        },
        method: "GET"
      })
      const resposta = await data.json();
      if (resposta.success === true) setplace(resposta.data), console.log(resposta), setIsLoading(false);

      else alert("La resposta no a triomfat");

    } catch {
      console.log("Error");
      alert("catch");
    }

  }
  useEffect(() => { getplace(); }, []);
  return (
    <>  {(isLoading == true) ? <div>Cargando datos...</div> :
      <div className='cardplacegrid'>
        <div className='placeimg'>
          <img src={"https://backend.insjoaquimmir.cat/storage/" + place.file.filepath} alt={place.name} height="400" width="300" />
        </div>
        <div className='Infoplace'>
          <div className='nameAuthor'>
            <p>@{place.author.name}</p>
          </div>
          <hr color='yellow' />
          <div className='placename'>
            {place.name}
          </div>
          <div className='placedesc'>
            {place.description}
          </div>
          <div className='likesplace'>
            Favourites: {place.favorites_count}
          </div>
        </div>
      </div>
    }
    </>



  )
}