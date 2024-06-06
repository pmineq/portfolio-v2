import React from "react";
import logo from '../assets/images/logo.svg';
import { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {
  render() {

    return (
      <header id="header">
        <button type='button' id='btn-menu'><span className="line"></span><em className="visuallyhidden">메뉴</em></button>

        <Link to="/" className="header-logo" title="메인으로 이동">
          <img src={logo} alt="로고 이미지" />
        </Link>

        <h1 className='visuallyhidden'>MinHye, portfolio</h1>

        <button type='button' className='btn-music'></button>

      </header>
    )
  }
}

export default Header;