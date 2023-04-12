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
    <ul className='flex justify-center items-center my-10'>
          { pages.map ( (page)=> (
                
                <PaginateLink page={page}/>
              
            ) ) }
    </ul>
       
    </>
  )
}

export default Paginate