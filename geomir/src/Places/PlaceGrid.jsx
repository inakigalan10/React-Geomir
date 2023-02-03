import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom'
import './places.css'

export const PlaceGrid = ({place}) => {
    console.log(place)
    let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)
  return (
    <>
        <div className='containerGrid'>
        <p>@{place.author.name}</p>
        <h2>{place.name}</h2>
            <img src={"https://backend.insjoaquimmir.cat/storage/" + place.file.filepath} alt={place.name} height="400"width="300"/>
            <div className='InfoPlace'>
                {place.description}     
            </div>
            <div className='divFavorites'>
                <i className="bi bi-star-fill"></i>
                {place.favorites_count}
            </div>
        </div>
    </>
  )
}