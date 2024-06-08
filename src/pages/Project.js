import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';

import '../assets/scss/portfolio.scss';
import Layout from '../components/Layout';
import PortJS from './portThree';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Lenis from '@studio-freight/lenis';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const subproject = [
  { id: 'sub01', url: 'https://pmineq.github.io/portfolio-v2/', name: 'Portfolio ver.02', type: '반응형', duty: '디자인/퍼블리싱/프론트개발' },
  { id: 'sub02', url: 'https://pmineq.github.io/Dubuck/', name: '두벅 영워드', type: '반응형', duty: '퍼블리싱(React)' },
  { id: 'sub03', url: 'https://pmineq.github.io/admin/GTEC/Web/components.html', name: 'Admin 디자인 시스템', type: '반응형', duty: '기획/디자인/퍼블리싱' },
  { id: 'sub04', url: 'https://www.figma.com/design/MvilioYP11ubQJbGWyWrKh/EdiTodo?node-id=0-1&t=mfed31Ugei2A6pZI-1', name: 'Editodo', type: 'Mobile', duty: '기획/디자인' },
	{ id: 'sub05', url: 'https://scene.zeplin.io/project/6178e0a538b99bbfd2b6ac68', name: '직장 내 괴롭힘 상담센터', type: '적응형', duty: '디자인/퍼블리싱' },
  { id: 'sub06', url: 'https://lms.kcplaa.or.kr/', name: '한국공인노무사회 이러닝센터', type: '적응형', duty: '퍼블리싱' },
  { id: 'sub07', url: 'https://pmineq.github.io/admin/LSLPL/page.html', name: 'LS LPL Admin', type: 'PC', duty: '퍼블리싱' },
];


