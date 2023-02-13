import React from 'react'
import '../places.css';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../userContext';

const CommnetsList = ({ id }) => {
    let { user, setUser, authToken, setAuthToken } = useContext(UserContext)
    let [comments, setComments] = useState([]);

    const getComments = async () => {
        try {
            const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/" + id + "/comments", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + authToken,

                },
                method: "GET"
            })
            const resposta = await data.json();
            if (resposta.success === true) {
                setComments(resposta.data),
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
        getComments();
    }, []);
    return (
        <table className='postsList'>
            <tbody>
                <tr id='PostsListHeader'>
                    <th>Id</th>
                    <th>Body</th>
                    <th>Author</th>
                </tr>

            </tbody>
        </table>
    )
}

export default CommnetsList