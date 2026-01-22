import { useEffect, useCallback } from 'react';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import type { LayoutProps } from './types';

import '../../assets/css/normalize.css';
import '../../assets/css/fonts.css';
import '../../assets/scss/layout.scss';

const Layout = ({ header, children, footer }: LayoutProps) => {
  const updateMusicButtonState = useCallback((audioElement: HTMLAudioElement, btnMusic: HTMLButtonElement) => {
    if (audioElement.paused) {
      btnMusic.textContent = '노래 재생';
      btnMusic.classList.remove('play');
      btnMusic.classList.add('pause');
      btnMusic.setAttribute('aria-label', '배경음악 재생');
    } else {
      btnMusic.textContent = '노래 멈춤';
      btnMusic.classList.remove('pause');
      btnMusic.classList.add('play');
      btnMusic.setAttribute('aria-label', '배경음악 일시정지');
    }
  }, []);

  const toggleMenu = useCallback(() => {
    const btnMenu = document.getElementById('btn-menu');
    const menuWrap = document.querySelector('.menu-wrap');

    if (btnMenu?.classList.contains('open')) {
      btnMenu.classList.remove('open');
      menuWrap?.classList.remove('on');
    } else {
      btnMenu?.classList.add('open');
      menuWrap?.classList.add('on');
    }
  }, []);

  useEffect(() => {
    const audioElement = document.getElementById('myAudio') as HTMLAudioElement | null;
    const btnMusic = document.querySelector('.btn-music') as HTMLButtonElement | null;
    const btnMenu = document.getElementById('btn-menu');

    if (!audioElement || !btnMusic) return;

    // Initialize music button state
    updateMusicButtonState(audioElement, btnMusic);

    // Music button click handler
    const handleMusicClick = () => {
      setTimeout(() => {
        if (audioElement.paused) {
          audioElement.play();
        } else {
          audioElement.pause();
        }
        updateMusicButtonState(audioElement, btnMusic);
      }, 150);
    };

    btnMusic.addEventListener('click', handleMusicClick);
    btnMenu?.addEventListener('click', toggleMenu);

    return () => {
      btnMusic.removeEventListener('click', handleMusicClick);
      btnMenu?.removeEventListener('click', toggleMenu);
    };
  }, [updateMusicButtonState, toggleMenu]);

  return (
    <div id="wrapper">
      {header && (
        <>
          <Header />
          <Menu />
        </>
      )}
      <div id="container">
        {children}
      </div>
      {footer && <Footer />}
    </div>
  );
};

export default Layout;
