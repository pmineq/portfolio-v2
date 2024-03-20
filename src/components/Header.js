import logo from '../assets/images/logo.svg';
import { Component } from 'react';
// import { Link } from 'react-router-dom';
import $ from 'jquery';



class Header extends Component {
  render() {

    
    $(document).on('click', '.btn-music', function(){
      const musicsate = document.getElementById('myAudio').paused;
      console.log(musicsate);
      if (musicsate === true) {
        document.getElementById('myAudio').play();
        $(this).text('멈추기');
      } else {
        document.getElementById('myAudio').pause();
        document.getElementById('myAudio').currentTime = 0;
        $(this).text('재생하기');
      }
    })

    return (
      <header id="header">
        <a href="/portfolio-v2" className="header-logo" title="메인으로 이동">
          <img src={logo} alt="로고 이미지" />
        </a>
        {/* <Link to="/" className="header-logo" title="메인으로 이동">
          <img src={logo} alt="로고 이미지" />
        </Link> */}

        <h1>{this.props.title}</h1>

        <button type='button' className='btn-music'>뮤직</button>
        
        
      </header>
    )
  }
}

export default Header;