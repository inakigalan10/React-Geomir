import React from 'react'
import './auth.css'
import { UserContext } from '../userContext';
import { useState, useContext } from 'react';


export default function Login ({setLogin}) {

   let [email, setEmail] = useState("");
   let [password, setPassword] = useState("");
   let {authToken, setAuthToken}=useContext(UserContext)


   const sendLogin = (e) => {
     e.preventDefault();
     console.log("Comprovant credencials....");
     // Enviam dades a l'aPI i recollim resultat
     fetch("https://backend.insjoaquimmir.cat/api/login", {
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json"
       },
       method: "POST",
       body: JSON.stringify({ email: email, password: password })
     })
       .then((data) => data.json())
       .then((resposta) => {
        document.querySelector(".input_vacio").hidden = false
        document.querySelector(".input_vacio").innerHTML = resposta['message']
        console.log(resposta);
        if (resposta.success === true) {
          console.log(resposta.authToken);
          setAuthToken(resposta.authToken)
        }
      })
       .catch((data) => {
         console.log(data);
         console.log("Catchch");
      });
      console.log("He enviat les Dades:  " + email + "/" + password);
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
