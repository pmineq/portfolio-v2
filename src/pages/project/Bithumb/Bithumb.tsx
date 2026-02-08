import { useRef } from 'react';
import Layout from '../../../components/Layout';
import { useProjectAnimation, BackButton, ProjectNavigation } from '../shared';
import { PROJECT_INFO, BITHUMB_PROJECTS, OPR_ISSUES } from './constants';

import '../../../assets/scss/portfolio.scss';

const Bithumb = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLElement>(null);

  useProjectAnimation({ projectRef, topRef });

  return (
    <Layout header footer>
      <div id="project" ref={projectRef} className="project-wrap bithumb clr" data-bgcolor={PROJECT_INFO.bgColor}>
        <BackButton />

        <section ref={topRef} className="project-top project-top--bithumb">
          <h2>{PROJECT_INFO.title}</h2>
          <div className="project-topimg project-topimg--gradient">
            <div className="gradient-bg"></div>
          </div>
        </section>

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

        {/* 주요 프로젝트 카드 섹션 */}
        <section className="area-one project-cards-section">
          <strong className="sub-title center">주요 프로젝트</strong>
          <div className="project-cards">
            {BITHUMB_PROJECTS.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-card__header">
                  <h3 className="project-card__name">{project.name}</h3>
                  <span className="project-card__period">{project.period}</span>
                </div>

                <div className="project-card__body">
                  <div className="project-card__field">
                    <dt>업무 내용</dt>
                    <dd>{project.description}</dd>
                  </div>

                  <div className="project-card__field">
                    <dt>기술 스택</dt>
                    <dd>
                      <div className="tech-stack">
                        {project.techStack.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </dd>
                  </div>

                  {project.achievements && project.achievements.length > 0 && (
                    <div className="project-card__field">
                      <dt>주요 기여</dt>
                      <dd>
                        <ul className="achievements-list">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="sub-text">이 외에도 다수 프로젝트 진행.</p>
        </section>

        <hr />

        {/* 운영 이슈 대응 섹션 */}
        <section className="area-one opr-section">
          <strong className="sub-title center">운영 및 긴급 대응</strong>
          <div className="opr-container">
            <p className="opr-intro">
              프로젝트 외에도 다양한 운영 이슈와 긴급 대응 업무를 수행하며 서비스 안정성을 유지했습니다.
            </p>
            <ul className="opr-list">
              {OPR_ISSUES.map((issue, idx) => (
                <li key={idx} className="opr-item">
                  <span className="opr-text">{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ProjectNavigation currentProjectId="bithumb" />
      </div>
    </Layout>
  );
};

export default Bithumb;
