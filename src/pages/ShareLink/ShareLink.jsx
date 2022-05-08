import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCopy } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { UseUser } from '../../context/user-context';
import './sharelink.css';

const ShareLink = () => {
  const { username, userId } = UseUser();

  const navigate = useNavigate();
  const idofuser = userId;
  console.log(idofuser);
  const twitterIntent = `https://twitter.com/intent/tweet?text=Tell%20me%20something%20....%20Anonymously.%20Give%20Me%20Feedback%20!&url=https%3A%2F%2Ffeedback-anon.netlify.app%2Fcomment%2Fb5ab602f-05a8-41a0-b1d5-ca179a1bd024`;
  const url = `https://feedback-anon.netlify.app/comment/${idofuser}`;
  return (
    <div className="page-parent">
      <div className="share-link-container app-container">
        <h1>
          Share your link to get feedback <span>Anonymously</span>
        </h1>
        <div className="social-icons-container">
          <p>Share on your feedback link on : </p>
          <a
            className="twitter-icon"
            href="https://twitter.com/"
            rel="noreferrer"
            target={'_blank'}
          >
            <BsTwitter />
          </a>
        </div>
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

        <button
          className="primary-btn"
          onClick={() => navigate('/viewcomments')}
        >
          See my comments
        </button>
        <div onClick={() => navigate('/aboutme')} className="footer-info">
          About me
        </div>
      </div>
    </div>
  );
};

export default ShareLink;
