import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { BiCopy } from 'react-icons/bi';
import { Circles } from 'react-loading-icons';
import { SEE_COMMENT_BY_USER_ID } from '../../GraphQl/Queries';
import './viewcomments.css';
import CommentCard from '../../components/CommentCard/CommentCard';
const ViewComments = () => {
  const idofuser = localStorage.getItem('secret-uuid');
  const url = `https://feedback-anon.netlify.app/comment/${idofuser}`;
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
            <div>
              {loading ? (
                <Circles />
              ) : (
                <h3>No feedback yet , share your link to get feedback</h3>
              )}
            </div>
          )}
        </div>

        <h3>Share your link to get more comments</h3>

        <div
          onClick={() => {
            navigator.clipboard.writeText(url);
            alert('copied url to clipboard!');
          }}
          className="url-copy-div"
        >
          {url}

          <div className="copy-badge">
            <BiCopy />
          </div>
        </div>
        <button onClick={() => navigate('/')} className="primary-btn">
          Go Home
        </button>
        <div onClick={() => navigate('/aboutme')} className="footer-info">
          About me
        </div>
      </div>
    </div>
  );
};

export default ViewComments;
