import React from 'react'
import './index.css'

export const Login = () => {
  return (
    <div>
      <section class="form-login">
        <h5>Formulario Login</h5>
        <input class="controls" type="text" name="usuario" value="" placeholder="Usuario"/>
        <input class="controls" type="password" name="contrasena" value="" placeholder="Contraseña"/>
        <input class="buttons" type="submit" name="" value="Ingresar"/>
        <p><a href="#">¿Olvidastes tu Contraseña?</a></p>
    </section>
    </div>
  )
}
