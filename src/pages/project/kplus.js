import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from '../../components/Layout';
import '../../assets/scss/portfolio.scss';
import Topimg from '../../assets/images/project/kplus.png';
import Kplus01 from '../../assets/images/project/kplus_sub01.jpg';
import Kplus02 from '../../assets/images/project/kplus_sub02.jpg';
import Kplus03 from '../../assets/images/project/kplus_sub03.png';

import Kplus1 from '../../assets/images/project/kplus1.jpg';
import Kplus2 from '../../assets/images/project/kplus2.jpg';
import Kplus3 from '../../assets/images/project/kplus3.jpg';
import Kplus4 from '../../assets/images/project/kplus4.jpg';
import Kplus5 from '../../assets/images/project/kplus5.jpg';
import Kplus6 from '../../assets/images/project/kplus6.jpg';
import Kplus7 from '../../assets/images/project/kplus7.jpg';
import Kplus8 from '../../assets/images/project/kplus8.jpg';
import Kplus9 from '../../assets/images/project/kplus9.jpg';
import Kplus10 from '../../assets/images/project/kplus10.jpg';
import Kplus11 from '../../assets/images/project/kplus11.jpg';
import Kplus12 from '../../assets/images/project/kplus12.jpg';
import Kplus13 from '../../assets/images/project/kplus13.jpg';
import Kplus14 from '../../assets/images/project/kplus14.jpg';


