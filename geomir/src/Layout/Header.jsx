import { Link } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useState, useContext, useEffect } from 'react';
import './layout.css'


export default function Header() {
  let[username, setUserName]=useState("");
  let {authToken, setAuthToken}=useContext(UserContext)
  let [ roles, setRoles] = useState([]);


  const getUser = async () => {
    try {

      const data = await fetch("https://backend.insjoaquimmir.cat/api/user", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bearer '  + authToken,

        },
        method: "GET",
    })
      const resposta = await data.json();
      if (resposta.success == true )
      {
        console.log(resposta); 
        setUserName(resposta.user.name);  
        setRoles(resposta.roles)
      }else{
        console.log("La resposta no ha triomfat");

      }            
      
    } catch {
      console.log("Error");
      console.log("catch");
    }
  };



const logout = async (e) => {
  e.preventDefault();

  // Enviam dades a l'aPI i recollim resultat
  try {
    const data = await fetch("https://backend.insjoaquimmir.cat/api/logout", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      'Authorization': 'Bearer '  + authToken,

    },
    method: "POST",
  })
  const resposta = await data.json();
     if (resposta.success === true) {
      console.log(resposta.authToken);
      setAuthToken('')
       
     }else{
       console.log("La resposta no ha triomfat");
     }
     
    } catch {
      console.log("Error");
      console.log("catch");
    }
  };
  useEffect(()=>{
    getUser();
}, [])
  
  return (
    <>
      <div className="menu">
        <div id='user' className='item'>
          <div className='userinfo'>
              <h2 id='nameUser'>{username}</h2>
              <p id='roleUser'> { roles.map (  (v)=> ( 
              <span key={v}> {v} </span>
              ) ) }</p>
            </div>
            <div className='logOut'>
              <button className="secon-btn"
                onClick={(e) => {
                  logout(e);
                }}>Log Out
              </button>
            </div>
        </div>
        <div className='item'>
          <Link to="/places">Places </Link>
        </div>
        <div className='item'>
          <Link to="/posts">Posts</Link>
        </div>
        <div className='item'>
          <Link to="/about">About </Link>
        </div>  
      </div>
    </>
  );
}