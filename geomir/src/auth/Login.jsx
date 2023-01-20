import React from 'react'
import './auth.css'
import { useState } from "react";

export default function Login ({setLogin}) {

   let [usuario, setUsuario] = useState("");
   let [password, setPassword] = useState("");

   const sendLogin = (e) => {
     e.preventDefault();
     console.log("He enviat les Dades:  " + usuario + "/" + password);
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

            <label for="username">Username</label>
            <input 
            type="text" 
            placeholder="Email or Phone" 
            id="username"
            name="usuario"
            onChange={(e) => {
              setUsuario(e.target.value);
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

            <button
            onClick={(e) => {
              sendLogin(e);
            }}
            >Log In</button>

            <button
            onClick={() => {
              setLogin(false);
            }}>Register</button>

        </form>
    </body>
</div>
  )
}
