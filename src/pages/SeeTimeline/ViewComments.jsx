import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { BiCopy } from 'react-icons/bi';
import { Circles } from 'react-loading-icons';
import { SEE_COMMENT_BY_USER_ID } from '../../GraphQl/Queries';
import './viewcomments.css';
import Modal from '../../components/Modal/Modal';
import CommentCard from '../../components/CommentCard/CommentCard';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import Alert from '../../components/Alert/Alert';
import { UseAlert } from '../../context/Alert-context';
const ViewComments = () => {
  const { alertstatus, alertmessage, showalert } = UseAlert();
  const idofuser = localStorage.getItem('secret-uuid');
  const url = `${window.location.origin}/comment/${idofuser}`;
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
  console.log(commentsFromApi.length);
  const spamFilterHandler = () => {
    setCommentsFromApi(commentsFromApi.filter(obj => obj.comment.length > 5));
    showalert('Spam removed');
  };
  const showRelevant = () => {
    setCommentsFromApi(
      [...commentsFromApi].sort(function (a, b) {
        return b.comment.length - a.comment.length;
      })
    );
    showalert('Showing relevant first');
  };
  const showAll = () => {
    setCommentsFromApi(data.comments);
    showalert('Showing all');
  };
  return (
    <div className="page-parent">
      <Navbar />
      {alertstatus && <Alert message={alertmessage} />}
      <div className="comments-section-container">
        <div className="horizontal-align">
          <h1>
            {commentsFromApi.length}{' '}
            {commentsFromApi.length === 1 ? <>comment</> : <>comments</>} for{' '}
            {myName}
          </h1>
          <button onClick={() => spamFilterHandler()} className="secondary-btn">
            Filter spam
          </button>
          <button onClick={() => showRelevant()} className="secondary-btn">
            Show relevant
          </button>
          <button onClick={() => showAll()} className="secondary-btn">
            Show all
          </button>
        </div>

        <Modal />
        <div className="comment-renderer">
          {commentsFromApi.length !== 0 ? (
            commentsFromApi.map(obj => (
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

        <div
          onClick={() => {
            navigator.clipboard.writeText(url);
            showalert('copied url to clipboard!');
          }}
          className="url-copy-div"
        >
          {url}

          <div className="copy-badge">
            <BiCopy />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewComments;
