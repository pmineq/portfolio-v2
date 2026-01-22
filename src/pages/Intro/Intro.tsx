import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Layout from '../../components/Layout';
import { SKILLS, NAV_BUTTONS, PROFILE } from './constants';

import '../../assets/scss/intro.scss';

const Intro = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const emRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (titleRef.current) {
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'ease.out',
      });
    }

    if (emRef.current) {
      tl.from(emRef.current, {
        backgroundSize: 0,
        opacity: 0,
        duration: 1.5,
        ease: 'sine.out',
      });
    }

    console.log(`
    ／＞　 フ
    | 　_　_|
  ／\` ミ＿xノ   뽑아주세용
`);
  }, []);

  return (
    <Layout header>
      <div className='intro-wrap'>
        <div ref={titleRef} className='intro-text'>
          <h2>
            긍정적인 마인드를 가진<br/>
            {PROFILE.experience}<span className='plus'>+</span> {PROFILE.role} {PROFILE.name}입니다.
          </h2>
          <p>
            <strong>웹 퍼블리싱</strong>과 <strong>UI/UX 기획</strong>, <strong>디자인</strong> 개선 경험을 바탕으로, <br/>
            <em ref={emRef}>사용자-기획자-디자이너-&gt;개발자</em> 각자의 <strong>관점을 이해하며 협업</strong>합니다.
          </p>
          <div className='skills'>
            <strong>Skills.</strong>
            <p>{SKILLS.join(', ')}</p>
          </div>
          <div className='intro-btn-group'>
            {NAV_BUTTONS.map((button) => (
              <Link
                key={button.path}
                to={button.path}
                className='btn'
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Intro;
