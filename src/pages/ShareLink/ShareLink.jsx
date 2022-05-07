import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiCopy } from 'react-icons/bi';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import './sharelink.css';

const ShareLink = props => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { idofuser } = state;
  console.log(idofuser);
  const url = `http://localhost:3000/comment/${idofuser}`;
  return (
    <div className="page-parent">
      <div className="share-link-container app-container">
        <h1>
          Share your link to get feedback <span>Anonymously</span>
        </h1>
        <div className="social-icons-container">
          <a href="https://twitter.com/" rel="noreferrer" target={'_blank'}>
            <BsTwitter />
          </a>
          <a href="https://facebook.com/" rel="noreferrer" target={'_blank'}>
            <BsFacebook />
          </a>
          <a href="https://instagram.com/" rel="noreferrer" target={'_blank'}>
            <BsInstagram />
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
      </div>
    </div>
  );
};

export default ShareLink;
