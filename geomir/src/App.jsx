import React from 'react'
import { UserContext } from "./userContext";
import LoginRegister  from './auth/LoginRegister';
import { useState } from "react";
import Header from './Layout/Header';
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import About from "./About";
import Post from "./Posts/Post";
import PostAdd from "./Posts/PostAdd";
import PostEdit from "./Posts/PostEdit";
import PostsGrid from "./Posts/PostsGrid";
import PostsList from "./Posts/PostsList";
import Index from './index';
import PostMenu from './Posts/PostMenu';



const App = () => {
    let [authToken, setAuthToken] = useState("");
    let [username, setUserName ] = useState("");
   



  return (
    <UserContext.Provider value={{ authToken, setAuthToken, username, setUserName }} >
    {authToken ? (
      <>
         <Header />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              /*POSTS */
              <Route path="/posts" element={ <><PostMenu/> <PostsList/></> } /> 
              <Route path="/posts/grid" element={<> <PostMenu/> <PostsGrid /> </>} />
              <Route path="/posts/add" element={ <><PostMenu/> <PostAdd/></> } /> 
              <Route path="/posts/:id" element={ <><PostMenu/> <Post/></> } /> 
              <Route path="/posts/edit/:id" element={ <><PostMenu/> <PostEdit/></> } /> 

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


