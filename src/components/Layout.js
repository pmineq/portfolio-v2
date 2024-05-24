import React, { useEffect } from "react";
import $ from 'jquery';
import Header from './Header';
import '../assets/css/normalize.css';
import '../assets/css/fonts.css';
import '../assets/scss/layout.scss';


// 넘겨주는 컴포넌트에 header 값이 있으면 header를 렌더
const Layout = ({header, children}) => {

  useEffect(() => {
    const musicsate = document.getElementById('myAudio').paused;
    if (musicsate === true) {
      document.getElementById('myAudio').pause();
      $('.btn-music').text('노래 재생').removeClass('play').addClass('pause');
    } else {
      setTimeout(function () {
        document.getElementById('myAudio').play();
      }, 150);
      $('.btn-music').text('노래 멈춤').removeClass('pause').addClass('play');
    }
  }, []);
  

  return (
    <div id="wrapper">
      {header && (
        <Header
          title={header.title}/>
      )}
      <div id="container">
        {children}
      </div>
    </div>
  );
}

export default Layout;