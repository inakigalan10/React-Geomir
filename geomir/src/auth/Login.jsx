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
      <section class="form-login">
        <h5>Formulario Login</h5>
          <input 
              class="controls" 
              type="text" name="usuario" 
              placeholder="Usuario"
              onChange={(e) => {
                setUsuario(e.target.value);
              }}
              />
          <input 
            class="controls"
            type="password" 
            name="contrasena" 
            placeholder="Contraseña"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            />
          <button class="buttons" type="submit" name="" value="Ingresar"
          onClick={(e) => {
            sendLogin(e);
          }}
          >Login</button>
          <button
        onClick={() => {
          setLogin(false);
        }}
      >
      ¿No tienes cuenta?
      </button>
        <p><a href="#">¿Olvidastes tu Contraseña?</a></p>
    </section>
    </div>
  )
}
