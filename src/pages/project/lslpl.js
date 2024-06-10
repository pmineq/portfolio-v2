import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from '../../components/Layout';
import '../../assets/scss/portfolio.scss';
import Topimg from '../../assets/images/project/lslpl.png';
import Lslpl01 from '../../assets/images/project/lslpl_sub01.png';
import Lslpl02 from '../../assets/images/project/lslpl_sub02.png';


const Lslpl = () => {

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
			<div id="project" ref={projectRef} className='project-wrap lslpl'>

				<section ref={topRef} className='project-top'>
					<h2>LS LPL</h2>
					<div className='project-topimg'>
						<img src={Topimg} alt="상단 이미지"/>
					</div>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<div className="area-half">
						<div className="left">
							<strong className="title">LS LPL 관리자 화면</strong>
							<div className="dl-info">
								<dl>
									<dt>Category.</dt>
									<dd>Web Platform, Admin</dd>
								</dl>
								<dl>
									<dt>Type.</dt>
									<dd>PC</dd>
								</dl>
								<dl>
									<dt>Date.</dt>
									<dd>2022.06.01 ~ 2022.06.31</dd>
								</dl>
							</div>
						</div>
						<div className="right">
							<div className="description">
								<strong>Description.</strong>
								<p>
								기획서 및 디자인 시안이 작업 되어 있어, 시안을 토대로 작업하며 고객사의 요구사항에 맞게 수정하였습니다.<br/>
								HTML과 CSS를 이용하여 퍼블리싱을 작업하고, 메뉴 및 간단한 동작은 jQuery로 작업하였으며 개발자에게 넘긴 후 다시 받아서 스타일 수정을 진행하였습니다.
								</p>
							</div>
							<div className="description">
								<strong>Skills.</strong>
								<p>HTML, CSS, Javascript, jQuery</p>
							</div>
						</div>
					</div>
					<a href="https://pmineq.github.io/admin/LSLPL/page.html#" className="btn-goto" target="_blank" rel="noreferrer">사이트 바로가기</a>
				</section>

				<hr/>

				<section className="area-one">
					<img src={Lslpl01} alt="Lslpl 이미지"/>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<strong ref={textRef} className="sub-title">Web Publishing 진행.</strong>
				</section>

				<section className="area-one">
					<img src={Lslpl02} alt="Admin 이미지"/>
					<div className="description">
						<strong>컴포넌트 퍼블리싱 캡쳐 이미지</strong>
					</div>
				</section>

			</div>
			
		</Layout>
	);
};



export default Lslpl;