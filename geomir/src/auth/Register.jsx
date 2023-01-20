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
    <body>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form>
            <h3>Register Here</h3>

            <label for="user">User</label>
            <input type="text" placeholder="Email or Phone" id="user" name="user" onChange={handleChange}/>

            <label for="email">Email</label>
            <input type="text" placeholder="Email or Phone" id="email" name="email" onChange={handleChange}/>

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" name="password" onChange={handleChange} />

            <label for="password">Repeat Password</label>
            <input type="password" placeholder="Password" id="password" name="password2" onChange={handleChange} />


            <button
            onClick={(e) => {
              handleRegister(e);
            }}
            >Register In</button>

            <button
            onClick={() => {
              setLogin(true);
            }}>Login</button>

        </form>
    </body>
  </div>
  )
}
