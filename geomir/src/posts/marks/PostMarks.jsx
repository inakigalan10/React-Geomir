import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PostMark from './PostMark';
// import postsMarksReducer from './postsMarksReducer';


// const initialState = [];

// const init = ()=> {

//     return JSON.parse(localStorage.getItem("marksPost")) || []
// }

const PostMarks = () => {

    // const [marks, dispatchPosts] = useReducer(postsMarksReducer, initialState,init);

    const { postMarks } = useSelector((state) => state.postMarks);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem("marksPosts", JSON.stringify(postMarks));
      }, [postMarks]);

    // const handleDeleteMark = (id) => {
    //     console.log("AQui arribo " + id);
    //     dispatchPosts({
    //         type: "Del Mark",
    //         payload: id
    //     });
    //     console.log("Mark Eliminado")
    // };

    return (
        <>
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                {postMarks.length == 0 ? (
                <div>No hi ha res</div>
                ) : (
                <></>
                )}
                {postMarks.map((postMark) => (
                    <>
                    <th>Body</th>
                    <th colSpan={2}>Actions</th>
                    <tr>
                        <PostMark key={postMark.id} postMark={postMark}/>
                    </tr>
                    </>
                ))}
            </div>
        </div>
        </>

        
    )
}

export default PostMarks
