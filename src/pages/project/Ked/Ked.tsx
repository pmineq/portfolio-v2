import { useRef, useState, FormEvent, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../../../components/Layout';
import { useProjectAnimation, BackButton, ProjectNavigation } from '../shared';
import {
  PROJECT_INFO,
  ROLE_SECTIONS,
  TECH_HIGHLIGHTS,
  PASSWORD,
  PASSWORD_HINT,
} from './constants';

import '../../../assets/scss/portfolio.scss';

gsap.registerPlugin(ScrollTrigger);

const Ked = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLElement>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');

  useProjectAnimation({ projectRef, topRef });

  // 잠금 해제 후 ScrollTrigger 재설정
  useEffect(() => {
    if (isUnlocked && projectRef.current) {
      // 약간의 딜레이 후 ScrollTrigger 재생성
      setTimeout(() => {
        const project = projectRef.current;
        gsap.utils.toArray<HTMLElement>('.clr').forEach((item) => {
          const color = item.getAttribute('data-bgcolor');
          if (color && project) {
            ScrollTrigger.create({
              trigger: item,
              start: 'top 50%',
              end: 'bottom 5%',
              onEnter: () =>
                gsap.to(project, { backgroundColor: color, duration: 1 }),
              onEnterBack: () =>
                gsap.to(project, { backgroundColor: color, duration: 1 }),
            });
          }
        });
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [isUnlocked]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputPassword === PASSWORD) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('비밀번호가 일치하지 않습니다.');
      setInputPassword('');
    }
  };

  return (
    <Layout header footer>
      <div id="project" ref={projectRef} className="project-wrap ked clr" data-bgcolor={PROJECT_INFO.bgColor}>
        <BackButton />
        <section ref={topRef} className="project-top project-top--ked">
          <h2>{PROJECT_INFO.title}</h2>
          <div className="project-topimg project-topimg--gradient">
            <div className="gradient-bg gradient-bg--ked"></div>
          </div>
        </section>

        {!isUnlocked ? (
          <section className="area-one password-section">
            <div className="password-container">
              <div className="lock-icon-large">🔒</div>
              <h3 className="password-title">비밀번호가 필요합니다</h3>
              <p className="password-hint">힌트: {PASSWORD_HINT}</p>

              <form onSubmit={handleSubmit} className="password-form">
                <input
                  type="password"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  placeholder="비밀번호 입력"
                  className="password-input"
                  maxLength={6}
                />
                <button type="submit" className="password-submit">
                  확인
                </button>
              </form>

              {error && <p className="password-error">{error}</p>}
            </div>
          </section>
        ) : (
          <>
            <section className="area-one clr" data-bgcolor="#fff">
              <div className="area-half">
                <div className="left">
                  <strong className="title">{PROJECT_INFO.subtitle}</strong>
                  <div className="dl-info">
                    <dl>
                      <dt>Category.</dt>
                      <dd>{PROJECT_INFO.category}</dd>
                    </dl>
                    <dl>
                      <dt>Type.</dt>
                      <dd>{PROJECT_INFO.type}</dd>
                    </dl>
                    <dl>
                      <dt>Date.</dt>
                      <dd>{PROJECT_INFO.date}</dd>
                    </dl>
                  </div>
                </div>
                <div className="right">
                  <div className="description">
                    <strong>Description.</strong>
                    <p>{PROJECT_INFO.description}</p>
                  </div>
                  <div className="description">
                    <strong>Skills.</strong>
                    <p>{PROJECT_INFO.skills}</p>
                  </div>
                </div>
              </div>
            </section>

            <hr />

            <section className="area-one role-sections">
              <strong className="sub-title center">담당 업무</strong>
              <div className="role-grid">
                {ROLE_SECTIONS.map((section) => (
                  <div key={section.id} className="role-section">
                    <div className="role-section__header">
                      <span className="role-section__icon">{section.icon}</span>
                      <h3 className="role-section__title">{section.title}</h3>
                    </div>
                    <ul className="role-section__tasks">
                      {section.tasks.map((task, idx) => (
                        <li key={idx} className="role-task">
                          <strong className="role-task__title">{task.title}</strong>
                          <p className="role-task__desc">{task.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <hr />

            <section className="area-one tech-section">
              <strong className="sub-title center">기술 스택 상세</strong>
              <div className="tech-highlight-grid">
                {TECH_HIGHLIGHTS.map((tech, idx) => (
                  <div key={idx} className="tech-highlight-item">
                    <span className="tech-highlight-name">{tech.name}</span>
                    <span className="tech-highlight-usage">{tech.usage}</span>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <ProjectNavigation currentProjectId="ked" />
      </div>
    </Layout>
  );
};

export default Ked;
