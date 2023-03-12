import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PlaceMark from './PlaceMark';

const PlaceMarks = () => {


    const { placeMarks } = useSelector((state) => state.placeMarks);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem("marksPlaces", JSON.stringify(placeMarks));
    }, [placeMarks]);


    return (
        <div className="h-100 w-full flex  justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                {placeMarks.length == 0 ? (
                    <div>No hi ha res</div>
            
                ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th colSpan={2}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {placeMarks.map((placeMark) => (
                                    <PlaceMark key={placeMark.id} placeMark={placeMark} />
                                ))}
                            </tbody>
                        </table>
                )}

            </div>
        </div>
    );
};

export default PlaceMarks;