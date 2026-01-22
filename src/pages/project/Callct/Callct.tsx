import { useRef } from 'react';
import Layout from '../../../components/Layout';
import { ProjectLayout, useProjectAnimation } from '../shared';
import { PROJECT_INFO } from './constants';

import '../../../assets/scss/portfolio.scss';
import Topimg from '../../../assets/images/project/callct.png';
import Callct01 from '../../../assets/images/project/callct_sub01.png';

const Callct = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useProjectAnimation({ projectRef, topRef, textRef });

  return (
    <Layout header footer>
      <ProjectLayout
        projectRef={projectRef}
        topRef={topRef}
        className="callct"
        topImage={Topimg}
        projectInfo={PROJECT_INFO}
      >
        <section className="area-one">
          <img src={Callct01} alt="Callct 프로젝트 이미지" />
        </section>

        <section className="area-one clr" data-bgcolor="#ffffff">
          <strong ref={textRef} className="sub-title">디자인,<br/>Web Publishing 진행.</strong>
          <p>디자인 화면은 상단 Zeplin 바로가기 버튼을 통해 확인하실 수 있습니다.</p>
        </section>
      </ProjectLayout>
    </Layout>
  );
};

export default Callct;
