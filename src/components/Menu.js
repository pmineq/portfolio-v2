import React from "react";
import { NavLink } from 'react-router-dom';
import $ from "jquery";





const Menu = () => {

    $('#btn-menu').on('click', function(){
      
      if($(this).hasClass('open')) {
        $('#btn-menu').removeClass('open');
        $('.menu-wrap').removeClass('on');
      } else {
        $('#btn-menu').addClass('open');
        $('.menu-wrap').addClass('on');
      };
    });

  return (
    <div className="menu-wrap">
      <ul>
        <li>
          <NavLink to="/" activeclassname="current">메인 🌍</NavLink>
        </li>
        {/* <li>
          <NavLink to="/about" activeclassname="current">About.</NavLink>
        </li> */}
        <li>
          <NavLink to="/project" activeclassname="current">프로젝트 🚀</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="current">연락하기 📞</NavLink>
        </li>
      </ul>
    </div>
  );
}






export default Menu;