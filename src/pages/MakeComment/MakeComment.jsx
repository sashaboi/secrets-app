import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import './makecomment.css';
import { ADD_COMMENT } from '../../GraphQl/Mutations';
const MakeComment = () => {
  const [comment, setComment] = useState('');
  const { id } = useParams();

  const [AddComment] = useMutation(ADD_COMMENT);

  const sendCommentHandler = () => {
    AddComment({
      variables: { comment: comment, commented_on_user_id: id },
    });
  };
  return (
    <div>
      <h1>MakeComment</h1>
      <input
        onChange={e => setComment(e.target.value)}
        type="text"
        placeholder="write your comment here"
      />
      <button onClick={sendCommentHandler}>Send comment</button>
    </div>
  );
};

export default MakeComment;
