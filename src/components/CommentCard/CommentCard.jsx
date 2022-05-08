import React, { useRef } from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import './commentcard.css';
import { UseModal } from '../../context/Modal-context';

const CommentCard = ({ comment }) => {
  const { setShowModal, setModalContent } = UseModal();
  var urlencode = require('urlencode');
  var textForTwitter = `I got this anonymous feedback on Neogossip! :
               "${comment}"

  Get your own link, on `;
  let urlForTwitter = `https://twitter.com/intent/tweet?text=${urlencode(
    textForTwitter
  )}&url=https://feedback-anon.netlify.app/`;

  const CommentCardClickHandler = () => {
    setModalContent(comment);
    setShowModal(true);
  };
  return (
    <div
      onClick={() => CommentCardClickHandler()}
      className="comment-card-parent"
    >
      <div className="comment-content">{comment}</div>
      <div className="comment-action-buttons">
        <a href={urlForTwitter} rel="noreferrer" target={'_blank'}>
          <div>
            <BsTwitter />
          </div>
        </a>
      </div>
    </div>
  );
};

export default CommentCard;
