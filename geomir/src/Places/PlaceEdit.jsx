import { useState } from 'react';
import React from 'react'
import { useContext, useEffect } from "react";
import { UserContext } from "../userContext";
import { useParams } from "react-router-dom";

const PlaceEdit = () => {
  const { id } = useParams();
  let [formulari, setFormulari] = useState({});
  let { authToken, setAuthToken } = useContext(UserContext);
  let [place, setPlace] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setFormulari({
      // ...formulari es como el cache
      ...formulari,
      [e.target.name]: e.target.type == "file" ? e.target.files[0] : e.target.value
    });
  };

  const getPlace = async (e) => {
    try {

      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + authToken,
        },
        method: "GET"
      })
      const resposta = await data.json();
      if (resposta.success === true)
        setFormulari({
          name: resposta.data.name,
          description: resposta.data.description,
          upload: resposta.data.file,
          latitude: resposta.data.latitude,
          longitude: resposta.data.longitude,
          visibility: resposta.data.visibility.id
        })
          , console.log(resposta);

      else alert("La resposta no a triomfat");

    } catch {
      console.log("Error");
      alert("catch");
    }

  }




  const sendPlace = async (e) => {
    e.preventDefault();
    let { name, description, upload, latitude, longitude, visibility } = formulari;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("upload", upload);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("visibility", visibility);
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id, {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + authToken,
        },
        method: "POST",
        body: formData
      })
      const resposta = await data.json();
      if (resposta.success === true) {
        console.log(resposta),
          console.log("Place editado");


      } else {
        console.log("La resposta no ha triomfat");
      }

    } catch {
      console.log("Error");
      console.log("catch");
    }

  }
  useEffect(() => {
    getPlace();
    sendPlace();
    navigator.geolocation.getCurrentPosition((pos) => {

      setFormulari({

        ...formulari,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude

      })

      console.log("Latitude is :", pos.coords.latitude);
      console.log("Longitude is :", pos.coords.longitude);
    });

  }, [])
  return (
    <div>


      <form id="formulario" className="login">
        <div className="title">Edit Place</div>
        <div className="">

          <input type="text" className="" placeholder="Name" id="name" name="description" defaultValue={formulari.name} onChange={handleChange} />
        </div>

        <div className="">

          <input type="text" className="" placeholder="description" id="description" name="description" defaultValue={formulari.description} onChange={handleChange} />
        </div>


        <div className="">

          <input type="file" className="" placeholder="Upload" id="upload" name="upload" onChange={handleChange} />
        </div>

        <div className=" ">

          <input type="number" className="" placeholder="Latitude" id="latitude" name="latitude" value={formulari.latitude} onChange={handleChange} />
        </div>

        <div className=" ">

          <input type="number" className="login__input" placeholder="Longitude" id="longitude" name="longitude" value={formulari.longitude} onChange={handleChange} />
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
          <span className="button__text">Submit</span>
        </button>

      </form>
    </div>
  )
}

export default PlaceEdit