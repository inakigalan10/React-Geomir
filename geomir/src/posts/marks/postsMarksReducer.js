export const postsMarkReducer = (initialState, action) => {
    switch (action.type) {
      case "Add Post Mark":
        console.log("AAAAAfegeixo")
        return [...initialState, action.payload];
  
      case "Del Post Mark":
        // Retornarà un nou array amb tots els elements menys el de l'id
        return initialState.filter((postMark) => postMark.id !== action.payload);
  
      default:
        return [...initialState];
    }
  };