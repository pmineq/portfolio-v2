import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import '../assets/scss/intro.scss';

import Layout from '../components/Layout';

import gsap from 'gsap';




const Intro = () => {

	const titleRef = useRef();
	const emRef = useRef();

	useEffect(() => {
		let tl = gsap.timeline(); //순서대로
		tl.from(titleRef.current, {
			y: 100,
			opacity: 0,
			duration: 1,
			ease: "ease.out",
		});

		tl.from(emRef.current, {
			backgroundSize: 0,
			opacity: 0,
			duration: 1.5,
			ease: "sine.out",
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
					<h2>긍정적인 마인드를 가진<br/>5년<span className='plus'>+</span> UI 개발자 박민혜입니다.</h2>
					<p>
						<strong>웹 퍼블리싱</strong>과 <strong>UI/UX 기획</strong>, <strong>디자인</strong> 개선 경험을 바탕으로, <br/>
						<em ref={emRef}>사용자-기획자-디자이너-&gt;개발자</em> 각자의 <strong>관점을 이해하며 협업</strong>합니다.
					</p>
					<div className='skills'>
						<strong>Skills.</strong>
						<p>HTML5, CSS3, SCSS, Javascript, jQuery, React, Three.js, Figma, PhotoShop, Illustrator, Github</p>
					</div>
					<div className='intro-btn-group'>
						<Link to='/main' className='btn'>메인</Link>
						<Link to='/project' className='btn'>프로젝트 바로가기</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
};


export default Intro;