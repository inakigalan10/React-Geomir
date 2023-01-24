import  React  from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useState, useContext } from 'react';
import './layout.css'

export default function Header() {
  let {authToken, setAuthToken}=useContext(UserContext)

  const logout = (e) => {
    e.preventDefault();
    console.log("Comprovant credencials....");
    // Enviam dades a l'aPI i recollim resultat
    fetch("https://backend.insjoaquimmir.cat/api/logout", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer '  + authToken,

      },
      method: "POST",
    })
      .then((data) => data.json())
      .then((resposta) => {
       console.log(resposta);
       if (resposta.success === true) {
         console.log(resposta.authToken);
         setAuthToken('')
       }
     })
      .catch((data) => {
        console.log(data);
        console.log("Catchch");
     });  
   };
  return (
    <>
      <div className="menu">
        <div>
          <Link to="/places">Places </Link>
        </div>
        <div>
          <Link to="/posts">Posts </Link>
        </div>
        <div>
          <Link to="/about">About </Link>
        </div>
        <div>
          <Link to="/about">About </Link>

        </div>
        <div className='logOut'>
          <button className="secon-btn"
              onClick={(e) => {
                logout(e);
              }}>Log Out</button>
        </div>

        
      </div>
    </>
  );
}