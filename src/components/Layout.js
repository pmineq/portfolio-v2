import React from 'react';
import Header from './Header';
import '../assets/css/normalize.css';
import '../assets/css/fonts.css';
import '../assets/scss/layout.scss';


// 넘겨주는 컴포넌트에 header 값이 있으면 header를 렌더
const Layout = ({header, children}) => {
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