import React from 'react';
import $ from 'jquery';
import Layout from '../components/Layout';
import '../assets/scss/intro.scss'


const Intro = (props) => {
	// $('#three-canvas').show();
	$('#three-canvas2').remove();
	
	$(document).on('click', '.btn-guide', function(){
		$('#guide').hide();
	});
	
  return (
		<Layout header>
			<div className='intro'>
				<div id='guide'>
					<div className='guide-text'>
						<p><em>꾸~욱</em> 눌러<br/><b>터치</b>해서 <br/>이동해요!</p>
						<button type='button' className='btn-guide'>OK</button>
					</div>
				</div>
				<div className='btn-view'>
					<a href='/portfolio-v2/project'>보러가기</a>
				</div>

				<div className='floating-wrap'>
					<button type='button' className='btn-reset'>새로고침</button>
				</div>
			</div>
		</Layout>
	);
};


export default Intro;