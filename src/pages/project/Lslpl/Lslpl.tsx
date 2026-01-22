import { useRef } from 'react';
import Layout from '../../../components/Layout';
import { ProjectLayout, useProjectAnimation } from '../shared';
import { PROJECT_INFO } from './constants';

import '../../../assets/scss/portfolio.scss';
import Topimg from '../../../assets/images/project/lslpl.png';
import Lslpl01 from '../../../assets/images/project/lslpl_sub01.png';
import Lslpl02 from '../../../assets/images/project/lslpl_sub02.png';

const Lslpl = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useProjectAnimation({ projectRef, topRef, textRef });

  return (
    <Layout header footer>
      <ProjectLayout
        projectRef={projectRef}
        topRef={topRef}
        className="lslpl"
        topImage={Topimg}
        projectInfo={PROJECT_INFO}
      >
        <section className="area-one">
          <img src={Lslpl01} alt="Lslpl 프로젝트 이미지" />
        </section>

        <section className="area-one clr" data-bgcolor="#ffffff">
          <strong ref={textRef} className="sub-title">Web Publishing 진행.</strong>
        </section>

        <section className="area-one">
          <img src={Lslpl02} alt="Lslpl 프로젝트 이미지" />
          <div className="description">
            <strong>컴포넌트 퍼블리싱 캡쳐 이미지</strong>
          </div>
        </section>
      </ProjectLayout>
    </Layout>
  );
};

export default Lslpl;
