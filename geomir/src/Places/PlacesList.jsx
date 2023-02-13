import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import PlaceList from './PlaceList';


const placesList = () => {
  let [ places, setPlaces] = useState([]);
  let [refresh, setRefresh] = useState(false)

  let { authToken,setAuthToken, username, setUserName } = useContext(UserContext);


const getplaces = async (e) => {
    try {

      const data = await fetch("https://backend.insjoaquimmir.cat/api/places", {
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
        setPlaces(resposta.data);
        setAuthToken(authToken);

      }else{
        console.log("La resposta no ha triomfat")
      }            
      
    } catch {
      console.log("Error");
      console.log("catch /api/places");
    }
  };
  useEffect(()=>{
    getplaces();
  }, [refresh])
  

  const deletePlace = async (id) => {
    try {

      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + authToken,
        },
        method: "DELETE"
      })
      const resposta = await data.json();
      if (resposta.success === true) {
        console.log(resposta),
          setRefresh(!refresh);

      } else {
        console.log("La resposta no a triomfat");
      }

    } catch {
      console.log("Error");
      alert("catch");
    }

  }
  return (
      <> 
        <table className='placesList'>
          <tbody>
            <tr id='placesListHeader'>
              <th>Id</th>
              <th>Name</th>
              <th>Author</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Visibility</th>
              <th>Favourites</th>
              <th>Comments</th>
              <th>Show</th>
              <th>edit</th>
              <th>delete</th>
            </tr>       
            { places.map ( (place)=> (
              (place.visibility.name != 'private' || username == place.author.email) &&
              <tr key={place.id} id='place'><PlaceList place={place} deletePlace={deletePlace} setRefresh={setRefresh} refresh={refresh}/></tr>
            ))}
          </tbody>
      </table>
    </>
    
  )
}


export default placesList