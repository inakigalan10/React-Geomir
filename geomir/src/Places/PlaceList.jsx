import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom'
import './places.css'
import {AiOutlineStar} from 'react-icons/ai'
import { FaRegEye } from 'react-icons/fa'
import { FaCommentDots } from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'

export default function placesList({ place, deletePlace, refresh, setRefresh })  {
  let { authToken, setAuthToken, username, setUserName } = useContext(UserContext);

  return (
    <>
      <td>{place.id}</td>
      <td>{place.name}</td>
      <td>{place.author.name}</td>
      <td>{place.latitude}</td>
      <td>{place.longitude}</td>
      <td>{place.visibility.name}</td>
      <td>{place.favorites_count}</td>
      <td>{place.reviews_count}
        
        <Link to={"/places/" + place.id + "/reviews"}>
          <br />
          <FaCommentDots />
        </Link>
      </td>

      <td>
        <Link to={"/places/" + place.id} >
          <FaRegEye />
        </Link>


      </td>

      {(username == place.author.email) ?
        <td>
          <Link to={"/places/edit/" + place.id}>
            <AiFillEdit />
          </Link>
        </td>
        : <td></td>
      }

      {(username == place.author.email) ?
        <td>
          <Link>
            <BsFillTrashFill
              onClick={() => {
                deletePlace(place.id), setRefresh(!refresh);
              }} />

          </Link>
        </td>
        : <td></td>
      }


    </>
  )
}
