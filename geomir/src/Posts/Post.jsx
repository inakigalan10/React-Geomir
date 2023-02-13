import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { UserContext } from "../userContext";
import CommnetsList from './comments/CommnetsList';
import './posts.css';


export default function Posts() {
  let { id } = useParams();
    let { userEmail, setUserEmail, authToken, setAuthToken } = useContext(UserContext);
    let [isLoading, setIsLoading] = useState(true)
    let [post, setPost] = useState({});

  const getPost = async(e) => {
    try{
      
        const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken,
        },
        method: "GET"
      })
      const resposta = await data.json();
      if (resposta.success === true) setPost  (resposta.data), console.log(resposta), setIsLoading(false);
      
      else alert("La resposta no a triomfat");

      }catch{
        console.log("Error");
        alert("catch");  
      }
      
  }
  useEffect(() => { 
    getPost(); }, []);
  return (
    <>  {(isLoading == true) ? <div>Cargando datos...</div>:
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
        <div><CommnetsList id={post.id}/></div>
    </div>
     
        
      }
    </>
    

  
    )
  }
  