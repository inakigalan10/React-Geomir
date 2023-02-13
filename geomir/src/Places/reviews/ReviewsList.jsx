import React from 'react'
import '../places.css';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../userContext';

const ReviewsList = ({ id }) => {
    let { authToken, setAuthToken, username, setUserName } = useContext(UserContext);
    let [reviews, setReviews] = useState([]);

    const getReviews = async () => {
        try {
            const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id + "/reviews", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + authToken,

                },
                method: "GET"
            })
            const resposta = await data.json();
            if (resposta.success === true) {
                setReviews(resposta.data),
                    console.log(resposta);

            } else {
                console.log("La resposta no a triomfat");
            }
        } catch {
            console.log("Error");
            console.log("catch");
        }
    }
    useEffect(() => {
        getReviews();
    }, []);
    return (
        <table className='placesList'>
            <tbody>
                <tr id='PlacesListHeader'>
                    <th>Id</th>
                    <th>Body</th>
                    <th>Author</th>
                </tr>
            </tbody>
        </table>
    )
}

export default ReviewsList