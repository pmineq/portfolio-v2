import { ReactNode, RefObject } from 'react';
import type { ProjectInfo } from '../types';

interface ProjectLayoutProps {
  projectRef: RefObject<HTMLDivElement | null>;
  topRef: RefObject<HTMLElement | null>;
  className: string;
  topImage: string;
  projectInfo: ProjectInfo;
  children: ReactNode;
}

export const ProjectLayout = ({
  projectRef,
  topRef,
  className,
  topImage,
  projectInfo,
  children,
}: ProjectLayoutProps) => {
  return (
    <div id="project" ref={projectRef} className={`project-wrap ${className}`}>
      <section ref={topRef} className='project-top'>
        <h2>{projectInfo.title}</h2>
        <div className='project-topimg'>
          <img src={topImage} alt={`${projectInfo.title} 상단 이미지`} />
        </div>
      </section>

      <section className="area-one clr" data-bgcolor={projectInfo.bgColor || '#ffffff'}>
        <div className="area-half">
          <div className="left">
            <strong className="title">{projectInfo.subtitle}</strong>
            <div className="dl-info">
              <dl>
                <dt>Category.</dt>
                <dd>{projectInfo.category}</dd>
              </dl>
              <dl>
                <dt>Type.</dt>
                <dd>{projectInfo.type}</dd>
              </dl>
              <dl>
                <dt>Date.</dt>
                <dd>{projectInfo.date}</dd>
              </dl>
            </div>
          </div>
          <div className="right">
            <div className="description">
              <strong>Description.</strong>
              <p>{projectInfo.description}</p>
            </div>
            <div className="description">
              <strong>Skills.</strong>
              <p>{projectInfo.skills}</p>
            </div>
          </div>
        </div>
        {projectInfo.link && (
          <a href={projectInfo.link} className="btn-goto" target="_blank" rel="noreferrer">
            사이트 바로가기
          </a>
        )}
      </section>

      <hr />

      {children}
    </div>
  );
};
