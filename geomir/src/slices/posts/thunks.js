import { setError, setPosts, startLoadingPosts, setPost, setLikes, setLiked, setPages } from "./postSlice";



export const getposts = (page = 0, authToken) => {

    return async (dispatch, getState) => {
    dispatch(startLoadingPosts());
    const url =
    page > 0
    ? "https://backend.insjoaquimmir.cat/api/posts?paginate=1&page=" + page 
    : "https://backend.insjoaquimmir.cat/api/posts";
    const options = {
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + authToken,
    },
    method: "GET",
    };
    try {
        const res = await fetch(url, options);
        const json = await res.json();
        // si es pagina, data.collection i no data
        console.log(json.data.links);
        if (page > 0) {
            dispatch(setPosts(json.data.collection));
            dispatch(setPages(json.data.links));
            console.log(json.data.links);
        } else { 
        dispatch(setPosts(json.data));
        }
    } catch (e) {
        setError(e);
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

export const addPost = (formulari, authToken) => {
    return async (dispatch, getState) => {

    let { body, upload, latitude, longitude, visibility } = formulari;
    const formData = new FormData();
        
    formData.append("body", body);
    formData.append("upload", upload);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("visibility", visibility);

    const data = await fetch(
      "https://backend.insjoaquimmir.cat/api/posts/",
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + authToken,
        },
        method: "POST",
        body: formData,
      }
    );
    const resposta = await data.json();

    if (resposta.success == true) {
        console.log("Post Creat");
    } else {
        setError(resposta.message);
    }
  };
}

export const getPost = (id, authToken) => {
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
        const url = "https://backend.insjoaquimmir.cat/api/posts/" + id

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setPost(resposta.data));
            dispatch(setLikes(resposta.data.likes_count));
            dispatch(testLikes(id, authToken));

        } else {
            dispatch(setError(resposta.message));
        }
    };
}

export const testLikes = (id, authToken) => {
    return async (dispatch, getState) => {
        
        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
        };
        const url = "https://backend.insjoaquimmir.cat/api/posts/" + id + "/likes"

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setLiked(false));
            console.log('liked False')
            const headers = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + authToken,
                },
                method: "DELETE",
            };
            const url = "https://backend.insjoaquimmir.cat/api/posts/" + id + "/likes"
    
            const data = await fetch(url,  headers  );
            const resposta = await data.json();

        } else {
            dispatch(setLiked(true));
            console.log("Liked");
        }
    };
}

export const like = (id, authToken, likes) => {
    return async (dispatch, getState) => {

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
        };
        const url = "https://backend.insjoaquimmir.cat/api/posts/" + id + "/likes"

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setLiked(true));
            dispatch(setLikes(likes + 1));
        } else {
            dispatch(setLiked(false));
        }
    };
}

export const unlike = (id, authToken, likes) => {
    return async (dispatch, getState) => {

        const headers = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "DELETE",
        };
        const url = "https://backend.insjoaquimmir.cat/api/posts/" + id + "/likes"

        const data = await fetch(url,  headers  );
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setLiked(false));
            dispatch(setLikes(likes - 1));
        }
    };
}

export const editPost = (formulari, authToken, post) => {
    return async (dispatch, getState) => {

    let { body, upload, latitude, longitude, visibility } = formulari;
    const formData = new FormData();
        
    formData.append("body", body);
    formData.append("upload", upload);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("visibility", visibility);

    const data = await fetch(
      "https://backend.insjoaquimmir.cat/api/posts/" + post.id,
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + authToken,
        },
        method: "POST",
        body: formData,
      }
    );
    const resposta = await data.json();

    if (resposta.success == true) {
        console.log("Post Editat");
    } else {
        setError(resposta.message);
    }
  };
}