const Portfolio = () => {
	
	gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
	const starRef = useRef();
	const motionRef = useRef();
	const pathRef = useRef();
	

	useEffect(() => {

		PortJS();

		const lenis = new Lenis({
			lerp: 0.07,
		});
	
		lenis.on('scroll', ScrollTrigger.update);
	
		gsap.ticker.add(time => {
			lenis.raf(time * 1000);
		});
	
		gsap.ticker.lagSmoothing(0);

			
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
				messageHtml = '<div class="message"><span>스크롤 하시면 프로젝트를 확인할 수 있습니다!</span></div>';
				// messageHtml = '<div class="message"><span>현재 개발 중이므로, 조금만 기다려 주세요!</span></div>';
				$('.message-wrap').append(messageHtml);
				$('.message-wrap').prepend('<span class="star"></span>');
				$('.scroll-text').addClass('on');
			}
		});



		const star = starRef.current;
		const motion = motionRef.current;
		const path = pathRef.current;


		gsap.set(motion, { scale: 0.4, autoAlpha: 1 });
		gsap.set(star, {transformOrigin: "50% 50%", scaleX: -1});
		let getProp = gsap.getProperty(motion),
				flippedX = false,
				flippedY = false;

		const starmotion = gsap.to(motion, {
			scrollTrigger: {
				trigger: path,
				start: "top center",
				end: 'bottom center',
				scrub: 0.7,
				markers: false,
				onUpdate: self => {
					let rotation = getProp("rotation"),
							flipY = Math.abs(rotation) > 90,
							flipX = self.direction === 1;
					if (flipY !== flippedY || flipX !== flippedX) {
						gsap.to(star, {scaleY: flipY ? -1 : 1, scaleX: flipX ? -1 : 1, duration: 0.25});
						flippedY = flipY;
						flippedX = flipX;
					}
				}
			},
			duration: 10,
			ease: pathEase(path, {smooth: true}), 
			immediateRender: true,
			motionPath: {
				path: path,
				align: path,
				alignOrigin: [0.5, 0.5],
				autoRotate: 0
			}
		});

		//부드럽게 따라오는 ease 함수
		function pathEase(path, config={}) {
			let axis = config.axis || "y",
					precision = config.precision || 1,
					rawPath = MotionPathPlugin.cacheRawPathMeasurements(MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0]), Math.round(precision * 12)),
					useX = axis === "x",
					start = rawPath[0][useX ? 0 : 1],
					end = rawPath[rawPath.length - 1][rawPath[rawPath.length-1].length - (useX ? 2 : 1)],
					range = end - start,
					l = Math.round(precision * 200),
					inc = 1 / l,
					positions = [0],
					a = [],
					minIndex = 0,
					smooth = [0],
					minChange = (1 / l) * 0.6,
					smoothRange = config.smooth === true ? 7 : Math.round(config.smooth) || 0,
					fullSmoothRange = smoothRange * 2,
					getClosest = p => {
						while (positions[minIndex] <= p && minIndex++ < l) { }
						a.push(a.length && ((p - positions[minIndex-1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc));
						smoothRange && a.length > smoothRange && (a[a.length - 1] - a[a.length - 2] < minChange) && smooth.push(a.length - smoothRange);
					},
					i = 1;
			for (; i < l; i++) {
				positions[i] = (MotionPathPlugin.getPositionOnPath(rawPath, i / l)[axis] - start) / range;
			}
			positions[l] = 1;
			for (i = 0; i < l; i++) {
				getClosest(i / l);
			}
			a.push(1); // must end at 1.
			if (smoothRange) { // smooth at the necessary indexes where a small difference was sensed. Make it a linear change over the course of the fullSmoothRange
				smooth.push(l-fullSmoothRange+1);
				smooth.forEach(i => {
					let start = a[i],
							j = Math.min(i + fullSmoothRange, l),
							inc = (a[j] - start) / (j - i),
							c = 1;
					i++;
					for (; i < j; i++) {
						a[i] = start + inc * c++;
					}
				});
			}
			return p => {
				let i = p * l,
						s = a[i | 0];
				return i ? s + (a[Math.ceil(i)] - s) * (i % 1) : 0;
			}
		}


    return () => {
      // Cleanup GSAP starmotion
      starmotion.kill();
			lenis.stop();
			lenis.destroy();
    };

  }, []);


	//slick
  const settings = {
		centerMode: true,
		centerPadding: '150px',
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold : 50,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					// arrows: false,
					// centerMode: true,
					centerPadding: '0',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					// arrows: false,
					// centerMode: true,
					centerPadding: '150px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					// arrows: false,
					// centerMode: true,
					centerPadding: '100px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 400,
				settings: {
					// arrows: false,
					// centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
  };



  return (
		<Layout header>
			<div className='portfolio'>
				
				<div className="stars-wrap">
					<div id='stars'></div>
					<div id='stars2'></div>
					<div id='stars3'></div>
				</div>

				<div className='intro'>
					<canvas id="three-canvas2"></canvas>
					<div className='message-wrap'>
						<div className='message on'>
							<span>안녕하세요!</span>
						</div>
					</div>
					<div className='scroll-text'>
						<p>Scroll Down</p>
					</div>
				</div>

				<div className='project'>
					<strong className="title">주요 행성</strong>
					<div className='project-group'>
						{/* S: project-item */}
						<section id='section1' className='project-item'>
							<Link to='/project/hyundai'>
								<h2 className='project-type reveal'>반응형</h2>
								<div className='project-imgwrap reveal reveal-ttb'>
									<div className='project-img'></div>
								</div>
								<p className='project-title reveal reveal-btt'>현대자동차 공식 온라인몰,<br/><b>현대Shop</b></p>
							</Link>
						</section>
						{/* E: project-item */}

						{/* S: project-item */}
						<section id='section2' className='project-item'>
							<Link to='/project/kplus'>
								<h2 className='project-type reveal'>반응형</h2>
								<div className='project-imgwrap reveal reveal-ltr'>
									<div className='project-img'></div>
								</div>
								<p className='project-title reveal reveal-ltr'><b>YG KPLUS</b>홈페이지 신규 리뉴얼</p>
							</Link>
						</section>
						{/* E: project-item */}

						{/* S: project-item */}
						<section id='section3' className='project-item'>
							<Link to='/project/lsgpis'>
								<h2 className='project-type reveal '>PC</h2>
								<div className='project-imgwrap reveal reveal-btt'>
									<div className='project-img'></div>
								</div>
								<p className='project-title reveal reveal-btt'>관리자 화면 신규 구축<br/><b>LS GPIS</b></p>
							</Link>
						</section>
						{/* E: project-item */}

						{/* S: project-item */}
						{/* <section id='section4' className='project-item'>
							<a href='https://pmineq.github.io/admin/LSLPL/page.html' target="_blank" rel="noreferrer">
								<h2 className='project-type'>PC</h2>
								<div className='project-imgwrap reveal reveal-ttb'>
									<div className='project-img'></div>
								</div>
								<p className='project-title reveal reveal-ltr'>LS Nikko Admin 디자인 시스템</p>
							</a>
						</section> */}
						{/* E: project-item */}


						{/* S: star-scroll  */}
						<svg id="star-scroll" viewBox="0 0 1600.84 4700.66">
							<path id="motionPath" ref={pathRef} className="st0" d="m1.1.26C-3.9,8.43,15.84,73.55,320.28,165.27c.87.26,1.76.51,2.65.73,156.39,38.97,325.46,24.21,485.08,25.76,222.52,2.16,594.61,22.02,687.04,274.82,59.71,163.31-67.57,351.38-174.5,464.53-57.16,60.48-139.67,89.02-216.76,114.32-73.7,24.19-143.4,52.78-165.14,135.27-14.7,55.78-16.51,117.28-58.76,161.24-64.39,67-173.81,54.45-257.94,56.66-45.5,1.19-194.44,1.75-170.83,82.58,15.88,54.36,91.82,79.15,138.02,96.63,74.11,28.03,120.54,53,188.42,96.61,35.57,22.85,66.99,54.29,82.44,93.64,68.96,175.63-95.12,354.31-229.67,427.83-36.68,20.04-75.61,36.04-115.91,47.18-42.13,11.64-85.66,7.78-127.06,21.09-140.33,45.11-178.4,258.09-181.12,382.95-1.5,68.9,17.33,141.08,59.49,196.41,72.11,94.63,199.54,113.42,299.91,162.83,138.64,68.23,272.6,142.13,402.88,225.42,65.29,41.74,137.08,85.53,169.85,159.24,30.54,68.69,17.83,150.17-18.68,214-37.26,65.15-107.57,85-179.05,81.91-108.33-4.68-217.29-13.96-323.24,14.56-94.28,25.38-189.87,45.11-228.58,112.46-109.88,191.21,328.39,255.84,227.61,436.98-37.19,66.84-120.5,96.26-175.45,146.58-80.05,73.3-60.61,204.54,44.54,238.71,40.72,13.23,85.92,15.34,128.49,16.71,63.75,2.06,79.97,6.25,143.77,6.25" stroke="#d1d1d1" strokeMiterlimit="10" strokeWidth="5" strokeDasharray="5"/>
							<g id="motionSVG" ref={motionRef}>
								<svg ref={starRef} id="star01" viewBox="0 0 561.81 487.48">
									<g>
										<g>
											<path className="cls-1" d="m22.26,21.49c.2-.55.39-1.11.58-1.67,1.8-5.27,3.77-10.62,6.61-15.44.95-1.62,2.08-3.28,3.81-4.01,3.44-1.45,7.22,1.56,8.92,4.88,5.56,10.85,11.98,21.35,16.43,32.74,2.87,7.34,4.24,14.77,5.39,22.53.17,1.12.26,2.32-.26,3.32-.69,1.35-2.27,1.96-3.74,2.36-6.66,1.83-11.7-1.86-18.33-3.8-2.01-.59-3.08-2.56-5.17-2.38-1.74.15-4.32,2.15-5.93,2.82-6.21,2.59-10.99,5.35-17.66,4.45-.8-.11-1.65-.26-2.26-.79-.62-.55-.89-1.4-.98-2.22-.5-4.28,1.42-8.35,2.26-12.46,2.15-10.57,6.7-20.25,10.32-30.34Z"/>
											<path className="cls-2" d="m26.79,36.24c3.22,0,3.22-5,0-5s-3.22,5,0,5h0Z"/>
											<path className="cls-2" d="m43.36,35.1c3.22,0,3.22-5,0-5s-3.22,5,0,5h0Z"/>
											<path className="cls-2 smile" d="m30.3,37.58c-.11,2.55,1.75,4.87,4.13,5.63s4.99-.47,6.28-2.57c.75-1.23.99-2.66.72-4.07-.15-.77-1.12-1.28-1.85-1.05-.82.27-1.21,1.02-1.05,1.85.03.17.03.15,0-.07,0,.07.01.15.02.22,0,.11,0,.22,0,.33,0,.07,0,.15-.01.22.03-.22.04-.24,0-.07-.02.11-.04.22-.07.32s-.06.34-.14.42l.07-.15c-.03.07-.06.13-.09.2-.12.23-.26.45-.41.66.21-.3.01-.02-.05.04-.1.11-.2.22-.31.32-.05.05-.34.27-.04.05-.12.09-.24.17-.37.25-.09.06-.19.1-.29.16-.26.15.27-.09-.1.04-.12.04-.24.08-.37.11-.07.02-.14.03-.22.04.2-.02.24-.03.12-.02-.24,0-.51.05-.74-.01.42.11-.08-.03-.16-.06-.11-.03-.22-.07-.32-.1-.16-.06-.14-.05.04.02-.07-.03-.14-.07-.2-.1-.1-.05-.2-.11-.3-.17-.04-.02-.38-.28-.22-.15s-.17-.15-.2-.18c-.08-.08-.16-.16-.24-.25-.05-.06-.1-.12-.15-.17.12.15.13.16.03.03-.14-.23-.27-.45-.39-.69.16.33.01,0-.01-.07-.05-.14-.08-.29-.11-.44-.08-.3,0,.29,0-.05,0-.15,0-.3,0-.46.03-.78-.71-1.54-1.5-1.5-.84.04-1.47.66-1.5,1.5h0Z"/>
										</g>
										<path className="cls-1 left" d="m13.56,46.47c-.81-3.57-4.15-5.86-6.79-8.4-2.65-2.54-4.77-5.63-6.2-9.01-.4-.95-.75-1.99-.49-2.99.44-1.66,2.32-2.44,3.99-2.87,5.28-1.36,10.82-1.73,16.23-1.07l1.84-.19-8.59,24.52Z"/>
										<path className="cls-1 right" d="m47.42,18.51c5,2.27,13.87,1.73,19.72,1.78,1.17.01,2.43.1,3.36.81,1.91,1.45,1.42,4.43.48,6.64-1.55,3.64-3.8,6.98-6.6,9.78-1.9,1.9-4.21,3.9-4.21,6.58l-12.76-25.59Z"/>
									</g>
								</svg>
							</g>
						</svg>
						{/* E: star-scroll  */}

					</div>

					<div className="side-project">

						<strong className="title">사이 행성 
							<div className="tip-wrap">
								<i className="icon-tip">?</i>
								<div className="tooltip">
									<div className="text">
										<span><strong>사이</strong>드 프로젝트 + <strong>행성</strong>,<br/>
										스터디나 자기계발용 프로젝트를 모았어요.</span>
									</div>
								</div>
							</div>
						</strong>

						<div className="side-project-list">
							<Slider {...settings}>

								{subproject.map((item) => (
									<div key={item.id} id={item.id} className="side-project-item">
										{/* <Link to={item.url}> */}
										<a href={item.url} target="_blank" rel="noreferrer">
											<div className="side-project-planet">
												<div className='side-project-imgwrap'>
													<div className='side-project-img'></div>
												</div>
											</div>
											<div className="side-project-info">
												<strong className="name">{item.name}</strong>
												<dl className="type">
													<dt>Type.</dt>
													<dd>{item.type}</dd>
												</dl>
												<dl className="duty">
													<dt>Duty.</dt>
													<dd>{item.duty}</dd>
												</dl>
											</div>
										</a>
										{/* </Link> */}
									</div>
								))}

							</Slider>
						</div>

						<div className='guide-text small'>
							<p>
								상세 내용 작성 중이에요<br/><b>조금만</b> 기다려 주세요!<br/>현재는 아래 정보를 누르면<br/> 관련 사이트가 <b>새 창</b>으로 뜹니다.<br/>
								<svg width={48} height={48} fill="#fff">
									<path d="M24 13.6a1.2 1.2 0 0 0 1.2-1.2v-1.92a1.2 1.2 0 1 0-2.4 0v1.92a1.2 1.2 0 0 0 1.2 1.2Zm0 20.8a1.2 1.2 0 0 0-1.2 1.2v1.92a1.2 1.2 0 1 0 2.4 0V35.6a1.2 1.2 0 0 0-1.2-1.2Zm13.52-11.6H35.6a1.2 1.2 0 0 0 0 2.4h1.92a1.2 1.2 0 0 0 0-2.4ZM13.6 24a1.2 1.2 0 0 0-1.2-1.2h-1.92a1.2 1.2 0 0 0 0 2.4h1.92a1.2 1.2 0 0 0 1.2-1.2Zm18.6-7a1.18 1.18 0 0 0 .85-.35l1.36-1.36a1.2 1.2 0 1 0-1.69-1.69L31.36 15a1.19 1.19 0 0 0 0 1.69 1.16 1.16 0 0 0 .84.31ZM15 31.36l-1.36 1.36a1.21 1.21 0 0 0 0 1.69 1.21 1.21 0 0 0 1.7 0l1.35-1.36A1.2 1.2 0 0 0 15 31.36Zm18.1 0a1.2 1.2 0 0 0-1.69 1.69l1.36 1.36a1.18 1.18 0 0 0 .84.35 1.2 1.2 0 0 0 .85-2ZM15 16.64a1.18 1.18 0 0 0 .85.35 1.16 1.16 0 0 0 .84-.35 1.19 1.19 0 0 0 0-1.69l-1.36-1.36a1.2 1.2 0 1 0-1.69 1.69Zm13.71 1A4.74 4.74 0 0 0 24 19.08a4.74 4.74 0 0 0-4.66-1.45 4.82 4.82 0 0 0-3.53 5.1c.24 3.95 3.39 7.38 7.83 8.54a1.1 1.1 0 0 0 .31 0h.1a1.06 1.06 0 0 0 .31 0c4.44-1.16 7.59-4.59 7.83-8.54a4.82 4.82 0 0 0-3.53-5.1Zm1.14 4.95c-.17 2.84-2.49 5.35-5.8 6.3-3.31-.95-5.63-3.46-5.8-6.3A2.38 2.38 0 0 1 19.94 20a2.52 2.52 0 0 1 2.92 1.69 1.3 1.3 0 0 0 2.28 0A2.52 2.52 0 0 1 28.06 20a2.38 2.38 0 0 1 1.74 2.58Z" />
								</svg>
							</p>
						</div>

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