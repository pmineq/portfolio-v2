import React, { useEffect } from 'react';
// import $ from 'jquery';
import Layout from '../components/Layout';
import '../assets/scss/intro.scss';
// import Music from '../assets/audio/BamYangGang.mp3';
import { Link } from 'react-router-dom';
import MainJS from './main';



const Intro = (props) => {

	useEffect(() => {

		MainJS();

	}, []);


	

  return (
		<Layout header>
			<canvas id="three-canvas"></canvas>
			<div className='intro'>
				<div id='guide'>
					<div className='guide-text'>
						<p><em>꾸~욱</em> 눌러<br/><b>Click, Drag</b>해서 <br/>이동해요!</p>
						<div className='check-group'>
							<input type='checkbox' id='music_chk' />
							<label htmlFor='music_chk'>Play Music</label>
						</div>
						<p className='text-info'>* 체크하고 시작하면 노래(BGM)가 재생돼요.</p>
						<button type='button' className='btn-guide'>START</button>
					</div>
				</div>
				<div className='btn-view'>
					{/* <a href='/portfolio-v2/project'>우주선 타고 이동 🚀</a> */}
					<Link to='/Project'>우주선 타고 이동 🚀</Link>
				</div>

				<div className='floating-wrap'>
					<button type='button' className='btn-reset'>새로고침</button>
				</div>
			</div>
		</Layout>
	);
};


export default Intro;