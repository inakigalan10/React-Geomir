import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import PostList from './PostList';


const PostsList = () => {
  let [ posts, setPosts] = useState([]);
  let {user, setUser, authToken, setAuthToken}=useContext(UserContext)


const getPosts = async (e) => {
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

      }else{
        console.log("La resposta /api/posts no ha triomfat")
      }            
      
    } catch {
      console.log("Error /api/posts");
      console.log("catch /api/posts");
    }
  };
  useEffect(()=>{
    getPosts();
}, [])
  return (
      <> 
        <table className='postsList'>
          <tbody>
            <tr id='PostsListHeader'>
              <th>Id</th>
              <th>Body</th>
              <th>Author</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Visibility</th>
              <th>Likes</th>

            </tr>       
            {posts.map((post) => (
                <tr key={posts.id} id='post'><PostList post={post} /></tr>
            ))}
          </tbody>
      </table>
    </>
    
  )
}


export default PostsList