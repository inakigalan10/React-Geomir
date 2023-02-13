import React from 'react'
import './auth.css'
import { UserContext } from '../userContext';
import { useState, useContext } from 'react';


export default function Login ({setLogin}) {
   let [email, setEmail] = useState("");
   let [password, setPassword] = useState("");
  let { authToken, setAuthToken, username, setUserName }=useContext(UserContext)
      
   const sendLogin = async(e) => {
     e.preventDefault();
     try {
     // Enviam dades a l'aPI i recollim resultat
     const data = await fetch("https://backend.insjoaquimmir.cat/api/login", {
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json"
       },
       method: "POST",
       body: JSON.stringify({ email, password })

     });

     const resposta = await data.json();
        document.querySelector(".input_vacio").hidden = false
        document.querySelector(".input_vacio").innerHTML = resposta['message']
      if (resposta.success === true)
        setAuthToken(resposta.authToken),
        setUserName(email);
      else 
        console.log("La resposta no ha triomfat");
        console.log("He enviat les Dades:  " + email + "/" + password);
    } catch {
      console.log("Error");
      console.log("catch");
    }
  };

  return (
    <div>
    <body>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form>
            <h3>Login Here</h3>

            <label for="username">Email</label>
            <input 
            type="email" 
            placeholder="Email" 
            id="username"
            name="usuario"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            />

            <label for="password">Password</label>
            <input 
            type="password"
            name="password"
            placeholder="Password" 
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            ></input>
            <div hidden class="input_vacio">

            </div>
            <button
            onClick={(e) => {
              sendLogin(e);
            }}
            >Log In</button>

            <button class="secon-btn"
            onClick={() => {
              setLogin(false);
            }}>Register</button>

        </form>
    </body>
</div>
  )
}
