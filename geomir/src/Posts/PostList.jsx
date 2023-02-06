import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../userContext';
import './posts.css';
import {FaRegEye} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs';


export default function PostList ({post})  {
  let { authToken,setAuthToken } = useContext(UserContext);
  let[username, setUserName]=useState("");
  const getUser = async () => {
    try {
  
      const data = await fetch("https://backend.insjoaquimmir.cat/api/user", {
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
        console.log(resposta); 
        setUserName(resposta.user.name);  
        setRoles(resposta.roles)
      }else{
        console.log("La resposta no ha triomfat");
  
      }            
      
    } catch {
      console.log("Error");
      console.log("catch");
    }
  };
  useEffect(()=>{
    getUser();
  }, [])
  

  return (
    <>
        <td>{post.id}</td>
        <td>{post.body}</td>
        <td>{post.author.name}</td>
        <td>{post.latitude}</td>
        <td>{post.longitude}</td>
        <td>{post.visibility.name}</td>
        <td>{post.likes_count}</td>

        <td>
              <FaRegEye/>
        </td>
        
        {(username == post.author.name) ?
          <td>
            <AiFillEdit/>
          </td>
          : <td></td>
        }

        {(username == post.author.name) ?
          <td>
              <BsFillTrashFill/>
          </td>
          : <td></td>
        }
  
         
    </>
  )
}
