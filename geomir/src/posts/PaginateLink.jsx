import React from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../slices/posts/postSlice';


export const PaginateLink = ({ page }) => {

    const dispatch = useDispatch();

    return (
        <>
            <div>
                {page.active ? (
                    <>
                        <a  href="#!">
                            {/* Per eliminar els &quote */}
                            <div dangerouslySetInnerHTML={{ __html: page.label }} />
                        </a>
                    </>
                ) : (
                    <>
                        <li>
                            {/* Artifici per a obtenir el número de pàgina de la url */}
                            <a onClick={(e) => { if (page.url != null) dispatch(setPage(page.url.split("=")[1])) }} href="#!">
                                <div dangerouslySetInnerHTML={{ __html: page.label }}/>
                            </a>
                        </li>
                    </>
                )
                }
            </div>
        </>

    )

}