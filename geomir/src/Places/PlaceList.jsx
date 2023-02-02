import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom'
import './places.css'


export default function placesList ({place})  {
  let { user, setUser,authToken,setAuthToken } = useContext(UserContext)

  return (
    <>
        <td>{place.id}</td>
        <td>{place.name}</td>
        <td>{place.author.name}</td>
        <td>{place.latitude}</td>
        <td>{place.longitude}</td>
        <td>{place.visibility.name}</td>
        <td><i className="bi bi-star-fill"></i>{place.likes_count}</td>
        <td><Link className="headerLink" to={"/places/" +place.id}><i className="bi bi-eye"></i></Link></td>
        <td><Link className="headerLink" to={"/places/edit/" +place.id}><i className="bi bi-pencil-square"></i></Link></td>
        <td><i className="bi bi-trash3"></i></td> : <td/>
        
    </>
  )
}
