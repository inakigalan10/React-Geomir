import { useState } from 'react';
import React from 'react'
import { useContext, useEffect } from "react";
import { UserContext } from "../userContext";

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
  {<div className="container">
    <div className="screen">
      <div className="screen__content">

        <form id="formulario" className="login">
          <div className="title">Add Post</div>

          <div className="login__field">
            <input type="text" className="login__input" placeholder="Description" id="description" name="description" onChange={handleChange}/>
          </div>
          <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="file" className="login__input" placeholder="Upload" id="upload" name="upload" onChange={handleChange}/>
            </div>

            <div className="login__field ">
              <i className="login__icon fas fa-lock"></i>
              <input type="number" className="login__input" placeholder="Latitude" id="latitude" name="latitude" value={formulari.latitude} onChange={handleChange}/>
            </div>

            <div className="login__field ">
              <i className="login__icon fas fa-lock"></i>
              <input type="number" className="login__input" placeholder="Longitude" id="longitude" name="longitude" value={formulari.longitude} onChange={handleChange}/>
            </div>

            <div>
              <input type="radio" id="visibility" name="visibility" value="1" checked onChange={handleChange}/>
              <label htmlFor="public">Public</label>
            </div>
            <div>
              <input type="radio" id="visibility" name="visibility" value="2" onChange={handleChange}/>
              <label htmlFor="private">Contacts</label>
            </div>
            <div>
              <input type="radio" id="visibility" name="visibility" value="3" onChange={handleChange}/>
              <label htmlFor="private">Private</label>
            </div>

            <button className="button login__submit"
              onClick={(e) => {
                sendPlace(e);
              }}>
              <span className="button__text">Submit</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>		

          </form>
          
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>		
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>		
        </div>
    </div>}
  </div>
)
}

export default PostAdd