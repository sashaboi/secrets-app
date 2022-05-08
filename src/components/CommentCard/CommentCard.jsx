import React, { useRef } from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import './commentcard.css';

const CommentCard = ({ comment }) => {
  const twitterCommentIntent = `https://feedback-anon.netlify.app/comment/df308874-16b0-4200-bf76-4b0401792c88`;
  return (
    <div className="comment-card-parent">
      <div className="comment-content">{comment}</div>
      <div className="comment-action-buttons">
        <div>
          <BsTwitter />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
