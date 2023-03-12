import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { delpostmark } from '../../slices/postMarkSlice';

const PostMark = ({postMark}) => {
    console.log(postMark)
    const dispatch = useDispatch();
    return (
        <>
            <div className="flex mb-4 items-center">
            <p className="w-full text-grey-darkest">
                {postMark.body}
            </p>
            
            <td
                      className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-600 hover:bg-green-500"
                      ><Link to={postMark.ruta}>VEURE</Link></td>
            <br></br>
            <td><button        className="flex-no-shrink  p-2 ml-2 border-2 rounded  border-red-600  hover:text-white text-red-400 hover:bg-red-500"
                             onClick={(e) => {dispatch(delpostmark(postMark.id))}}>ESBORRAR</button></td>
            </div>
            
        </>

    )
}

export default PostMark