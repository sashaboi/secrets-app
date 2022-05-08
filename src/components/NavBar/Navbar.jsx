import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import logoimg from '../../assets/images/logo.png';
import './navbar.css';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-parent">
      <div onClick={() => navigate('/')} className="logo-container">
        <img className="logo-img" src={logoimg} alt="" />
        <h3>NeoGossip</h3>
      </div>
    </div>
  );
};

export default Navbar;
