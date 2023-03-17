import React from "react";
import { useEffect } from "react";
import { Comment } from "./Comment";

import { useContext } from "react";
import { UserContext } from "../../userContext";

import { useState } from "react";
import { CommentAdd } from "./CommentAdd";
import { CommentsContext } from "./commentsContext";
import { getComments } from "../../slices/comments/thunks";
import { useDispatch, useSelector } from "react-redux";
import { setAdd, setCommentsCount } from "../../slices/comments/commentSlice";


// Fem servir un context únicament dins de tots els components de Comments

export const CommentsList = ({ id, comments_count }) => {
  const { usuari, email,setUsuari, authToken, setAuthToken } = useContext(UserContext);
  const { comments = [], page=0, isLoading=true, add=true, error="", commentsCount=0 } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCommentsCount(comments_count))
    dispatch(getComments(0, id, authToken,email));
  }, []);

  return (
    < >
      {add ? <CommentAdd id={id} /> : <></>}
      <div class="flex mx-auto items-center justify-center  mt-6 mx-8 mb-4 max-w-lg">
        {commentsCount == 0 ? (
          <div className="flex mb-4 w-full items-center space-x-2 rounded-2xl bg-red-50 px-4 ring-2 ring-red-200">
            No hi ha comments
          </div>
        ) : (
          <div className="flex mb-4 w-full items-center space-x-2 rounded-2xl bg-blue-50 px-4 ring-2 ring-blue-200">
            Hi ha {commentsCount} {commentsCount > 1 ? " ressenyes" : " ressenya"}{" "}
          </div>
        )}
      </div>

      {error ? (
        <div className="flex mb-4 w-full items-center space-x-2 rounded-2xl bg-red-50 px-4 ring-2 ring-red-200 ">
          {error}
        </div>
      ) : (
        <></>
      )}

      {comments.map((v) => {
        return <Comment key={v.id} comment={v} />;
      })}
    </>
  );
};
