import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './createaccount.css';
import { ADD_USER } from '../../GraphQl/Mutations';
const CreateAccount = () => {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const [userNameText, setUserNameText] = useState('');
  const [Adduser] = useMutation(ADD_USER);
  const CreateAccountClickHandler = () => {
    userNameText === '' && setErrorText("Can't create a blank user");
    const userUuid = uuid();
    localStorage.setItem('secret-uuid', userUuid);
    localStorage.setItem('secret-user-name', userNameText);
    Adduser({
      variables: { uid_from_local: userUuid, username: userNameText },
    });
    console.log('run creation api with ', userNameText, ' as username');
    navigate('/sharelink', { state: { idofuser: userUuid } });
  };

  return (
    <div className="page-parent">
      <div className="app-container">
        <h1>
          Get <span>Anonymous</span> feedback from your followers{' '}
        </h1>
        <div className="input-container">
          <input
            type="text"
            value={userNameText}
            onChange={e => setUserNameText(e.target.value)}
            placeholder="enter your name here"
          />
          <button
            disabled={userNameText.length === 0}
            className="primary-btn"
            onClick={CreateAccountClickHandler}
          >
            Create account
          </button>
          <h3>{errorText}</h3>
        </div>
        <div className="footer-info">About me</div>
      </div>
    </div>
  );
};

export default CreateAccount;
