import React from 'react'
import { UserContext } from '../userContext';
import { useState, useContext } from 'react';


export default function Register ({setLogin}) {

  let {authToken, setAuthToken}=useContext(UserContext)
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
    let { name, password, password2, email } = formulari;

    if (password2 !== password) {
      console.log("Els passwords han de coincidir");
      document.getElementById("passError").hidden = false
      document.getElementById("passError").innerHTML = "Els passwords han de coincidir"

      return false;
    }

    fetch("https://backend.insjoaquimmir.cat/api/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      // Si els noms i les variables coincideix, podem simplificar
      body: JSON.stringify({ name, email, password })
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
        console.log("Catch");
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
            <h3>Register Here</h3>

            <label for="name">User</label>
            <input type="text" placeholder="User" id="user" name="name" onChange={handleChange}/>

            <label for="email">Email</label>
            <input type="text" placeholder="Email" id="email" name="email" onChange={handleChange}/>


            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" name="password" onChange={handleChange} />

            <label for="password2">Repeat Password</label>
            <input type="password" placeholder="Repeat Password" id="password2" name="password2" onChange={handleChange} />
            <div hidden id="passError" >

            </div> 
            <div hidden class="input_vacio">

            </div>

            <button
            onClick={(e) => {
              handleRegister(e);
            }}
            >Register In</button>

            <button class="secon-btn"
            onClick={() => {
              setLogin(true);
            }}>Login</button>

        </form>
    </body>
  </div>
  )
  
}
