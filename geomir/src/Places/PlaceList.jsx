import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom'
import './places.css'
import {AiOutlineStar} from 'react-icons/ai'
import {FaRegEye} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'

export default function placesList ({place})  {
  let {authToken,setAuthToken } = useContext(UserContext)

  return (
    <>
        <td>{place.id}</td>
        <td>{place.name}</td>
        <td>{place.author.name}</td>
        <td>{place.latitude}</td>
        <td>{place.longitude}</td>
        <td>{place.visibility.name}</td>
        <td>{place.favorites_count}<AiOutlineStar/></td>


        {(user == place.author.email) ?
          <tr><FaRegEye/><AiFillEdit/><BsFillTrashFill/></tr>
          : <tr><FaRegEye/></tr>
        }


    </>
  )
}
