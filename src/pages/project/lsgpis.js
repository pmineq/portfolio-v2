import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from '../../components/Layout';
import '../../assets/scss/portfolio.scss';
import Topimg from '../../assets/images/project/lsgpis.png';
import Lsgpis01 from '../../assets/images/project/lsgpis_sub01.jpg';
import Lsgpis02 from '../../assets/images/project/lsgpis_sub02.jpg';
import Lsgpis03 from '../../assets/images/project/lsgpis_sub03.png';
import Lsgpis04 from '../../assets/images/project/lsgpis_sub04.png';
import Lsgpis05 from '../../assets/images/project/lsgpis_sub05.png';
import Lsgpis06 from '../../assets/images/project/lsgpis_sub06.png';


const Lsgpis = () => {

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
			<div id="project" ref={projectRef} className='project-wrap lsgpis'>

				<section ref={topRef} className='project-top'>
					<h2>LS GPIS</h2>
					<div className='project-topimg'>
						<img src={Topimg} alt="상단 이미지"/>
					</div>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<div className="area-half">
						<div className="left">
							<strong className="title">LS GPIS 관리자 화면</strong>
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
									<dd>2022.07.01 ~ 2022.07.31</dd>
								</dl>
							</div>
						</div>
						<div className="right">
							<div className="description">
								<strong>Description.</strong>
								<p>
									기획서에 맞춰 디자인 시안 작업과 함께 디자인 제안서를 작업하였습니다.<br/>
									Figma를 이용하여 디자인 시안을 작업하였습니다. HTML5와 CSS3으로 관리자 화면 디자인 시스템을 작업하였으며 javascript와 JQuery로 메뉴와 lnb 동작 기능 등의 간단한 작동들을 작성하였습니다.
									또한, chart.js 라이브러리를 이용하여 디자인 시스템과 동일하게 그래프를 커스텀하여 작업한 경험이 있습니다. 
								</p>
							</div>
							<div className="description">
								<strong>Skills.</strong>
								<p>HTML, CSS, Javascript, jQuery, ASP, PhotoShop, Illustrator</p>
							</div>
						</div>
					</div>
					<a href="https://pmineq.github.io/admin/LSGPIS/main.html" className="btn-goto" target="_blank" rel="noreferrer">사이트 바로가기</a>
				</section>

				<hr/>

				<section className="area-one">
					<img src={Lsgpis01} alt="LSGPIS 이미지"/>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<strong className="sub-title">제안서,<br/>UI/UX 디자인,<br/>Web Publishing 진행.</strong>
					<div className="area-half">
						<div className="left description">
							<img src={Lsgpis02} alt="LSGPIS 이미지"/>
							<div className="discription">
								<strong>초기 디자인.</strong>
							</div>
						</div>
						<div ref={textRef} className="right">
							<div className="dl-info">
								<dl>
									<dt>공통, 레이아웃.</dt>
									<dd>
										<ul className="list">
											<li>기본 컴포넌트 작업</li>
											<li>Chart.js 라이브러리 적용과 함께 커스터마이징 작업을 진행하였습니다.</li>
										</ul>
									</dd>
								</dl>
								<dl>
									<dt>로그인 페이지.</dt>
									<dd>직관적으로 깔끔한 로그인 페이지를 작업하였습니다.</dd>
								</dl>
								<dl>
									<dt>메인 페이지.</dt>
									<dd>
										기획서에 맞춰 간결하게 정보를 나타내고 아이콘을 통해 명확한 구분을 하여 디자인 및 퍼블리싱 진행하였습니다.
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<strong className="sub-title">요청에 맞게 진행하며,<br/>빠른 수정을 통해 명확히 볼 수 있습니다.</strong>
					<div className="area-half">
						<div className="left">
							<img src={Lsgpis04} alt="LSGPIS 이미지"/>
							<div className="description">
								<strong>요청에 맞춰 수정 된 디자인 + 컴포넌트 퍼블리싱</strong>
							</div>
						</div>
						<div className="right">
							<img src={Lsgpis05} alt="LSGPIS 이미지"/>
							<div className="description">
								<strong>메인 페이지</strong>
							</div>
							<img src={Lsgpis06} alt="LSGPIS 이미지"/>
							<div className="description">
								<strong>로그인 페이지</strong>
							</div>
						</div>
					</div>
				</section>

				<section className="area-one ls-bghalf clr" data-bgcolor="#ffffff">
					<img src={Lsgpis03} alt="LSGPIS 이미지"/>
				</section>
			</div>
			
		</Layout>
	);
};



export default Lsgpis;