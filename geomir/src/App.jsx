import React from 'react'
import { UserContext } from "./userContext";
import LoginRegister  from './auth/LoginRegister';
import { useState } from "react";
import Header from './Layout/Header';
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import About from "./About";
import Posts from "./Post/Posts"
const App = () => {
    let [authToken, setAuthToken] = useState("");


  return (
    <UserContext.Provider value={{ authToken, setAuthToken }} >
    {authToken ? (
      <>
         <Header />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Posts />} />
              <Route path="/about" element={<About />} />
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


