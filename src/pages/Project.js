import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import Layout from '../components/Layout';
import '../assets/scss/portfolio.scss';
import './portThree';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Portfolio = (props) => {
	$('#three-canvas').remove();

	let count = 0;

	$(document).off().on('click', '.message:last-child()', function(){
		
		let messageHtml;

		$(this).removeClass('on');
		count++;
		if(count === 1) {
			messageHtml = '<div class="message on"><span>웹 UI개발자 박민혜 입니다.</span></div>';
			$('.message-wrap').append(messageHtml);
		} else if(count === 2){
			messageHtml = '<div class="message on"><span>포트폴리오를 보러 와주셔서 감사합니다. ^ㅡ^</span></div>';
			$('.message-wrap').append(messageHtml);
		} else if(count === 3) {
			messageHtml = '<div class="message"><span>스크롤 하시면 프로젝트를 확인할 수 있습니다!</span></div>';
			$('.message-wrap').append(messageHtml);
			$('.message-wrap').prepend('<span class="star"></span>');
			$('.scroll-text').addClass('on');
		}
	});

	gsap.registerPlugin(ScrollTrigger);

	const projectRef = useRef();

	useEffect(() => {

		
	const hide = (item) => {
			gsap.set(item, {autoAlpha: 0});
	}

	const animate = (item) => {
			let x = 0;
			let y = 0;
			let delay = item.dataset.delay;

			if(item.classList.contains("reveal-ltr")){
					x = -100;
					y = 0;
			} else if(item.classList.contains("reveal-btt")){
					x = 0;
					y = 100;
			} else if(item.classList.contains("reveal-ttb")){
					x = 0;
					y = -100;
			} else {
					x = 100;
					y = 0;
			}

			gsap.fromTo(item, 
					{autoAlpha: 0, x: x, y: y}, 
					{autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 1.25, overwrite: "auto", ease: "expo"}
			);
	};

	//나타내기
	gsap.utils.toArray(".reveal").forEach(item => {
			hide(item);

			ScrollTrigger.create({
					trigger: item,
					start: "top bottom",
					end: "bottom top",
					markers: false,
					onEnter: () => {animate(item)}
			});
	});




		gsap.utils.toArray(".project-item").forEach((item) => {
			let color = item.getAttribute("data-bgcolor");

			ScrollTrigger.create({
					trigger: item,
					start: "top 50%",
					end: "bottom 50%",
					// markers: true,

					onEnter: () => gsap.to(".project", {
							backgroundColor: color,
							duration: 1.4,
					}),
					onEnterBack: () => gsap.to(".project", {
							backgroundColor: color,
							duration: 1.4,
					}),
			});
		});

  }, []);



  return (
		<Layout header>
			<div className='portfolio'>
				<div className='intro'>
					<div id='stars'></div>
					<div id='stars2'></div>
					<div id='stars3'></div>
					<div className='message-wrap'>
						<div className='message on'>
							<span>안녕하세요!</span>
						</div>
					</div>
					<div className='scroll-text'>
						<p>Scroll Down</p>
					</div>
				</div>
				<div className='project' ref={projectRef}>
					<div className='project-group'>
						{/* S: project-item */}
						<section id='section1' className='project-item' data-bgcolor='#593b22'>
							<span className='project-number'>01</span>
							<h2 className='project-date reveal'>2020.00.00</h2>
							<div className='project-imgwrap'>
								<div className='project-img reveal reveal-ttb'></div>
							</div>
							<p className='project-title reveal reveal-btt'>프로젝트명1</p>
						</section>
						{/* E: project-item */}

						{/* S: project-item */}
						<section id='section2' className='project-item' data-bgcolor='#245922'>
							<span className='project-number reveal reveal-ltr'>02</span>
							<h2 className='project-date'>2020.00.00</h2>
							<div className='project-imgwrap reveal reveal-ltr'>
								<div className='project-img'></div>
							</div>
							<p className='project-title reveal reveal-ltr'>프로젝트명1</p>
						</section>
						{/* E: project-item */}

						{/* S: project-item */}
						<section id='section3' className='project-item' data-bgcolor='#243859'>
							<span className='project-number'>03</span>
							<h2 className='project-date reveal '>2020.00.00</h2>
							<div className='project-imgwrap reveal reveal-ttb'>
								<div className='project-img'></div>
							</div>
							<p className='project-title reveal reveal-btt'>프로젝트명1</p>
						</section>
						{/* E: project-item */}
					</div>			
				</div>
			</div>
		</Layout>
	);
};



export default Portfolio;