import { useRef } from 'react';
import Layout from '../../../components/Layout';
import { ProjectLayout, useProjectAnimation } from '../shared';
import { PROJECT_INFO } from './constants';

import '../../../assets/scss/portfolio.scss';
import Topimg from '../../../assets/images/project/editodo.png';
import Editodo01 from '../../../assets/images/project/editodo_sub01.jpg';

const FigmaIcon = () => (
  <svg style={{ width: '16px', height: '16px', marginRight: '5px', verticalAlign: 'top' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path>
    <path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path>
    <path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path>
    <path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path>
    <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
  </svg>
);

const Editodo = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useProjectAnimation({ projectRef, topRef, textRef });

  return (
    <Layout header footer>
      <ProjectLayout
        projectRef={projectRef}
        topRef={topRef}
        className="editodo"
        topImage={Topimg}
        projectInfo={PROJECT_INFO}
      >
        <a href="https://www.figma.com/design/MvilioYP11ubQJbGWyWrKh/EdiTodo?node-id=0-1&t=mfed31Ugei2A6pZI-1" className="btn-goto" target="_blank" rel="noreferrer">
          <FigmaIcon />
          Figma 바로가기
        </a>

        <section className="area-one">
          <img src={Editodo01} alt="Editodo 프로젝트 이미지" />
        </section>

        <section className="area-one clr" data-bgcolor="#ffffff">
          <strong ref={textRef} className="sub-title">기획,<br/>디자인 진행.</strong>
          <p>디자인 화면은 상단 Figma 바로가기 버튼을 통해 확인하실 수 있습니다.</p>
        </section>
      </ProjectLayout>
    </Layout>
  );
};

export default Editodo;
