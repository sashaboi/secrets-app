import React, { useRef } from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import './commentcard.css';
import { UseModal } from '../../context/Modal-context';

const CommentCard = ({ comment }) => {
  const { setShowModal, setModalContent } = UseModal();
  const twitterCommentIntent = `https://fedback-anon.netlify.app/comment/df308874-16b0-4200-bf76-4b0401792c88`;
  const CommentCardClickHandler = () => {
    setModalContent(comment);
    setShowModal(true);
  };
  return (
    <div className="comment-card-parent">
      <div
        onClick={() => CommentCardClickHandler()}
        className="comment-content"
      >
        {comment}
      </div>
      <div className="comment-action-buttons">
        <div>
          <BsTwitter />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
