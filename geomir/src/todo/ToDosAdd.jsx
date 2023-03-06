import React from 'react'
import { useForm } from '../hooks/useForm';



export const ToDosAdd = ({handleNewToDo}) => {

    const { formState, onInputChange, onResetForm} = useForm({
        id: 0,
        text: "",
        done: false,
        });
        const {id, text,done} = formState;

  return (
    <div className="py-9 p1-9">
        <div className='w-1/3'>
            <label className='text-gray-600'>Text</label>
            <input type="text"  value={text}
                name="text"
                onChange={onInputChange}
                className="w-300 px-4 py-3 border border-gray-300 rounded-sm  outline-nine focus:border-gray-400"
            />
            <div className='py-9'>
                <button type='submit'
                    onClick={(e)=>{handleNewToDo(formState); onResetForm(formState)}}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    Afegit Tasca 
                </button>
            </div>
            
        </div>
        
    </div>  
    
  )
  }
