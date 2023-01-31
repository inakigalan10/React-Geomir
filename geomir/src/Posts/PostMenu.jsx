import React from 'react'
import './posts.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 



const PostMenu = () => {
    
  return (
    <div>
        <ul>
            <li>
                <Link to="/posts/add">
                    Add Post
                </Link>
            </li>
            <li>
                <Link to="/posts/grid">
                    Grid
                </Link>
            </li>
            <li>
                <Link to="/posts">
                    List
                </Link>
            </li>
            
        </ul>  
    </div> 
  )
}

export default PostMenu