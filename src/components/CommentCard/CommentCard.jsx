import React from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import './commentcard.css';
const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card-parent">
      <div className="comment-content">{comment}</div>
      <div className="comment-action-buttons">
        <BsFacebook />
        <BsInstagram />
        <BsTwitter />
      </div>
    </div>
  );
};

export default CommentCard;
