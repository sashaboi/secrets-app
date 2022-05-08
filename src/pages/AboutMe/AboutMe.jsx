/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { BsTwitter, BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

import './aboutme.css';
const AboutMe = () => {
  return (
    <div className="page-parent">
      <div className="app-container">
        <h1>About Me</h1>
        <p className="about-me-desc">
          I am Onkar ,maker of NeoGossip, and I am looking for a job !
          <br />
          <br />
          <br /> Currently learning Reactjs @ NeogCamp, with a little bit of
          background of Python/Django , I am looking to put my skills to use in
          the real world. Here's more information about me : <br />
          <br />
          <u>
            <a
              rel="noreferrer"
              target={'_blank'}
              href="https://peerlist.io/onkar"
            >
              Peerlist.io/Onkar
            </a>
          </u>
        </p>
        <div className=" social-icons-container">
          <a
            href="https://twitter.com/i_am_onkar"
            rel="noreferrer"
            target={'_blank'}
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/onkardeshpande93"
            rel="noreferrer"
            target={'_blank'}
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/onkard93/"
            rel="noreferrer"
            target={'_blank'}
          >
            <BsInstagram />
          </a>
          <a
            href="https://github.com/sashaboi"
            rel="noreferrer"
            target={'_blank'}
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
