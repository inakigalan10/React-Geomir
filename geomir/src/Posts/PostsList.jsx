import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import PostList from './PostList';


const PostsList = () => {
  let [ posts, setPosts] = useState([]);
  let { authToken, setAuthToken}=useContext(UserContext);
  let[username, setUserName]=useState("");

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
console.log(username)

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
              <th>Show</th>
              <th>edit</th>
              <th>delete</th>


            </tr>      
          { posts.map ( (post)=> (
              (post.visibility.name != 'private' || username == post.author.name) &&
              <tr key={posts.id} id='post'><PostList post={post} /></tr>
          ))}
          </tbody>
      </table>
    </>
    
  )
}


export default PostsList