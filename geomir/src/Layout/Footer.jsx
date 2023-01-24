import  React  from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
    
  return (
    <>
      <div>
        <Link to="/coses">foot </Link>
        <Link to="/enlloc">Enlloc </Link>
        <Link to="/about">About </Link>
      </div>
      <hr />
    </>
  );
}