import { useRef, Fragment } from 'react';
import Layout from '../../../components/Layout';
import { ProjectLayout, useProjectAnimation } from '../shared';
import { PROJECT_INFO, WORK_DETAILS } from './constants';

import '../../../assets/scss/portfolio.scss';
import Topimg from '../../../assets/images/project/kplus.png';
import Kplus01 from '../../../assets/images/project/kplus_sub01.jpg';
import Kplus02 from '../../../assets/images/project/kplus_sub02.jpg';
import Kplus03 from '../../../assets/images/project/kplus_sub03.png';
import Kplus1 from '../../../assets/images/project/kplus1.jpg';
import Kplus2 from '../../../assets/images/project/kplus2.jpg';
import Kplus3 from '../../../assets/images/project/kplus3.jpg';
import Kplus4 from '../../../assets/images/project/kplus4.jpg';
import Kplus5 from '../../../assets/images/project/kplus5.jpg';
import Kplus6 from '../../../assets/images/project/kplus6.jpg';
import Kplus7 from '../../../assets/images/project/kplus7.jpg';
import Kplus8 from '../../../assets/images/project/kplus8.jpg';
import Kplus9 from '../../../assets/images/project/kplus9.jpg';
import Kplus10 from '../../../assets/images/project/kplus10.jpg';
import Kplus11 from '../../../assets/images/project/kplus11.jpg';
import Kplus12 from '../../../assets/images/project/kplus12.jpg';
import Kplus13 from '../../../assets/images/project/kplus13.jpg';
import Kplus14 from '../../../assets/images/project/kplus14.jpg';

const Kplus = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useProjectAnimation({ projectRef, topRef, textRef });

  return (
    <Layout header footer>
      <ProjectLayout
        projectRef={projectRef}
        topRef={topRef}
        className="kplus"
        topImage={Topimg}
        projectInfo={PROJECT_INFO}
      >
        <section className="area-one">
          <img src={Kplus01} alt="KPLUS 프로젝트 이미지" />
        </section>

        <section className="area-one">
          <strong className="sub-title">
            디자인부터 ㅡ<br />
            레이아웃, 공통, 유지보수까지<br />
            Web Publishing 진행.
          </strong>
          <div className="area-half">
            <div className="left description">
              <img src={Kplus02} alt="KPLUS 프로젝트 이미지" />
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

        <section className="area-one kp-bghalf clr" data-bgcolor="#ffffff">
          <img src={Kplus03} alt="KPLUS 프로젝트 이미지" />
        </section>

        <section className="area-one img-wrap clr" data-bgcolor="#111">
          <div className="area-half">
            <div className="left">
              <strong className="sub-title line">
                YG KPLUS<br />초기 디자인 시안<br />(PC)
              </strong>
            </div>
            <div className="left">
              <img src={Kplus1} alt="KPLUS 디자인 시안" />
            </div>
            <div className="right">
              <img src={Kplus2} alt="KPLUS 디자인 시안" />
              <img src={Kplus3} alt="KPLUS 디자인 시안" />
              <img src={Kplus4} alt="KPLUS 디자인 시안" />
            </div>
          </div>
        </section>

        <section className="area-one img-wrap">
          <div className="area-half">
            <div className="left">
              <img src={Kplus5} alt="KPLUS 디자인 시안" />
              <img src={Kplus6} alt="KPLUS 디자인 시안" />
            </div>
            <div className="right">
              <img src={Kplus7} alt="KPLUS 디자인 시안" />
              <img src={Kplus8} alt="KPLUS 디자인 시안" />
            </div>
          </div>
        </section>

        <section className="area-one img-wrap">
          <div className="area-half">
            <div className="left">
              <img src={Kplus9} alt="KPLUS 디자인 시안" />
              <img src={Kplus10} alt="KPLUS 디자인 시안" />
            </div>
            <div className="right">
              <img src={Kplus11} alt="KPLUS 디자인 시안" />
              <img src={Kplus12} alt="KPLUS 디자인 시안" />
            </div>
          </div>

          <div className="area-half">
            <div className="left">
              <img src={Kplus13} alt="KPLUS 디자인 시안" />
            </div>
            <div className="right">
              <img src={Kplus14} alt="KPLUS 디자인 시안" />
            </div>
          </div>
        </section>
      </ProjectLayout>
    </Layout>
  );
};

export default Kplus;
