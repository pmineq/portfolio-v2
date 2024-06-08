import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from '../../components/Layout';
import '../../assets/scss/portfolio.scss';
import Topimg from '../../assets/images/project/hyundai.png';
import Hyundai01 from '../../assets/images/project/hyundai_sub01.jpg';
import Hyundai02 from '../../assets/images/project/hyundai_sub02.jpg';
import Hyundai03 from '../../assets/images/project/hyundai_sub03.png';
import Hyundai04 from '../../assets/images/project/hyundai_sub04.jpg';


const Hyundai = () => {

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
			<div id="project" ref={projectRef} className='project-wrap hyundai'>

				<section ref={topRef} className='project-top'>
					<h2>현대Shop</h2>
					<div className='project-topimg'>
						<img src={Topimg} alt="상단 이미지"/>
					</div>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<div className="area-half">
						<div className="left">
							<strong className="title">현대자동차 공식 온라인 쇼핑몰</strong>
							<div className="dl-info">
								<dl>
									<dt>Category.</dt>
									<dd>Web/Mobile Platform, E-commerce</dd>
								</dl>
								<dl>
									<dt>Type.</dt>
									<dd>반응형</dd>
								</dl>
								<dl>
									<dt>Date.</dt>
									<dd>2021.12 ~ 2022.03, 이후 유지보수</dd>
								</dl>
							</div>
						</div>
						<div className="right">
							<div className="description">
								<strong>Description.</strong>
								<p>
									고객사에서 요청한 기획서 및 디자인 시안을 토대로 웹 퍼블리싱을 작업하였습니다.
									크로스 브라우징을 고려하였으며, 반응형으로 작업된 현대자동차 통합 온라인쇼핑몰 플랫폼 입니다.
									gnb 무한 스크롤과 상단 scroll percent, 상세페이지 상품정보 고정 등 기존 쇼핑몰에서 볼 수 없었던 기능들을 Javascript로 작성하여 추가해 작업하였습니다.
									메인 페이지 및 서브페이지 등 초기 개발부터 참여하여 성공적인 오픈을 끌어낸 경험이 있습니다.
								</p>
							</div>
							<div className="description">
								<strong>Skills.</strong>
								<p>HTML, CSS, Javascript, Jquery, ASP, PPT</p>
							</div>
						</div>
					</div>
					<a href="https://shop.hyundai.com/" className="btn-goto" target="_blank" rel="noreferrer">사이트 바로가기</a>
				</section>

				<hr/>

				<section className="area-one">
					<img src={Hyundai01} alt="현대Shop 이미지"/>
				</section>

				<section className="area-one">
					<strong className="sub-title">레이아웃, 공통, 유지보수까지<br/>Web Publishing 진행.</strong>
					<div className="area-half">
						<div className="left description">
							<img src={Hyundai02} alt="현대Shop 이미지"/>
							<img src={Hyundai04} alt="현대Shop 이미지"/>
						</div>
						<div ref={textRef} className="right">
							<div className="dl-info">
								<dl>
									<dt>레이아웃.</dt>
									<dd>
										<ul className="list">
											<li>전체 반응형 진행</li>
											<li>header, gnb, contents, footer 작성하여 공통 컴포넌트 협업하는 회사에 넘기면서 성공적으로 적용시켰습니다. (충돌 방지를 위해 class, id 앞에 rd_를 붙임)</li>
											<li>PC 마크업을 유지하면서 디자인에 맞게 gnb에 Swiper.js를 사용하여 무한 스크롤링 요청을 적용하였습니다.</li>
											<li>header-bar를 추가하여 스크롤 한 위치에 따라 width가 넓어지게끔 javascript를 사용하여 작성하였습니다.</li>
										</ul>
									</dd>
								</dl>
								<dl>
									<dt>공통.</dt>
									<dd>
										검색 - 검색, 결과 페이지 (결과 페이지는 list 페이지에 검색 영역과 hashtag 추가)<br/>
										장바구니 - 장바구니, 주문, 완료 등...<br/>
										마이페이지 - 주문내역, 교환/반품, 최근 본 상품, 위시리스트, 할인쿠폰, 1:1문의, 구매후기, 배송지관리 등...<br/>
									</dd>
								</dl>
								<dl>
									<dt>서브 페이지 01.</dt>
									<dd>베스트 - tab, list로 구성하며 순위는 직관적으로 표현하였습니다.</dd>
								</dl>
								<dl>
									<dt>서브 페이지 02.</dt>
									<dd>
										스토리 - slick.js를 이용하여 최상단 배너 작업, 배너 위 텍스트와 상품리스트 퍼블리싱 진행하였습니다.<br/>
										태블릿(768px)기준 이하는 모바일 이미지가 보이며 하단에 상품 리스트가 나오게끔 변경하였습니다.
									</dd>
								</dl>
								<dl>
									<dt>서브 페이지 03.</dt>
									<dd>
										포인트샵 - 디자인에 맞춰 퍼블리싱 진행하였습니다.<br/>
										PC와 모바일에서 노출되는 상품 갯수가 달라 css로 조정하여 모바일에선 slick.js를 추가하고 pc에선 제외하며 요청사항에 맞는 화면을 성공적으로 작업하였습니다.
									</dd>
								</dl>
								<dl>
									<dt>이벤트 페이지 01.</dt>
									<dd>휠핑(구) - 프로젝트 페이지처럼 자동차가 내려오는 듯한 인터랙션 UI 개발과, 차량 이미지 영역에 포인터를 두어 클릭 시 상세 설명 popup이 뜨게끔 개발하였습니다.</dd>
								</dl>
								<dl>
									<dt>이벤트 페이지 02.</dt>
									<dd>룰렛 페이지(구) - 룰렛 플러그인인 Winwheel.js를 이용하여 룰렛이 돌아가는 인터랙티브한 UI 개발을 진행하였습니다.</dd>
								</dl>
							</div>
						</div>
					</div>
				</section>


				<section className="area-one hd-bghalf">
					<img src={Hyundai03} alt="현대Shop 이미지"/>
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



export default Hyundai;