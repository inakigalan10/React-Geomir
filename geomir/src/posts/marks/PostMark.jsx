import React from 'react';
import { Link } from 'react-router-dom';

export const PostMark = ({postMark, handleDeleteMarkPost}) => {
  return (
    <div key={postMark.id} className="flex mb-4 items-center">
        
          <p className='w-full text-green'> 
            {postMark.body}
          </p> 
          <Link to={postMark.link} className= "flex-no-shrink p-2 m1-2 mr-2 border-2 rounde text-green-400 border-green-600 hover:text-white hover:bg-green-500">
            Ver Post
          </Link>
        <button onClick={()=>{handleDeleteMarkPost(postMark.id)}} className="flex-no-shrink p-2 m1-2 mr-2 border-2 rounde text-red-400 border-red-600 hover:text-white hover:bg-red-500">
          Remove
        </button>

    </div>
    )
}
