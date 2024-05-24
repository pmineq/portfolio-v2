import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import Layout from '../components/Layout';
// import logo from '../assets/images/logo.svg';
import '../assets/scss/portfolio.scss';
import PortJS from './portThree';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from "react-router-dom";



const Portfolio = (props) => {
	

	gsap.registerPlugin(ScrollTrigger);

	const projectRef = useRef();

	useEffect(() => {

		PortJS();
			
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
						// markers: false,
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
		

		//섹션 고정
		const panel = document.querySelector(".intro");

		ScrollTrigger.create({
				trigger: panel,
				start: "top top",
				pin: true,
				pinSpacing: false,
				// markers: true,
				// onEnter: () => gsap.to(".intro", {
				// 	borderRadius: '100%',
				// 	width: '50vw',
				// 	height: '50vw',
				// 	left: '50% - 25vw',
				// 	top: '50% - 25vw',
				// 	duration: 2,
				// })
		});


		//메세지
		let count = 0;

		$(document).off().on('click', '.message:last-child()', function(){
			
			let messageHtml;
	
			$(this).removeClass('on');
			count++;
			if(count === 1) {
				messageHtml = '<div class="message on"><span>웹 UI개발자 박민혜 입니다.</span></div>';
				$('.message-wrap').append(messageHtml);
			} else if(count === 2){
				messageHtml = '<div class="message on"><span>포트폴리오를 보러 와주셔서 감사합니다!</span></div>';
				$('.message-wrap').append(messageHtml);
			} else if(count === 3) {
				// messageHtml = '<div class="message"><span>스크롤 하시면 프로젝트를 확인할 수 있습니다!</span></div>';
				messageHtml = '<div class="message"><span>현재 개발 중이므로, 조금만 기다려 주세요!</span></div>';
				$('.message-wrap').append(messageHtml);
				$('.message-wrap').prepend('<span class="star"></span>');
				$('.scroll-text').addClass('on');
			}
		});


		$(window).on('scroll', function(){
			const winS = $(window).scrollTop();
			// console.log(winS)
			if (winS > 200) {
				$('.message-wrap').fadeOut(1000);
				$('#three-canvas2').fadeOut(500);
			} else {
				$('.message-wrap').fadeIn(500);
				$('#three-canvas2').fadeIn(250);
			}
		});
		


  }, []);



  return (
		<Layout header>
			<canvas id="three-canvas2"></canvas>
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
				{/* <div className="project-intro">
					<img src={logo}/>
				</div> */}
				<div className='project' ref={projectRef}>
					<div className='project-group'>
						{/* S: project-item */}
						<section id='section1' className='project-item' data-bgcolor='#593b22'>
							{/* <Link to='/Project/HyundaiShop'> */}
							<a href="https://shop.hyundai.com/" target="_blank" rel="noreferrer">
								<span className='project-number'>01</span>
								<h2 className='project-date reveal'>반응형</h2>
								<div className='project-imgwrap reveal reveal-ttb'>
									<div className='project-img'></div>
								</div>
								<p className='project-title reveal reveal-btt'>현대Shop 포인트몰</p>
							</a>
							{/* </Link> */}
						</section>
						{/* E: project-item */}

						{/* S: project-item */}
						<section id='section2' className='project-item' data-bgcolor='#245922'>
							<a href='https://ygkplus.com/' target="_blank" rel="noreferrer">
								<span className='project-number'>02</span>
								<h2 className='project-date'>반응형</h2>
								<div className='project-imgwrap reveal reveal-ltr'>
									<div className='project-img'></div>
								</div>
								<p className='project-title reveal reveal-ltr'>YG KPLUS 홈페이지</p>
							</a>
						</section>
						{/* E: project-item */}

						{/* S: project-item */}
						<section id='section3' className='project-item' data-bgcolor='#111111'>
							<a href='https://pmineq.github.io/admin/LSGPIS/main.html' target="_blank" rel="noreferrer">
								<span className='project-number'>03</span>
								<h2 className='project-date reveal '>PC</h2>
								<div className='project-imgwrap reveal reveal-btt'>
									<div className='project-img'></div>
								</div>
								<p className='project-title reveal reveal-btt'>LS GPIS ADMIN PAGE</p>
							</a>
						</section>
						{/* E: project-item */}

						{/* S: project-item */}
						<section id='section4' className='project-item' data-bgcolor='#933535'>
							<a href='https://pmineq.github.io/admin/LSLPL/page.html' target="_blank" rel="noreferrer">
								<span className='project-number'>04</span>
								<h2 className='project-date'>PC</h2>
								<div className='project-imgwrap reveal reveal-ttb'>
									<div className='project-img'></div>
								</div>
								<p className='project-title reveal reveal-ltr'>LS Nikko Admin 디자인 시스템</p>
							</a>
						</section>
						{/* E: project-item */}

					</div>			
				</div>
			</div>

			<div id="footer" className="footer">
				<div className="bottom-wrap">
					<div className="footer-inner">
						<p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.<br/>
							© 2024 Park, Min-Hye. All Rights Reserved.</p>
					</div>
				</div>
			</div>

		</Layout>
	);
};



export default Portfolio;