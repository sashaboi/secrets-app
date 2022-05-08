import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

import './footer.css';
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-parent">
      Made with ♥ in NeogCamp by{' '}
      <span onClick={() => navigate('/aboutme')}> Onkar from Pune </span>
    </div>
  );
};

export default Footer;
