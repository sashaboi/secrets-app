import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { BallTriangle } from 'react-loading-icons';

import './makecomment.css';
import { ADD_COMMENT } from '../../GraphQl/Mutations';
import { FIND_USERNAME_BY_ID } from '../../GraphQl/Queries';
const MakeComment = () => {
  const [comment, setComment] = useState('');
  const [disabled, setDisabled] = useState(false);
  const { id } = useParams();
  const onMutationComplete = () => {
    setComment('');
    setDisabled(false);
  };
  const [AddComment] = useMutation(ADD_COMMENT, {
    onCompleted: onMutationComplete,
  });

  const { data, loading, error } = useQuery(FIND_USERNAME_BY_ID, {
    variables: { uid_from_local: id },
  });

  if (error) {
    alert('error occured with the api');
    console.log(error.message);
  }
  const sendCommentHandler = () => {
    if (comment !== '') {
      setDisabled(true);
      AddComment({
        variables: { comment: comment, commented_on_user_id: id },
      });
    }
  };
  return (
    <div className="page-parent">
      <div className="app-container">
        <h1>
          Write Feedback for <br />{' '}
          {data ? data.Users_by_pk.username : <BallTriangle />}{' '}
        </h1>

        <input
          value={comment}
          onChange={e => setComment(e.target.value)}
          type="text"
          placeholder="write your feedback here"
        />
        <button
          className="primary-btn"
          disabled={comment.length === 0 || disabled}
          onClick={sendCommentHandler}
        >
          Send comment
        </button>
        <button
          disabled={comment.length === 0}
          onClick={() => navigate('/')}
          className="primary-btn"
        >
          Create your own link..
        </button>
        <div onClick={() => navigate('/aboutme')} className="footer-info">
          About me
        </div>
      </div>
    </div>
  );
};

export default MakeComment;
