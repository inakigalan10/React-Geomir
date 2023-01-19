import React from 'react'
import { useState } from "react";


export default function Register ({setLogin}) {

  let [formulari, setFormulari] = useState({});

  const handleChange = (e) => {
    e.preventDefault();

    setFormulari({
      ...formulari,
      [e.target.name]: e.target.value
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();

    let { user, password, password2, email } = formulari;
    console.log(
      "He enviat les Dades:  " +
        user +
        "/" +
        email +
        "/" +
        password +
        "/" +
        password2
    );
  };
  return (
    <div>
    <section class="form-login">
      <h5>Formulario de Registro</h5>
        <input class="controls" type="text" name="user"  placeholder="Usuario" onChange={handleChange}/>
        <input class="controls" type="email" name="email"  placeholder="Email" onChange={handleChange}/>
        <input class="controls" type="password" name="password"  placeholder="Contraseña" onChange={handleChange}/>
        <input class="controls" type="password" name="password2"  placeholder="Contraseña" onChange={handleChange}/>
        <button class="buttons" type="submit" name="" value="Ingresar"
          onClick={(e) => {
              handleRegister(e);
            }}>
            Register
        </button>
        <button
        onClick={() => {
          setLogin(true);
        }}
      >
      ¿Ya tienes cuenta?
      </button>
    
      <p><a href="#">¿Olvidastes tu Contraseña?</a></p>
  </section>
  </div>
  )
}
