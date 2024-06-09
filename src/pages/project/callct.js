import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from '../../components/Layout';
import '../../assets/scss/portfolio.scss';
import Topimg from '../../assets/images/project/callct.png';
import Callct01 from '../../assets/images/project/callct_sub01.png';


const Callct = () => {

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
			<div id="project" ref={projectRef} className='project-wrap callct'>

				<section ref={topRef} className='project-top'>
					<h2>직장 내 괴롭힘 상담센터</h2>
					<div className='project-topimg'>
						<img src={Topimg} alt="상단 이미지"/>
					</div>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<div className="area-half">
						<div className="left">
							<strong className="title">직장 내 괴롭힘 상담센터 플랫폼 신규 구축</strong>
							<div className="dl-info">
								<dl>
									<dt>Category.</dt>
									<dd>Web/Mobile Platform</dd>
								</dl>
								<dl>
									<dt>Type.</dt>
									<dd>반응형</dd>
								</dl>
								<dl>
									<dt>Date.</dt>
									<dd>2021.11</dd>
								</dl>
							</div>
						</div>
						<div className="right">
							<div className="description">
								<strong>Description.</strong>
								<p>
									신규 구축으로 참여했던 직장 내 괴롭힘 상담센터 홈페이지 입니다.<br/>
									XD로 디자인하여 Zeplin에 업로드하고, 컨펌 받은 뒤 퍼블리싱 진행하였습니다.<br/>

								</p>
							</div>
							<div className="description">
								<strong>Skills.</strong>
								<p>HTML, CSS, Javascript, jQuery, XD, Zeplin</p>
							</div>
						</div>
					</div>
					<a href="https://scene.zeplin.io/project/6178e0a538b99bbfd2b6ac68" className="btn-goto" target="_blank" rel="noreferrer">Zeplin 바로가기</a>
				</section>

				<hr/>

				<section className="area-one">
					<img src={Callct01} alt="Callct 이미지"/>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<strong className="sub-title">디자인,<br/>Web Publishing 진행.</strong>
					<p>디자인 화면은 상단 Zeplin 바로가기 버튼을 통해 확인하실 수 있습니다.</p>
				</section>

			</div>
			
		</Layout>
	);
};



export default Callct;