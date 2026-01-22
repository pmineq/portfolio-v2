import { useRef, Fragment } from 'react';
import Layout from '../../../components/Layout';
import { ProjectLayout, useProjectAnimation } from '../shared';
import { PROJECT_INFO, WORK_DETAILS } from './constants';

import '../../../assets/scss/portfolio.scss';
import Topimg from '../../../assets/images/project/hyundai.png';
import Hyundai01 from '../../../assets/images/project/hyundai_sub01.jpg';
import Hyundai02 from '../../../assets/images/project/hyundai_sub02.jpg';
import Hyundai03 from '../../../assets/images/project/hyundai_sub03.png';
import Hyundai04 from '../../../assets/images/project/hyundai_sub04.jpg';

const Hyundai = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useProjectAnimation({ projectRef, topRef, textRef });

  return (
    <Layout header footer>
      <ProjectLayout
        projectRef={projectRef}
        topRef={topRef}
        className="hyundai"
        topImage={Topimg}
        projectInfo={PROJECT_INFO}
      >
        <section className="area-one">
          <img src={Hyundai01} alt={`${PROJECT_INFO.title} 프로젝트 이미지 1`} />
        </section>

        <section className="area-one">
          <strong className="sub-title">
            레이아웃, 공통, 유지보수까지<br />Web Publishing 진행.
          </strong>
          <div className="area-half">
            <div className="left description">
              <img src={Hyundai02} alt={`${PROJECT_INFO.title} 프로젝트 이미지 2`} />
              <img src={Hyundai04} alt={`${PROJECT_INFO.title} 프로젝트 이미지 3`} />
            </div>
            <div ref={textRef} className="right">
              <div className="dl-info">
                {WORK_DETAILS.map((detail, index) => (
                  <dl key={index}>
                    <dt>{detail.title}</dt>
                    <dd>
                      {'items' in detail ? (
                        <ul className="list">
                          {detail.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        detail.description?.split('\n').map((line, idx) => (
                          <Fragment key={idx}>
                            {line}
                            {idx < (detail.description?.split('\n').length || 0) - 1 && <br />}
                          </Fragment>
                        ))
                      )}
                    </dd>
                  </dl>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="area-one hd-bghalf">
          <img src={Hyundai03} alt={`${PROJECT_INFO.title} 프로젝트 이미지 4`} />
        </section>
      </ProjectLayout>
    </Layout>
  );
};

export default Hyundai;
