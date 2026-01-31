import { useRef } from 'react';
import Layout from '../../../components/Layout';
import { ProjectLayout, useProjectAnimation } from '../shared';
import { PROJECT_INFO } from './constants';

import '../../../assets/scss/portfolio.scss';
import Topimg from '../../../assets/images/project/lsgpis.png';
import Lsgpis01 from '../../../assets/images/project/lsgpis_sub01.jpg';
import Lsgpis02 from '../../../assets/images/project/lsgpis_sub02.jpg';
import Lsgpis03 from '../../../assets/images/project/lsgpis_sub03.png';
import Lsgpis04 from '../../../assets/images/project/lsgpis_sub04.png';
import Lsgpis05 from '../../../assets/images/project/lsgpis_sub05.png';
import Lsgpis06 from '../../../assets/images/project/lsgpis_sub06.png';

const Lsgpis = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useProjectAnimation({ projectRef, topRef, textRef });

  return (
    <Layout header footer>
      <ProjectLayout
        projectRef={projectRef}
        topRef={topRef}
        className="lsgpis"
        topImage={Topimg}
        projectInfo={PROJECT_INFO}
        projectId="lsgpis"
      >
        <section className="area-one">
          <img src={Lsgpis01} alt="LSGPIS 프로젝트 이미지" />
        </section>

        <section className="area-one clr" data-bgcolor="#ffffff">
          <strong className="sub-title">
            제안서,<br />UI/UX 디자인,<br />Web Publishing 진행.
          </strong>
          <div className="area-half">
            <div className="left description">
              <img src={Lsgpis02} alt="LSGPIS 프로젝트 이미지" />
              <div className="discription">
                <strong>초기 디자인.</strong>
                <p>초기 디자인 시안으로 디자인 컨셉을 잡아 고객사에 제안하였습니다.</p>
              </div>
            </div>
            <div ref={textRef} className="right">
              <img src={Lsgpis03} alt="LSGPIS 프로젝트 이미지" />
              <img src={Lsgpis04} alt="LSGPIS 프로젝트 이미지" />
            </div>
          </div>
        </section>

        <section className="area-one lsgpis-bghalf">
          <img src={Lsgpis05} alt="LSGPIS 프로젝트 이미지" />
        </section>

        <section className="area-one">
          <img src={Lsgpis06} alt="LSGPIS 프로젝트 이미지" />
        </section>
      </ProjectLayout>
    </Layout>
  );
};

export default Lsgpis;
