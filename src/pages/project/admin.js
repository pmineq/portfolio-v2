import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from '../../components/Layout';
import '../../assets/scss/portfolio.scss';
import Topimg from '../../assets/images/project/admin.png';
import Admin01 from '../../assets/images/project/admin_sub01.jpg';
import Admin02 from '../../assets/images/project/admin_sub02.jpg';


const Admin = () => {

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
			<div id="project" ref={projectRef} className='project-wrap admin'>

				<section ref={topRef} className='project-top'>
					<h2>Admin</h2>
					<div className='project-topimg'>
						<img src={Topimg} alt="상단 이미지"/>
					</div>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<div className="area-half">
						<div className="left">
							<strong className="title">반응형 Admin 토이 프로젝트</strong>
							<div className="dl-info">
								<dl>
									<dt>Category.</dt>
									<dd>Toy Project</dd>
								</dl>
								<dl>
									<dt>Type.</dt>
									<dd>반응형</dd>
								</dl>
								<dl>
									<dt>Date.</dt>
									<dd>2022.02</dd>
								</dl>
							</div>
						</div>
						<div className="right">
							<div className="description">
								<strong>Description.</strong>
								<p>
									스터디에서 진행한 프로젝트 입니다.<br/>
									기획부터 디자인, 웹 퍼블리싱 진행하였습니다.<br/>
									자주 쓰는 어드민을 모바일에서도 확인할 수 있게 반응형 어드민을 개발했습니다.
									컴포넌트 페이지에서 설명을 보고 조합해서 쓸 수 있게 적용하였습니다.
								</p>
							</div>
							<div className="description">
								<strong>Skills.</strong>
								<p>HTML, CSS, Javascript, jQuery</p>
							</div>
						</div>
					</div>
					<a href="https://pmineq.github.io/admin/GTEC/Web/components.html" className="btn-goto" target="_blank" rel="noreferrer">사이트 바로가기</a>
				</section>

				<hr/>

				<section className="area-one">
					<img src={Admin01} alt="Admin 이미지"/>
				</section>

				<section className="area-one clr" data-bgcolor="#0061b2">
					<strong className="sub-title">기획, 디자인,<br/>Web Publishing 진행.</strong>
				</section>

				<section className="area-one">
					<img src={Admin02} alt="Admin 이미지"/>
					<div className="description">
						<strong>컴포넌트 퍼블리싱 캡쳐 이미지</strong>
					</div>
				</section>

			</div>
			
		</Layout>
	);
};



export default Admin;