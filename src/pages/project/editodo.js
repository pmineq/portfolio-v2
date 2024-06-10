import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from '../../components/Layout';
import '../../assets/scss/portfolio.scss';
import Topimg from '../../assets/images/project/editodo.png';
import Editodo01 from '../../assets/images/project/editodo_sub01.jpg';


const Editodo = () => {

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
			<div id="project" ref={projectRef} className='project-wrap editodo'>

				<section ref={topRef} className='project-top'>
					<h2>Editodo</h2>
					<div className='project-topimg'>
						<img src={Topimg} alt="상단 이미지"/>
					</div>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<div className="area-half">
						<div className="left">
							<strong className="title">Editodo 토이 프로젝트</strong>
							<div className="dl-info">
								<dl>
									<dt>Category.</dt>
									<dd>Toy Project</dd>
								</dl>
								<dl>
									<dt>Type.</dt>
									<dd>Mobile</dd>
								</dl>
								<dl>
									<dt>Date.</dt>
									<dd>2023.03</dd>
								</dl>
							</div>
						</div>
						<div className="right">
							<div className="description">
								<strong>Description.</strong>
								<p>
									스터디에서 진행한 프로젝트 입니다.<br/>
									Figma로 기획 및 디자인 작업을 진행하였습니다.
								</p>
							</div>
							<div className="description">
								<strong>Skills.</strong>
								<p>Figma</p>
							</div>
						</div>
					</div>
					<a href="https://editodo.com/" className="btn-goto" target="_blank" rel="noreferrer">사이트 바로가기</a>
					<a href="https://www.figma.com/design/MvilioYP11ubQJbGWyWrKh/EdiTodo?node-id=0-1&amp;t=mfed31Ugei2A6pZI-1" className="btn-goto" target="_blank" rel="noreferrer">
					<svg style={{width: '16px', height: '16px', marginRight: '5px', verticalAlign: 'top'}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
						<path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
					</svg>
						Figma 바로가기
					</a>
				</section>

				<hr/>

				<section className="area-one">
					<img src={Editodo01} alt="Editodo 이미지"/>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<strong ref={textRef} className="sub-title">기획,<br/>디자인 진행.</strong>
					<p>디자인 화면은 상단 Figma 바로가기 버튼을 통해 확인하실 수 있습니다.</p>
				</section>

			</div>
			
		</Layout>
	);
};



export default Editodo;