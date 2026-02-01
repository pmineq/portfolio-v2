import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Layout from '../../components/Layout';
import { SKILLS, NAV_BUTTONS, PROFILE } from './constants';

import '../../assets/scss/intro.scss';

const Intro = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const emRef = useRef<HTMLElement>(null);
  const [experienceCount, setExperienceCount] = useState(1);

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

    // Experience 카운트 애니메이션
    const counter = { value: 1 };
    gsap.to(counter, {
      value: PROFILE.experience,
      duration: 2,
      delay: 0.5,
      ease: 'power2.out',
      onUpdate: () => {
        setExperienceCount(Math.floor(counter.value));
      },
    });

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
            사용자 중심의 UI를 구현하는<br/>
            {experienceCount}년<span className='plus'>+</span> {PROFILE.role} {PROFILE.name}입니다.
          </h2>
          <em ref={emRef}>기획 → 디자인 → 개발</em>
          <p>
            기술적 실현 가능성을 <strong>조율</strong>하고,<br/>
            <strong>최적의 UX</strong>를 만들어냅니다.
          </p>
          <div className='skills'>
            <div className='skill-category'>
              <strong>{SKILLS.frontend.title}</strong>
              <p>{SKILLS.frontend.items.join(', ')}</p>
            </div>
            <div className='skill-category'>
              <strong>{SKILLS.tools.title}</strong>
              <p>{SKILLS.tools.items.join(', ')}</p>
            </div>
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
