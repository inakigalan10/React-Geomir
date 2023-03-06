import React from 'react'

export const PostMark = (postMarks, handleDeleteMarkPost) => {
  return (
    <div key={postMarks.id} className="flex mb-4 items-center">
        
          <p className='w-full text-green'> 
            {postMarks.body}
          </p> 
       
        <button onClick={()=>{handleDeleteMarkPost(postMarks.id)}} className="flex-no-shrink p-2 m1-2 mr-2 border-2 rounde text-red-400 border-red-600 hover:text-white hover:bg-red-500">
          Remove
        </button>

    </div>
    )
}
