import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from '../../components/Layout';
import '../../assets/scss/portfolio.scss';
import Topimg from '../../assets/images/project/dubuck.png';
import Dubuck01 from '../../assets/images/project/dubuck_sub01.jpg';


const Dubuck = () => {

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
			<div id="project" ref={projectRef} className='project-wrap dubuck'>

				<section ref={topRef} className='project-top'>
					<h2>두벅 영워드</h2>
					<div className='project-topimg'>
						<img src={Topimg} alt="상단 이미지"/>
					</div>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<div className="area-half">
						<div className="left">
							<strong className="title">두벅 영워드 토이프로젝트</strong>
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
									<dd>2024.05</dd>
								</dl>
							</div>
						</div>
						<div className="right">
							<div className="description">
								<strong>Description.</strong>
								<p>
									스터디에서 진행한 프로젝트 입니다. 다른 팀원이 진행한 디자인/기획안 문서를 보고 React 기반 웹 퍼블리싱 진행하였습니다.
									진행한 소스 코드들은 Notion으로 부가설명과 함께 공유하여 협업을 진행하였습니다.
								</p>
							</div>
							<div className="description">
								<strong>Skills.</strong>
								<p>React, HTML, CSS, Javascript, jQuery</p>
							</div>
						</div>
					</div>
					<a href="https://pmineq.github.io/Dubuck/" className="btn-goto" target="_blank" rel="noreferrer">사이트 바로가기</a>
					<a href="https://goldenrod-mouse-78f.notion.site/8432b16995a546ae9cff152fd7f4c93c#16dc1a4157174bb08010652f14a0aa6f" className="btn-goto" target="_blank" rel="noreferrer">
					<svg style={{width: '16px', height: '16px', marginRight: '5px', verticalAlign: 'top'}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
						<path d="M 15.46875 1.5 L 2.9804688 2 A 0.50038132 0.50038132 0 0 0 2.9511719 2.0019531 A 1.0001 1.0001 0 0 0 2.9296875 2.0039062 A 1.0001 1.0001 0 0 0 2 3 L 2 16.894531 C 2 17.487 2.1760213 18.066018 2.5039062 18.558594 L 5.1679688 22.554688 A 1.0001 1.0001 0 0 0 6.0625 22.998047 L 22.0625 21.998047 A 1.0001 1.0001 0 0 0 23 21 L 23 5.5 A 1.0001 1.0001 0 0 0 22.736328 4.8242188 A 0.50037856 0.50037856 0 0 0 22.587891 4.6933594 A 0.50037856 0.50037856 0 0 0 22.585938 4.6914062 A 1.0001 1.0001 0 0 0 22.398438 4.5839844 L 18.296875 2.2441406 L 18.330078 2.265625 C 17.492273 1.6962298 16.485312 1.4260957 15.474609 1.5 L 15.46875 1.5 z M 15.525391 2.4980469 A 0.50005 0.50005 0 0 0 15.542969 2.4980469 C 16.330286 2.4394359 17.115017 2.6483002 17.767578 3.0917969 A 0.50005 0.50005 0 0 0 17.800781 3.1132812 L 20.324219 4.5527344 L 6.8554688 4.9882812 L 4.46875 2.9414062 L 15.525391 2.4980469 z M 21 6.5332031 L 21 20.060547 L 7 20.935547 L 7 6.984375 L 21 6.5332031 z M 19.441406 8.5019531 C 18.427406 8.5619531 17.407625 8.6115 16.390625 8.6875 C 16.056625 8.7125 15.808578 9.0013594 15.767578 9.3183594 C 15.748578 9.4663594 15.789031 9.5426875 15.957031 9.5546875 C 16.265031 9.5776875 16.570625 9.6212031 16.890625 9.6582031 L 16.890625 15.527344 C 16.796625 15.392344 16.745266 15.321047 16.697266 15.248047 C 15.387266 13.269047 14.071438 11.293641 12.773438 9.3066406 C 12.577437 9.0066406 12.393953 8.86225 12.001953 8.90625 C 11.084953 9.00725 10.160234 9.0373281 9.2402344 9.1113281 C 8.7302344 9.1523281 8.4274531 9.5989844 8.5644531 10.083984 C 8.9094531 10.113984 9.2572813 10.144781 9.6132812 10.175781 L 9.6132812 18.607422 C 9.3792813 18.673422 9.1461563 18.747688 8.9101562 18.804688 C 8.6701563 18.862688 8.5577187 19.024094 8.5117188 19.246094 C 8.4747187 19.424094 8.5183281 19.514047 8.7363281 19.498047 C 9.4853281 19.445047 10.238281 19.412188 10.988281 19.367188 C 11.298281 19.349188 11.609063 19.342969 11.914062 19.292969 C 12.330062 19.223969 12.556563 18.970453 12.601562 18.564453 C 12.231563 18.482453 11.859375 18.392312 11.484375 18.320312 C 11.317375 18.288312 11.260719 18.219875 11.261719 18.046875 C 11.267719 16.090875 11.266578 14.133734 11.267578 12.177734 C 11.267578 12.113734 11.280969 12.048406 11.292969 11.941406 C 11.350969 12.018406 11.374484 12.049984 11.396484 12.083984 C 12.408484 13.654984 13.417547 15.229875 14.435547 16.796875 C 14.873547 17.470875 15.322203 18.137875 15.783203 18.796875 C 16.117203 19.274875 16.607063 19.426547 17.164062 19.310547 C 17.512062 19.237547 17.8465 19.098234 18.1875 18.990234 C 18.3775 18.930234 18.432641 18.807422 18.431641 18.607422 C 18.424641 15.733422 18.427734 12.860328 18.427734 9.9863281 C 18.427734 9.4513281 18.426031 9.4517969 18.957031 9.3417969 C 19.445031 9.2407969 19.588406 9.0019531 19.441406 8.5019531 z"></path>
					</svg>
						노션 바로가기
					</a>
				</section>

				<hr/>

				<section className="area-one">
					<img src={Dubuck01} alt="Dubuck 이미지"/>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<strong ref={textRef} className="sub-title">Web Publishing 진행.</strong>
					<p>소스코드 설명은 상단 노션 바로가기 버튼을 통해 확인하실 수 있습니다.</p>
				</section>

			</div>
			
		</Layout>
	);
};



export default Dubuck;