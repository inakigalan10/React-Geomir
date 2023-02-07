import { useState } from 'react';
import React from 'react'
import { useContext, useEffect } from "react";
import { UserContext } from "../userContext";
import './posts.css';


const PostAdd = () => {
  let [formulari, setFormulari] = useState({

    latitude:"",
    longitude:""
});

let { authToken,setAuthToken } = useContext(UserContext);

useEffect(() => {

navigator.geolocation.getCurrentPosition( (post )=> {
  setFormulari({
    ...formulari,
    latitude :  post.coords.latitude,
    longitude:  post.coords.longitude,
    visibility : 1
  })

});
}, [])

  const handleChange = (e) => {
    e.preventDefault();
    setFormulari({
      // ...formulari es como el cache
      ...formulari,
      [e.target.name]: e.target.type == "file" ? e.target.files[0] : e.target.value
    });
  };
  const sendPlace = async(e) => {
    e.preventDefault();
    let {body,upload,latitude,longitude,visibility}=formulari;
    const formData = new FormData();
    formData.append("body", body);
    formData.append("upload", upload);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("visibility", visibility);
    try{
      const data = await fetch("https://backend.insjoaquimmir.cat/api/posts", {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + authToken,
        },
        method: "POST",
        body: formData
      })
      const resposta = await data.json();
      if (resposta.success === true){ 
        console.log(resposta), 
        formulario.reset(), 
        console.log("Post enviado");
        

    }else{ 
        console.log("La resposta no ha triomfat");}
        
    }catch{
      console.log("Error");
      console.log("catch");
    }
    
  };
return (
  <div>
  
      
        <form id="formulario" className="formularioPostAdd">
          <div className="title">Add Post</div>

          <div className="input">
            <label htmlFor="body">Body</label>
            <input type="text"  placeholder="Body" id="body" name="body" onChange={handleChange}/>
          </div>
          <div className="input">
              <label htmlFor="upload">File</label>
              <input type="file"  placeholder="Upload" id="upload" name="upload" onChange={handleChange}/>
            </div>

            <div className="input">
              <label htmlFor="latitude">Latitude</label>
              <input type="number"  placeholder="Latitude" id="latitude" name="latitude" value={formulari.latitude} onChange={handleChange}/>
            </div>

            <div className="input">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" className="login__input" placeholder="Longitude" id="longitude" name="longitude" value={formulari.longitude} onChange={handleChange}/>
            </div>

            <div>
              <label htmlFor="visibility">Visibility</label>
              <select name="visibility" id="privacity">
                <option onChange={handleChange} name="visibility" value="1">Public</option>
                <option onChange={handleChange} name="visibility" value="2">Contacts</option>
                <option onChange={handleChange} name="visibility" value="3">Private</option>
            </select> 
            </div>

            <button
              onClick={(e) => {
                sendPlace(e);
              }}>
                Enviar Post
            </button>
            	

          </form>
          
  </div>
)
}

export default PostAdd