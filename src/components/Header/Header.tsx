
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header id="header">
      <button type='button' id='btn-menu' aria-label='메뉴 열기'>
        <span className="line" aria-hidden="true"></span>
        <span className="visuallyhidden">메뉴</span>
      </button>

      <Link to="/" className="header-logo" title="메인으로 이동">
        <img src={logo} alt="MinHye Portfolio 로고" />
      </Link>

      <h1 className='visuallyhidden'>MinHye, portfolio</h1>

      <button type='button' className='btn-music' aria-label='배경음악 재생'></button>
    </header>
  );
};

export default Header;