const Kplus = () => {

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
		<Layout header>
			<div id="project" ref={projectRef} className='project-wrap kplus'>

				<section ref={topRef} className='project-top'>
					<h2>YG KPLUS</h2>
					<div className='project-topimg'>
						<img src={Topimg} alt="상단 이미지"/>
					</div>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<div className="area-half">
						<div className="left">
							<strong className="title">YG KPLUS 홈페이지</strong>
							<div className="dl-info">
								<dl>
									<dt>Category.</dt>
									<dd>Web/Mobile Platform, Homepage</dd>
								</dl>
								<dl>
									<dt>Type.</dt>
									<dd>반응형</dd>
								</dl>
								<dl>
									<dt>Date.</dt>
									<dd>2021.08 ~ 2022.02, 이후 유지보수</dd>
								</dl>
							</div>
						</div>
						<div className="right">
							<div className="description">
								<strong>Description.</strong>
								<p>
								리뉴얼한 YG KPLUS 반응형 홈페이지 입니다.<br/>
								Photoshop으로 디자인 작업을 진행 후, 디자인 파일을 공유하여 고객사에 컨펌 받아 UI개발, 퍼블리싱까지 진행한 프로젝트 입니다.<br/>
								PLANNING & PRODUCTION 메뉴의 페이지인 아코디언 레이아웃 등은 플러그인을 사용하지 않고 jQuery로 작성하였습니다.<br/>
								이외의 초기 <b>모든 페이지 디자인과 퍼블리싱 100% 작업</b>하였습니다.
								</p>
							</div>
							<div className="description">
								<strong>Skills.</strong>
								<p>HTML, CSS, Javascript, Jquery, ASP, PhotoShop, Illustrator</p>
							</div>
						</div>
					</div>
					<a href="https://ygkplus.com/" className="btn-goto" target="_blank" rel="noreferrer">사이트 바로가기</a>
				</section>

				<hr/>

				<section className="area-one">
					<img src={Kplus01} alt="KPLUS 이미지"/>
				</section>

				<section className="area-one">
					<strong className="sub-title">디자인부터 ㅡ<br/>레이아웃, 공통, 유지보수까지<br/>Web Publishing 진행.</strong>
					<div className="area-half">
						<div className="left description">
							<img src={Kplus02} alt="KPLUS 이미지"/>
						</div>
						<div ref={textRef} className="right">
							<div className="dl-info">
								<dl>
									<dt>공통, 메인.</dt>
									<dd>
										<ul className="list">
											<li>전체 반응형 진행</li>
											<li>Main - Fullpage.js 사용 (현재는 디자인 변경으로 인해 없어짐)</li>
											<li>
												디자인을 먼저 진행하고 그에 맞춰 코드를 작성하니 더욱 재밌었습니다. <br/>
												이후 유지보수를 통해 수정된 것이 많지만 메인 페이지에 slick.js를 여러 디자인으로 넣으며 많은 정보를 간략히 보여주려고 했습니다.
											</li>
											<li>메인 페이지의 경우, Fullpage 특성 상 한 페이지에 들어가야 되기 때문에 media query를 max-height도 잡아서 작업 진행했었습니다.</li>
											<li>기존의 홈페이지에서 더욱 깔끔하고 가독성있게 작업하였습니다.</li>
										</ul>
									</dd>
								</dl>
								<dl>
									<dt>서브 페이지 01.</dt>
									<dd>COMPANY - 기존 홈페이지 정보를 토대로 깔끔하게 디자인/퍼블리싱 진행하였습니다.</dd>
								</dl>
								<dl>
									<dt>서브 페이지 02.</dt>
									<dd>
										MANAGEMENT - 리스트 페이지, 디테일 페이지<br/>
										반응형에 맞춰, 보여줘야 하는 크기가 각기 다른 slick.js가 많이 쓰였습니다. 영역을 벗어나지 않고 깔끔하게 작업하려고 신경썼었습니다.
									</dd>
								</dl>
								<dl>
									<dt>서브 페이지 03.</dt>
									<dd>
										PRODUCTION - 아코디언 형태의 디자인을 작업하고 javascript, jQuery를 사용하여 직접 코딩했습니다.<br/>
										누른 영역에 active 클래스를 주고 ul에 open 클래스명을 줘서 width값이 인터랙션하게 변하는 UI 개발을 진행했습니다.
									</dd>
								</dl>
								<dl>
									<dt>서브 페이지 04.</dt>
									<dd>
										ACADEMY - 수강신청, 강사소개, 모델, Q&A 리스트와 디테일 페이지 작업하였습니다.
									</dd>
								</dl>
								<dl>
									<dt>서브 페이지 05.</dt>
									<dd>NEWS - 깔끔한 list 페이지에서 디테일 내용은 popup 형태로 나오게 작업하였습니다.</dd>
								</dl>
								<dl>
									<dt>서브 페이지 06.</dt>
									<dd>NOTICE - Q&A와 같은 디자인으로, 게시판 형태의 페이지는 디자인을 동일하게 가져갔습니다.</dd>
								</dl>
							</div>
						</div>
					</div>
				</section>

				<section className="area-one kp-bghalf clr" data-bgcolor="#ffffff">
					<img src={Kplus03} alt="KPLUS 이미지"/>
				</section>

				<section className="area-one img-wrap clr" data-bgcolor="#111">
					<div className="area-half">
						<div className="left">
							<strong className="sub-title line">YG KPLUS<br/>초기 디자인 시안<br/>(PC)</strong>
						</div>
						<div className="left">
							<img src={Kplus1} alt="KPLUS 디자인 시안"/>
						</div>
						<div className="right">
							<img src={Kplus2} alt="KPLUS 디자인 시안"/>
							<img src={Kplus3} alt="KPLUS 디자인 시안"/>
							<img src={Kplus4} alt="KPLUS 디자인 시안"/>
						</div>
					</div>
				</section>
					
				<section className="area-one img-wrap">
					<div className="area-half">
						<div className="left">
							<img src={Kplus5} alt="KPLUS 디자인 시안"/>
							<img src={Kplus6} alt="KPLUS 디자인 시안"/>
						</div>
							
						<div className="right">
							<img src={Kplus7} alt="KPLUS 디자인 시안"/>
							<img src={Kplus8} alt="KPLUS 디자인 시안"/>
						</div>
					</div>
				</section>


				<section className="area-one img-wrap">
					<div className="area-half">
						<div className="left">
							<img src={Kplus9} alt="KPLUS 디자인 시안"/>
							<img src={Kplus10} alt="KPLUS 디자인 시안"/>
						</div>
						<div className="right">
							<img src={Kplus11} alt="KPLUS 디자인 시안"/>
							<img src={Kplus12} alt="KPLUS 디자인 시안"/>
						</div>
					</div>

					<div className="area-half">
						<div className="left">
							<img src={Kplus13} alt="KPLUS 디자인 시안"/>
						</div>
						<div className="right">
							<img src={Kplus14} alt="KPLUS 디자인 시안"/>
						</div>
					</div>
				</section>
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



export default Kplus;