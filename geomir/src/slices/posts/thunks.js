import { setError, setPosts, startLoadingPosts } from "./postSlice";


export const getposts = (page = 0, authToken, usuari="") => {
    return async (dispatch, getState) => {

        dispatch(startLoadingPosts());

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "https://backend.insjoaquimmir.cat/api/posts"

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) 
        {
            dispatch(setPosts(resposta.data));
        }
        else {
            dispatch (setError(resposta.message));
        }
       
};
}
export const delPost = (post, authToken) => {
    return async (dispatch, getState) => {
        let confirma = confirm("Estas  segur?");

        if (confirma) {
        const data = await fetch(
            "https://backend.insjoaquimmir.cat/api/posts/" + post.id,
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + authToken,
                },
                method: "DELETE",
              }
          );
          const resposta = await data.json();
    
          console.log(resposta);
          if (resposta.success == true) {
        
            // usuari no l'indiquem i per defecta estarà a ""
            dispatch (getposts(0,authToken))
            const state = getState()
          }
    };
}
};