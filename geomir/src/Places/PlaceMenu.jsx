import React from 'react'
import './places.css'
import { Link } from 'react-router-dom'

const PlaceMenu = () => {
  return (
    <div>
        <ul>
            <li><Link to="/places/add">Afegir Place</Link></li>
            <li><Link to="/places/grid">Grid</Link></li>
            <li><Link to="/places">List</Link></li>
        </ul>  
    </div> 
  )
}

export default PlaceMenu
  