import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from '../../components/Layout';
import '../../assets/scss/portfolio.scss';
import Topimg from '../../assets/images/project/lms.png';
import Lms01 from '../../assets/images/project/lms_sub01.png';


const Lms = () => {

	gsap.registerPlugin(ScrollTrigger);
	const projectRef = useRef();
	const topRef = useRef();

	const textRef = useRef();

	useEffect(() => {

		$('#header').addClass('white difference');

		gsap.to(topRef.current,{
			height: '70vh',
			duration: 3,
			onComplete: () => {
        // 애니메이션 완료 후 ScrollTrigger 새로고침
        ScrollTrigger.refresh();
      }
		});


		const project = projectRef.current;
		// bg color
		gsap.utils.toArray(".clr").forEach((item) => {
			let color = item.getAttribute("data-bgcolor");

			ScrollTrigger.create({
					trigger: item,
					start: "top 50%",
					end: "bottom 5%",
					// markers: true,

					onEnter: () => gsap.to(project, {
							backgroundColor: color,
							duration: 1,
					}),
					onEnterBack: () => gsap.to(project, {
							backgroundColor: color,
							duration: 1,
					}),
			});
		});

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      }
    });

    tl.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    });


	}, []);

  return (
		<Layout header footer>
			<div id="project" ref={projectRef} className='project-wrap lms'>

				<section ref={topRef} className='project-top'>
					<h2>한국공인노무사회 이러닝 센터</h2>
					<div className='project-topimg'>
						<img src={Topimg} alt="상단 이미지"/>
					</div>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<div className="area-half">
						<div className="left">
							<strong className="title">한국공인노무사회 이러닝 센터 사이트 구축</strong>
							<div className="dl-info">
								<dl>
									<dt>Category.</dt>
									<dd>Web/Mobile Platform</dd>
								</dl>
								<dl>
									<dt>Type.</dt>
									<dd>적응형</dd>
								</dl>
								<dl>
									<dt>Date.</dt>
									<dd>2021.06</dd>
								</dl>
							</div>
						</div>
						<div className="right">
							<div className="description">
								<strong>Description.</strong>
								<p>
									한국공인노무사회 이러닝센터 사이트입니다.<br/>
									공통 부분(헤더, 푸터)과 배너 디자인, 서브페이지 등을 퍼블리싱 작업 진행하면서 동시 진행 하였습니다.
								</p>
							</div>
							<div className="description">
								<strong>Skills.</strong>
								<p>HTML, CSS, Javascript, jQuery, XD, Zeplin</p>
							</div>
						</div>
					</div>
					<a href="https://lms.kcplaa.or.kr/" className="btn-goto" target="_blank" rel="noreferrer">사이트 바로가기</a>
				</section>

				<hr/>

				<section className="area-one">
					<img src={Lms01} alt="Lms 이미지"/>
				</section>

				<section ref={textRef} className="area-one clr" data-bgcolor="#ffffff">
					<strong className="sub-title">디자인,<br/>Web Publishing 진행.</strong>
				</section>

			</div>
			
		</Layout>
	);
};



export default Lms;