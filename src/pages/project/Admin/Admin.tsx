import { useRef } from 'react';
import Layout from '../../../components/Layout';
import { ProjectLayout, useProjectAnimation } from '../shared';
import { PROJECT_INFO } from './constants';

import '../../../assets/scss/portfolio.scss';
import Topimg from '../../../assets/images/project/admin.png';
import Admin01 from '../../../assets/images/project/admin_sub01.jpg';
import Admin02 from '../../../assets/images/project/admin_sub02.jpg';

const Admin = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useProjectAnimation({ projectRef, topRef, textRef });

  return (
    <Layout header footer>
      <ProjectLayout
        projectRef={projectRef}
        topRef={topRef}
        className="admin"
        topImage={Topimg}
        projectInfo={PROJECT_INFO}
      >
        <section className="area-one">
          <img src={Admin01} alt="Admin 프로젝트 이미지" />
        </section>

        <section className="area-one clr" data-bgcolor="#0061b2">
          <strong ref={textRef} className="sub-title">기획, 디자인,<br/>Web Publishing 진행.</strong>
        </section>

        <section className="area-one">
          <img src={Admin02} alt="Admin 프로젝트 이미지" />
          <div className="description white">
            <strong>컴포넌트 퍼블리싱 캡쳐 이미지</strong>
          </div>
        </section>
      </ProjectLayout>
    </Layout>
  );
};

export default Admin;
