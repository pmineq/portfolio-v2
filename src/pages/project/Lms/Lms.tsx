import { useRef } from 'react';
import Layout from '../../../components/Layout';
import { ProjectLayout, useProjectAnimation } from '../shared';
import { PROJECT_INFO } from './constants';

import '../../../assets/scss/portfolio.scss';
import Topimg from '../../../assets/images/project/lms.png';
import Lms01 from '../../../assets/images/project/lms_sub01.png';

const Lms = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useProjectAnimation({ projectRef, topRef, textRef });

  return (
    <Layout header footer>
      <ProjectLayout
        projectRef={projectRef}
        topRef={topRef}
        className="lms"
        topImage={Topimg}
        projectInfo={PROJECT_INFO}
        projectId="lms"
      >
        <section className="area-one">
          <img src={Lms01} alt="Lms 프로젝트 이미지" />
        </section>

        <section ref={textRef} className="area-one">
          <strong className="sub-title">디자인,<br/>Web Publishing 진행.</strong>
          <p>해당 화면의 페이지는 상단 사이트 바로가기 버튼을 통해 확인하실 수 있습니다.</p>
        </section>
      </ProjectLayout>
    </Layout>
  );
};

export default Lms;
