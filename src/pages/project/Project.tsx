import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Layout from '../../components/Layout';
import PortJS from '../portThree';
import { SUB_PROJECTS, SLIDER_SETTINGS, MESSAGES, CAREER_SECTIONS } from './constants';
import { useScrollAnimation } from './hooks/useScrollAnimation';

import '../../assets/scss/portfolio.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

gsap.registerPlugin(MotionPathPlugin);

const Project = () => {
  const [count, setCount] = useState(0);
  const [isScrollUnlocked, setIsScrollUnlocked] = useState(false);

  useScrollAnimation();

  useEffect(() => {
    const cleanup = PortJS();

    // 저장된 스크롤 위치 복원
    const savedScrollY = sessionStorage.getItem('projectScrollY');
    const isReturning = sessionStorage.getItem('isReturningToProject');

    if (isReturning === 'true' && savedScrollY) {
      // 뒤로가기로 돌아온 경우
      sessionStorage.removeItem('isReturningToProject');
      const scrollPosition = parseInt(savedScrollY, 10);

      // 스크롤 애니메이션 건너뛰기
      setIsScrollUnlocked(true);
      setCount(3); // 모든 메시지 표시 완료 상태로

      // DOM이 준비된 후 스크롤 복원
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPosition);
      });

      return () => {
        if (cleanup) cleanup();
      };
    }

    // 스크롤 막기
    const scrollY = window.scrollY;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    // 4초 후 자동 해제
    const timer = setTimeout(() => {
      unlockScroll(scrollY);
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (cleanup) cleanup();
    };
  }, []);

  const unlockScroll = (scrollY?: number) => {
    setIsScrollUnlocked(true);
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    if (scrollY !== undefined) {
      window.scrollTo(0, scrollY);
    }
  };

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleProjectLinkClick = () => {
    // 현재 스크롤 위치 저장
    sessionStorage.setItem('projectScrollY', window.scrollY.toString());
  };

  return (
    <Layout header footer>
      <div className='portfolio'>
        <div className="stars-wrap">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </div>

        <div className='intro'>
          <canvas id="three-canvas2"></canvas>

          {!isScrollUnlocked && (
            <button className="skip-button" onClick={() => unlockScroll()}>
              Skip Intro
            </button>
          )}

          <div className="message-wrap" onClick={handleClick}>
            {count >= 2 && <span className="star"></span>}
            {count >= 0 && (
              <div className={`message ${count === 0 ? 'on' : ''}`}>
                <span>{MESSAGES[0]}</span>
              </div>
            )}
            {count >= 1 && (
              <div className={`message ${count === 1 ? 'on' : ''}`}>
                <span>{MESSAGES[1]}</span>
              </div>
            )}
            {count >= 2 && (
              <div className="message">
                <span>{MESSAGES[2]}</span>
              </div>
            )}
          </div>
          <div className={`scroll-text ${count >= 2 && isScrollUnlocked ? 'on' : ''}`}>
            <p>Scroll Down</p>
          </div>
        </div>

        <div className='project'>
          {/* 섹션 1: 빗썸 (2024.07 ~ 현재) */}
          <div className="career-section career-section--bithumb">
            <div className="career-section__header">
              <span className="career-section__period">{CAREER_SECTIONS.bithumb.period}</span>
              <span className="career-section__status">현재</span>
            </div>
            <strong className="title">{CAREER_SECTIONS.bithumb.title}</strong>
            <div className="career-section__content">
              <section className="project-item project-item--featured">
                <Link to='/project/bithumb' onClick={handleProjectLinkClick}>
                  <div className='project-imgwrap project-imgwrap--bithumb'>
                    <div className="planet-glow"></div>
                  </div>
                  <div className="project-info">
                    <h2 className='project-company'>Bithumb</h2>
                    <p className='project-desc'>암호화폐 거래소 UI 프론트엔드 개발</p>
                    <span className="project-more">프로젝트 보기 →</span>
                  </div>
                </Link>
              </section>
            </div>
          </div>

          {/* 섹션 2: 한국평가데이터 (2023.02 ~ 2024.02) */}
          <div className="career-section career-section--ked">
            <div className="career-section__header">
              <span className="career-section__period">{CAREER_SECTIONS.ked.period}</span>
            </div>
            <div className="career-section__content">
              <section className="project-item project-item--protected">
                <Link to='/project/ked' onClick={handleProjectLinkClick}>
                  <div className='project-imgwrap project-imgwrap--ked'>
                    <div className="lock-overlay">
                      <span className="lock-icon">🔒</span>
                      <span className="lock-text">비밀번호 필요</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <h2 className='project-company'>한국평가데이터</h2>
                    <p className='project-desc'>기업 데이터 플랫폼 프론트엔드 개발</p>
                    <span className="project-hint">힌트: 생년월일</span>
                  </div>
                </Link>
              </section>
            </div>
          </div>

          {/* 섹션 3: RD + 프리랜서 (2019.09 ~) */}
          <div className="career-section career-section--project">
            <div className="career-section__header">
              <span className="career-section__period">{CAREER_SECTIONS.project.period}</span>
            </div>
            <strong className="title">{CAREER_SECTIONS.project.title}</strong>
            <div className='project-group'>
              <section id='section1' className='project-item'>
                <Link to='/project/hyundai' onClick={handleProjectLinkClick}>
                  <h2 className='project-type reveal'>반응형</h2>
                  <div className='project-imgwrap reveal reveal-ttb'>
                    <div className='project-img'></div>
                  </div>
                  <p className='project-title reveal reveal-btt'>
                    현대자동차 공식 온라인몰,<br/><b>현대Shop</b>
                  </p>
                </Link>
              </section>

              <section id='section2' className='project-item'>
                <Link to='/project/kplus' onClick={handleProjectLinkClick}>
                  <h2 className='project-type reveal'>반응형</h2>
                  <div className='project-imgwrap reveal reveal-ltr'>
                    <div className='project-img'></div>
                  </div>
                  <p className='project-title reveal reveal-ltr'>
                    <b>YG KPLUS</b>홈페이지 신규 리뉴얼
                  </p>
                </Link>
              </section>

              <section id='section3' className='project-item'>
                <Link to='/project/lsgpis' onClick={handleProjectLinkClick}>
                  <h2 className='project-type reveal'>PC</h2>
                  <div className='project-imgwrap reveal reveal-btt'>
                    <div className='project-img'></div>
                  </div>
                  <p className='project-title reveal reveal-btt'>
                    관리자 화면 신규 구축<br/><b>LS GPIS</b>
                  </p>
                </Link>
              </section>
            </div>
          </div>

          {/* 섹션 4: 사이드 프로젝트 */}
          <div className="side-project">
            <strong className="title">
              사이 행성
              <div className="tip-wrap">
                <i className="icon-tip">?</i>
                <div className="tooltip">
                  <div className="text">
                    <span>
                      <strong>사이</strong>드 프로젝트 + <strong>행성</strong>,<br/>
                      주요 프로젝트 외 업무와 스터디 프로젝트나 자기계발용 프로젝트를 모았어요.
                    </span>
                  </div>
                </div>
              </div>
            </strong>

            <div className="side-project-list">
              <Slider {...SLIDER_SETTINGS}>
                {SUB_PROJECTS.map((item) => (
                  <div key={item.id} id={item.id} className="side-project-item">
                    <Link to={item.url} onClick={handleProjectLinkClick}>
                      <div className="side-project-planet">
                        <div className='side-project-imgwrap'>
                          <div className='side-project-img'></div>
                        </div>
                      </div>
                      <div className="side-project-info">
                        <strong className="name">{item.name}</strong>
                        <dl className="type">
                          <dt>Type.</dt>
                          <dd>{item.type}</dd>
                        </dl>
                        <dl className="duty">
                          <dt>Duty.</dt>
                          <dd>{item.duty}</dd>
                        </dl>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;
