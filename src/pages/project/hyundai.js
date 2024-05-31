import React, { useEffect } from "react";
import $ from 'jquery';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from '../../components/Layout';
import '../../assets/scss/portfolio.scss';
import Topimg from '../../assets/images/project/hyundai.png';



const Hyundai = (props) => {

	gsap.registerPlugin(ScrollTrigger);
	// const projectRef = useRef();

	useEffect(() => {

		$('#header').addClass('white');

		const project = document.querySelector(".project-wrap");

		gsap.to(project,{
				start: "top top",
				pin: false,
				pinSpacing: false,
				markers: true,
				onEnter: () => gsap.to(".project-top", {
					height: '60vh',
					duration: 2,
				})
		});


		//bg color
		gsap.utils.toArray(".clr").forEach((item) => {
			let color = item.getAttribute("data-bgcolor");

			ScrollTrigger.create({
					trigger: item,
					start: "top bottom",
					end: "top bottom",
					markers: true,

					onEnter: () => gsap.to(".project-wrap", {
							backgroundColor: color,
							duration: 1.4,
					}),
					onEnterBack: () => gsap.to(".project-wrap", {
							backgroundColor: color,
							duration: 1.4,
					}),
			});
		});

	}, []);

  return (
		<Layout header>
			<div id="project" className='project-wrap hyundai'>

				<section className='project-top'>
					<h2>현대Shop</h2>
					<div className='project-topimg'>
						<img src={Topimg} alt="상단 이미지"/>
					</div>
				</section>

				<section className="project-info clr" data-bgcolor="#ffffff">
					<div className="area-half">
						<div className="left">
							<strong>현대자동차 통합 온라인 쇼핑몰</strong>
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
									<dd>2000.00 ~ 2000.00</dd>
								</dl>
							</div>
							<a href="https://shop.hyundai.com/" target="_blank" rel="noreferrer">사이트 바로가기</a>
						</div>
						<div className="right">
							<div className="dl-info">
								<p className="description">설명설명설명</p>
							</div>
						</div>
					</div>
				</section>

				<section className="project-contents clr" data-bgcolor="pink">

					<div className="area-full">
						<img src={Topimg} alt="이미지"/>
					</div>
					
					<div className="area-half">
						<div className="left">
							<div className="project-text">
								<strong>Main.</strong>
								<p>메인 관련 설명...</p>
							</div>
						</div>
						<div className="right">
							이미지?
						</div>
					</div>

					<div className="area-full">
						ddd
					</div>

				</section>
			</div>
		</Layout>
	);
};



export default Hyundai;