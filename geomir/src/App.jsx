import React from 'react'
import { UserContext } from "./userContext";
import LoginRegister  from './auth/LoginRegister';
import { useState } from "react";
import Header from './Layout/Header';
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import About from "./About";
import Posts from "./Posts/Posts";
import PlacesList from "./Places/PlacesList"
import PlacesGrid from "./Places/PlacesGrid";
import PlaceAdd from './Places/PlaceAdd';
import Place from './Places/Place'; 
import PlaceEdit from './Places/PlaceEdit';
import PlaceMenu from './Places/PlaceMenu';
import ReviewsList from './Places/reviews/ReviewsList';

const App = () => {
    let [authToken, setAuthToken] = useState("");
    let [username, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ authToken, setAuthToken, username, setUserName }} >
    {authToken ? (
      <>
         <Header />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Posts />} />
              <Route path="/about" element={<About />} />
              {/* PLACES */}
              <Route path="/places" element={<> <PlaceMenu/> <PlacesList /> </>} />
              <Route path="/places/grid" element={<> <PlaceMenu/> <PlacesGrid /> </>} />
              <Route path="/places/add" element={<> <PlaceMenu/> <PlaceAdd /></>} />
              <Route path="/places/:id" element={<> <PlaceMenu/> <Place /> </>} />
              <Route path="/places/edit/:id" element={<> <PlaceMenu /> <PlaceEdit /> </>} />
              <Route path="/places/:id/reviews" element={<><ReviewsList /></>} /> 
            </Routes>
      </>
    ) : (
      <>
        <LoginRegister />
      </>
      
    )}
  </UserContext.Provider>

);
}
export default App


