import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom'
import {AiOutlineStar} from 'react-icons/ai'
import {FaRegEye} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'
import './places.css'

export const PlaceGrid = ({place}) => {
    console.log(place)
    let { username, setUser, authToken,setAuthToken } = useContext(UserContext)
  return (
    <>
        <div className='cardplacegrid'>
            <div>
        {(username == place.author.email) ?
          <tr><FaRegEye/><AiFillEdit/><BsFillTrashFill/></tr>
          : <tr><FaRegEye/></tr>
        }
        </div>
            <div className='placeimg'>
                <img src={"https://backend.insjoaquimmir.cat/storage/" + place.file.filepath} alt={place.name} height="100%"width="300"/>
            </div>
            <div className='Infoplace'>
                <div className='nameAuthor'>
                    <p>@{place.author.name}</p>
                </div>
            
                  <hr color='yellow' />
                  <div className='bodyName'>
                      {place.name}
                  </div>
                <div className='bodyPlace'>
                    {place.description}    
                </div>
                <div className='favouritePlace'>
                    <AiOutlineStar/>{place.favorites_count}
                </div>
            </div>
        </div>
    </>
  )
}