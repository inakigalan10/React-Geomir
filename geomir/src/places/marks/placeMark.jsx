import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { delplacemark } from '../../slices/placeMarkSlice';

const PlaceMark = ({ placeMark }) => {
    console.log(placeMark)
    const dispatch = useDispatch();
    return (
        
        <tr className="mb-4 items-center">
            <td className="text-grey-darkest">{placeMark.name}</td>
            <td className="text-grey-darkest">{placeMark.name}{placeMark.description}</td>
            <td>
                <Link
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-600 hover:bg-green-500"
                    to={placeMark.ruta}
                >
                    VER
                </Link>
            </td>
            <td>
                <button
                    className="flex-no-shrink  p-2 ml-2 border-2 rounded  border-red-600  hover:text-white text-red-400 hover:bg-red-500"
                    onClick={(e) => {
                        dispatch(delplacemark(placeMark.id));
                    }}
                >
                    ELIMINAR
                </button>
            </td>
        </tr>

            
        
    );
};

export default PlaceMark