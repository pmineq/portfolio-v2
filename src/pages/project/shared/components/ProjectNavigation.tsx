import { Link } from 'react-router-dom';
import { getAdjacentProjects } from '../constants';

interface ProjectNavigationProps {
  currentProjectId: string;
}

export const ProjectNavigation = ({ currentProjectId }: ProjectNavigationProps) => {
  const { prev, next } = getAdjacentProjects(currentProjectId);

  if (!prev && !next) {
    return null;
  }

  return (
    <nav className="project-navigation">
      <div className="project-navigation__container">
        {prev ? (
          <Link to={prev.path} className="project-navigation__link project-navigation__link--prev">
            <span className="project-navigation__arrow">←</span>
            <div className="project-navigation__content">
              <span className="project-navigation__label">이전 프로젝트</span>
              <span className="project-navigation__name">{prev.name}</span>
            </div>
          </Link>
        ) : (
          <div className="project-navigation__placeholder"></div>
        )}

        {next ? (
          <Link to={next.path} className="project-navigation__link project-navigation__link--next">
            <div className="project-navigation__content">
              <span className="project-navigation__label">다음 프로젝트</span>
              <span className="project-navigation__name">{next.name}</span>
            </div>
            <span className="project-navigation__arrow">→</span>
          </Link>
        ) : (
          <div className="project-navigation__placeholder"></div>
        )}
      </div>
    </nav>
  );
};
