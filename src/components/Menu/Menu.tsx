import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import type { MenuItem } from './types';

const menuItems: MenuItem[] = [
  { path: '/', label: '홈' },
  { path: '/main', label: '메인' },
  { path: '/project', label: '프로젝트' },
  { path: '/contact', label: '연락하기' },
];

const Menu = () => {
  const closeMenu = useCallback(() => {
    const btnMenu = document.getElementById('btn-menu');
    const menuWrap = document.querySelector('.menu-wrap');

    btnMenu?.classList.remove('open');
    menuWrap?.classList.remove('on');
  }, []);

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
                aria-label={`${item.label} 페이지로 이동`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
