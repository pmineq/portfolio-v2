import React from "react";
import logo from '../assets/images/logo.svg';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';



class Header extends Component {
  render() {

    $(document).on('click', '.btn-music', function(){
      musicBtn();
    });

    function musicBtn() {
      const musicsate = document.getElementById('myAudio').paused;
      if (musicsate === true) {
        setTimeout(function () {
          document.getElementById('myAudio').play();
        }, 150);
        $('.btn-music').text('노래 멈춤').removeClass('pause').addClass('play');
      } else {
        document.getElementById('myAudio').pause();
        // document.getElementById('myAudio').currentTime = 0;
        $('.btn-music').text('노래 재생').removeClass('play').addClass('pause');
      }
    }
    


    return (
      <header id="header">
        <button type='button' id='btn-menu'><span className="visuallyhidden">메뉴</span></button>


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