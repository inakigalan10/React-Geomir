import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../userContext';
import './posts.css';
import {FaRegEye} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs';
import {FaCommentDots} from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default function PostList ({post, deletePost ,refresh, setRefresh})  {
  let { authToken,setAuthToken, username, setUserName } = useContext(UserContext);

  

  return (
    <>
        <td>{post.id}</td>
        <td>{post.body}</td>
        <td>{post.author.name}</td>
        <td>{post.latitude}</td>
        <td>{post.longitude}</td>
        <td>{post.visibility.name}</td>
        <td>{post.likes_count}</td>
        <td>{post.comments_count} 
          <br />
            <Link to={"/posts/post/"+post.id+"/comment"}>
              <FaCommentDots/>
            </Link>
        </td>

        <td>
            <Link to={"/posts/" + post.id} >
              <FaRegEye/>
            </Link>
           

        </td>
        
        {(username == post.author.email) ?
          <td> 
             <Link to={"/posts/edit/" + post.id}>
                <AiFillEdit/>
              </Link>
          </td>
          : <td></td>
        }

        {(username == post.author.email) ?
          <td>
            <Link>
              <BsFillTrashFill
              onClick={() => {
                deletePost(post.id), setRefresh(!refresh);
                }}/>
              
          </Link>
          </td>
          : <td></td>
        }
  
         
    </>
  )
}
