import { useRef, useCallback, useEffect } from 'react';
import gsap from 'gsap';
import './Guide.scss';

interface GuideProps {
  onClose: () => void;
}

export const Guide = ({ onClose }: GuideProps) => {
  const guideRef = useRef<HTMLDivElement>(null);

  const shake = useCallback((element: HTMLElement | null) => {
    if (!element) return;

    gsap.to(element, {
      marginLeft: 10,
      duration: 0.1,
      yoyo: true,
      repeat: 7,
      ease: 'power1.inOut',
      onComplete: () => {
        gsap.set(element, { marginLeft: 0 });
      },
    });
  }, []);

  const handleDimClick = useCallback(() => {
    shake(guideRef.current);
  }, [shake]);

  const handleStart = useCallback(() => {
    const guideElement = document.getElementById('guide');
    if (guideElement) {
      guideElement.style.display = 'none';
    }

    // BGM 처리
    const musicChk = document.getElementById('music_chk') as HTMLInputElement;
    const myAudio = document.getElementById('myAudio') as HTMLAudioElement;
    const btnMusic = document.querySelector('.btn-music');

    if (musicChk?.checked && myAudio) {
      myAudio.play();
      if (btnMusic) {
        btnMusic.textContent = '노래 멈춤';
        btnMusic.classList.remove('pause');
        btnMusic.classList.add('play');
      }
    } else if (btnMusic) {
      btnMusic.textContent = '노래 재생';
      btnMusic.classList.remove('play');
      btnMusic.classList.add('pause');
    }

    onClose();
  }, [onClose]);

  // Enter 키로 START 버튼 클릭
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleStart();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleStart]);

  return (
    <div id="guide">
      <div ref={guideRef} className="guide-text">
        <p>
          화면을 <em>꾸~욱</em> 눌러<br />
          바닥의 <b>화살표</b>를 따라가<br />
          이동해보세요!
        </p>
        <p className="guide-pc-hint">
          PC에서는 <b>방향키</b> 또는 <b>WASD</b>로도<br />
          이동할 수 있어요!
        </p>
        <div className="check-group">
          <input type="checkbox" id="music_chk" />
          <label htmlFor="music_chk">Play Music</label>
        </div>
        <p>* 체크하고 시작하면 노래(BGM)가 재생돼요.</p>
        <button type="button" className="btn-guide" onClick={handleStart}>
          START
        </button>
      </div>
      <div className="dim" onClick={handleDimClick}></div>
    </div>
  );
};
