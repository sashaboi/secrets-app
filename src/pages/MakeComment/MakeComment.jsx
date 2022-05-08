import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { BallTriangle } from 'react-loading-icons';

import './makecomment.css';
import { ADD_COMMENT } from '../../GraphQl/Mutations';
import { FIND_USERNAME_BY_ID } from '../../GraphQl/Queries';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import Alert from '../../components/Alert/Alert';
import { UseAlert } from '../../context/Alert-context';
const MakeComment = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const [disabled, setDisabled] = useState(false);
  const { alertstatus, alertmessage, showalert } = UseAlert();
  const { id } = useParams();
  const onMutationComplete = () => {
    setComment('');
    showalert('Comment added');
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
      setComment('sending comment..');
    }
  };
  return (
    <div className="page-parent">
      <Navbar />
      {alertstatus && <Alert message={alertmessage} />}
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
        <button onClick={() => navigate('/')} className="secondary-btn">
          Create your own link..
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default MakeComment;
