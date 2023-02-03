import React from 'react';
import {useContext } from 'react';
import { UserContext } from '../userContext';
import './posts.css';
import {FaRegEye} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs';


export default function PostList ({post})  {
  let { user, setUser,authToken,setAuthToken } = useContext(UserContext)

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
        
        {(user == post.author.email) ?
          <td>
            <AiFillEdit/>
          </td>
          : <td></td>
        }

        {(user == post.author.email) ?
          <td>
              <BsFillTrashFill/>
          </td>
          : <td></td>
        }
  
         
    </>
  )
}
