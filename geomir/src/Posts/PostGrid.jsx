import React from 'react'
import {useContext } from 'react';
import { UserContext } from '../userContext';
import './posts.css'

const PostGrid =({post}) => {
    let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)
  return (
    <>  
        <div className='cardpostgrid'>
            <div className='postimg'>
                <img src={"https://backend.insjoaquimmir.cat/storage/" + post.file.filepath} alt={post.name} height="400"width="300"/>
            </div>
            <div className='Infopost'>
                <div className='nameAuthor'>
                    <p>@{post.author.name}</p>
                </div>
                <hr  color='yellow'/>
                <div className='bodyPost'>
                    {post.body}    
                </div>
                <div className='likespost'>
                    Likes: {post.likes_count}
                </div>
            </div>
        </div>
    </>
  )
}

export default PostGrid