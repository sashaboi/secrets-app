import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './createaccount.css';
import { ADD_USER } from '../../GraphQl/Mutations';
import { UseUser } from '../../context/user-context';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import { UseAlert } from '../../context/Alert-context';

const CreateAccount = () => {
  const { setUserName, setUserID } = UseUser();
  const { showalert } = UseAlert();
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const [userNameText, setUserNameText] = useState('');
  const [Adduser] = useMutation(ADD_USER);
  const localkey = localStorage.getItem('secret-uuid');

  useEffect(() => {
    if (localkey) {
      navigate('/viewcomments');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localkey]);

  const CreateAccountClickHandler = () => {
    userNameText === '' && setErrorText("Can't create a blank user");
    const userUuid = uuid();
    localStorage.setItem('secret-uuid', userUuid);
    localStorage.setItem('secret-user-name', userNameText);
    Adduser({
      variables: { uid_from_local: userUuid, username: userNameText },
    });

    setUserName(userNameText);
    setUserID(userUuid);
    showalert('User Created');
    navigate('/sharelink');
  };

  const KeyDownHandler = e => {
    if (e.key === 'Enter') {
      CreateAccountClickHandler();
    }
  };
  return (
    <div className="page-parent">
      <Navbar />
      <div className="app-container">
        <h1>
          Get <span>Anonymous</span> feedback from your followers{' '}
        </h1>
        <div className="input-container">
          <input
            onKeyDown={e => KeyDownHandler(e)}
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
      </div>
      <Footer />
    </div>
  );
};

export default CreateAccount;
