import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCopy } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { UseUser } from '../../context/user-context';
import './sharelink.css';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import Alert from '../../components/Alert/Alert';
import { UseAlert } from '../../context/Alert-context';

const ShareLink = () => {
  const navigate = useNavigate();
  const textWithUrl = 'Share what you think about me .... anonymously : ';
  const { alertstatus, alertmessage, showalert } = UseAlert();
  const userId = localStorage.getItem('secret-uuid');
  let textinurl =
    'What%20do%20you%20think%20about%20me%20%3F%20Tell%20me%20anonymously%0A%0A';
  useEffect(() => {
    if (userId === null) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  const twitterIntent = `https://twitter.com/intent/tweet?text=${textinurl}&url=https%3A%2F%2Ffeedback-anon.netlify.app%2Fcomment%2F${userId}`;
  console.log(twitterIntent);

  const idofuser = userId;
  console.log(idofuser);
  const url = `${window.location.origin}/comment/${idofuser}`;
  return (
    <div className="page-parent">
      <Navbar />
      {alertstatus && <Alert message={alertmessage} />}
      <div className="share-link-container app-container">
        <h1>
          Share your link to get feedback <span>Anonymously</span>
        </h1>
        <div className="social-icons-container">
          <p>Share your link to get feedback </p>
          <a
            className="twitter-icon"
            href={twitterIntent}
            rel="noreferrer"
            target={'_blank'}
          >
            <BsTwitter />
          </a>
        </div>
        <div
          onClick={() => {
            navigator.clipboard.writeText(textWithUrl + url);
            showalert('copied url to clipboard!');
          }}
          className="url-copy-div"
        >
          {url}

          <div className="copy-badge">
            <BiCopy />
          </div>
        </div>

        <button
          className="primary-btn"
          onClick={() => navigate('/viewcomments')}
        >
          See my comments
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ShareLink;
