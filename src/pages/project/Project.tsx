import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Layout from '../../components/Layout';
import PortJS from '../portThree';
import { SUB_PROJECTS, SLIDER_SETTINGS, MESSAGES } from './constants';
import { useScrollAnimation } from './hooks/useScrollAnimation';

import '../../assets/scss/portfolio.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

gsap.registerPlugin(MotionPathPlugin);

const Project = () => {
  const [count, setCount] = useState(0);

  useScrollAnimation();

  useEffect(() => {
    PortJS();
  }, []);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
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
          <div className={`scroll-text ${count >= 2 ? 'on' : ''}`}>
            <p>Scroll Down</p>
          </div>
        </div>

        <div className='project'>
          <strong className="title">주요 행성</strong>
          <div className='project-group'>
            <section id='section1' className='project-item'>
              <Link to='/project/hyundai'>
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
              <Link to='/project/kplus'>
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
              <Link to='/project/lsgpis'>
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
                    <Link to={item.url}>
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
