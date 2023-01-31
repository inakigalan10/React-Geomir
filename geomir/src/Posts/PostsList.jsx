import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';


const PostsList = () => {
  let [ posts, setPosts] = useState([]);
  let {authToken, setAuthToken}=useContext(UserContext)


  const getPosts = async () => {
      try {
  
        const data = await fetch("https://backend.insjoaquimmir.cat/api/posts", {
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
          setPosts(resposta.data);
          setAuthToken(authToken);  
          console.log(posts); 

         
        }else{
          console.log("La resposta no ha triomfat");
  
        }            
        
      } catch {
        console.log("Error");
        console.log("catch");
      }
    };
    useEffect(()=>{
      getPosts();
  }, [])
  return (
    <div className='posts'>

      <h1>Aqui van post list</h1>
     
    </div>
  )
}


export default PostsList