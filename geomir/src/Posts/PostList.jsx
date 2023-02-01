import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom'
import './posts.css'


export default function PostList ({post})  {
  let { user, setUser,authToken,setAuthToken } = useContext(UserContext)

  return (
    <>
        <td>{post.id}</td>
        <td>{post.name}</td>
        <td>{post.author.name}</td>
        <td>{post.latitude}</td>
        <td>{post.longitude}</td>
        <td>{post.visibility.name}</td>
        <td><i className="bi bi-star-fill"></i>{post.likes_count}</td>
        <td><Link className="headerLink" to={"/posts/" +post.id}><i className="bi bi-eye"></i></Link></td>
        <td><Link className="headerLink" to={"/posts/edit/" +post.id}><i className="bi bi-pencil-square"></i></Link></td>
        <td><i className="bi bi-trash3"></i></td> : <td/>
        
    </>
  )
}
