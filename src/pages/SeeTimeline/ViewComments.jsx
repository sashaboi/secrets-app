import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Circles } from 'react-loading-icons';
import { SEE_COMMENT_BY_USER_ID } from '../../GraphQl/Queries';
import './viewcomments.css';
import CommentCard from '../../components/CommentCard/CommentCard';
const ViewComments = () => {
  const navigate = useNavigate();
  const [commentsFromApi, setCommentsFromApi] = useState([]);
  const myId = localStorage.getItem('secret-uuid');
  const myName = localStorage.getItem('secret-user-name');
  console.log({
    _eq: myId,
  });
  const { data, loading } = useQuery(SEE_COMMENT_BY_USER_ID, {
    variables: { userId: myId },
  });
  useEffect(() => {
    if (data) {
      console.log(data);

      setCommentsFromApi(data.comments);
    }
  }, [data]);
  return (
    <div className="page-parent">
      <div className="comments-section-container">
        <h1>ViewComments</h1>
        <h3>Listing all comments for {myName}</h3>
        <div className="comment-renderer">
          {commentsFromApi.length !== 0 ? (
            commentsFromApi.map(obj => (
              // <div className="comment-child" key={obj.pk}>
              //   {obj.comment}
              // </div>
              <CommentCard key={obj.pk} comment={obj.comment} />
            ))
          ) : (
            <p>
              <Circles />
            </p>
          )}
        </div>
        <button onClick={() => navigate('/sharelink')} className="primary-btn">
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ViewComments;
