import { useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import type { MenuItem } from './types';

const menuItems: MenuItem[] = [
  { path: '/', label: '홈', icon: '🏠' },
  { path: '/main', label: '메인', icon: '🌍' },
  { path: '/project', label: '프로젝트', icon: '🚀' },
  { path: '/contact', label: '연락하기', icon: '📞' },
];

const Menu = () => {
  const closeMenu = useCallback(() => {
    const btnMenu = document.getElementById('btn-menu');
    const menuWrap = document.querySelector('.menu-wrap');

    btnMenu?.classList.remove('open');
    menuWrap?.classList.remove('on');
  }, []);

  const toggleMenu = useCallback(() => {
    const btnMenu = document.getElementById('btn-menu');
    const menuWrap = document.querySelector('.menu-wrap');

    if (btnMenu?.classList.contains('open')) {
      closeMenu();
    } else {
      btnMenu?.classList.add('open');
      menuWrap?.classList.add('on');
    }
  }, [closeMenu]);

  useEffect(() => {
    const btnMenu = document.getElementById('btn-menu');
    btnMenu?.addEventListener('click', toggleMenu);

    return () => {
      btnMenu?.removeEventListener('click', toggleMenu);
    };
  }, [toggleMenu]);

  return (
    <div className="menu-wrap">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? 'current' : ''}
                onClick={closeMenu}
              >
                {item.label} {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
