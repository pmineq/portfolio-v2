import logo from '../assets/images/logo.svg';
import { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header id="header">
        <a href="/portfolio-v2" className="header-logo" title="메인으로 이동">
          <img src={logo} alt="로고 이미지" />
        </a>

        <h1>{this.props.title}</h1>
        
      </header>
    )
  }
}

export default Header;