import React from 'react';
import { useState } from "react";
import  Login  from './Login';
import  Register  from './Register';

export default function LoginRegister() {
  let [blanc, setLogin] = useState(true);

  return (
    <div className="App">
      {blanc ? <Login setLogin={setLogin} /> : <Register setLogin={setLogin} />}
    </div>
  );
}
