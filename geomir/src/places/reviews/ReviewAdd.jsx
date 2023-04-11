import React, { useEffect } from 'react'
import { useContext } from 'react';
import { UserContext } from '../../userContext';
import { useForm } from '../../hooks/useForm';
import { addReview, getReviews } from '../../slices/reviews/thunks';
import { useDispatch, useSelector } from 'react-redux';


export const ReviewAdd = ({ id }) => {
  const { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext);
  const dispatch = useDispatch();
  const {formState, onInputChange} = useForm({
   review: ""
   })
   const{review} = formState;

  useEffect(() => {
    dispatch(getReviews(0, id, authToken,usuari));
  }, []);
  
  return (

    <>      
      <div class="flex mx-auto items-center justify-center  mt-6 mx-8 mb-4 max-w-lg">
         <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
            <div class="flex flex-wrap -mx-3 mb-6">
               <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Afegeix un nova review</h2>
               <div class="w-full md:w-full px-3 mb-2 mt-2">
                  <textarea  onChange={onInputChange} value={review} class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" 
                  name="review" placeholder='Escriu la teva review' required></textarea>
               </div>
               <div class="w-full md:w-full flex items-start md:w-full px-3">
                  <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                     <svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                     </svg>
                     <p class="text-xs md:text-sm pt-px">Some HTML is okay.</p>
                  </div>
                  <div class="-mr-1">
                     <input  
                     onClick={(e) => dispatch(addReview(id, review, authToken))}
                      type='button' class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Place Review'/>
                  </div>
               </div>
               </div>
            </form>
      </div>

    </>
  )
}
