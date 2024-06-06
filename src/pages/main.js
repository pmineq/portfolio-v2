import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import '../assets/scss/intro.scss';

import Layout from '../components/Layout';
import MainJS from './mainThree';




const Intro = (props) => {

	const guideRef = useRef();

	const shake = (e) => gsap.to(e, {
		x: 10,
		duration: 0.1,
		yoyo: true,
		repeat: 7,
		ease: "power1.inOut",
		onComplete: () => gsap.set(e, {x: 0}) // 애니메이션 후 위치 초기화
	});

	const handleShake = () => {
		shake(guideRef.current);
	};
	

	useEffect(() => {

		MainJS();

	}, []);



  return (
		<Layout header>
			<canvas id="three-canvas"></canvas>
			
			<div id='guide'>
				<div ref={guideRef} className='guide-text'>
					<p>화면을 <em>꾸~욱</em> 눌러<br/>바닥의 <b>화살표</b>를 따라가<br/>이동해보세요!</p>
					<div className='check-group'>
						<input type='checkbox' id='music_chk' />
						<label htmlFor='music_chk'>Play Music</label>
					</div>
					<p>* 체크하고 시작하면 노래(BGM)가 재생돼요.</p>
					<button type='button' className='btn-guide'>START</button>
				</div>
				<div className='dim' onClick={handleShake}></div>
			</div>

			<div className='btn-view'>
				<Link to='/project'>우주선 타고 이동 🚀</Link>
			</div>

			<div className='floating-wrap'>
				<button type='button' className='btn-reset'>새로고침</button>
			</div>
		</Layout>
	);
};


export default Intro;