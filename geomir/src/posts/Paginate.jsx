import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { PaginateLink } from './PaginateLink';

const Paginate = () => {
    const { pages } = useSelector((state) => state.posts);
    
    useEffect ( ()=> {

        console.log(pages)


    },[pages])
  return (
    <>

          { pages.map ( (page)=> (
                
                <PaginateLink page={page}/>
              
            ) ) }
       
    </>
  )
}

export default Paginate