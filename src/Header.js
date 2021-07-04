import React from 'react';
import './header.css';
import  PersonIcon from "@material-ui/icons/Person";
import  ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { IconButton } from '@material-ui/core';
import { Link } from "react-router-dom"; 

function Header({ backButton }) {
  return (
    <div className="header">
      {backButton ? (
        <Link to="/" >
          <IconButton>
            <ArrowBackIosIcon fontSize="large" className="header__icon" /> 
          </IconButton>
        </Link>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src = "https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
          alt ="tinder-logo"
          />
        </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header;
