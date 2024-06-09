import React, { useEffect, useRef } from "react";
import $ from 'jquery';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from '../../components/Layout';
import '../../assets/scss/portfolio.scss';
import Topimg from '../../assets/images/project/portfolio.png';
import PortfolioV201 from '../../assets/images/project/portfoliov2_sub01.webm';
import PortfolioV202 from '../../assets/images/project/portfoliov2_sub02.png';
import PortfolioV203 from '../../assets/images/project/portfoliov2_sub03.png';
import PortfolioV204 from '../../assets/images/project/portfoliov2_sub04.png';
import PortfolioV205 from '../../assets/images/project/portfoliov2_sub05.png';
import PortfolioV206 from '../../assets/images/project/portfoliov2_sub06.png';
import PortfolioV207 from '../../assets/images/project/portfoliov2_sub07.webm';
import PortfolioV208 from '../../assets/images/project/portfoliov2_sub08.png';
import PortfolioV209 from '../../assets/images/project/portfoliov2_sub09.png';
import PortfolioV213 from '../../assets/images/project/portfoliov2_sub10.png';

import PortfolioV210 from '../../assets/images/project/portfoliov2_cp01.png';
import PortfolioV211 from '../../assets/images/project/portfoliov2_cp02.png';
import PortfolioV212 from '../../assets/images/project/portfoliov2_cp03.png';



const PortfolioV2 = () => {

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
			<div id="project" ref={projectRef} className='project-wrap portfoliov2'>

				<section ref={topRef} className='project-top'>
					<h2>Portfolio ver.02</h2>
					<div className='project-topimg'>
						<img src={Topimg} alt="상단 이미지"/>
					</div>
				</section>

				<section className="area-one clr" data-bgcolor="#ffffff">
					<div className="area-half">
						<div className="left">
							<strong className="title">2024년 포트폴리오 작업</strong>
							<div className="dl-info">
								<dl>
									<dt>Category.</dt>
									<dd>Web/Mobile Portfolio</dd>
								</dl>
								<dl>
									<dt>Type.</dt>
									<dd>반응형</dd>
								</dl>
								<dl>
									<dt>Date.</dt>
									<dd>2024.04 ~ 2024.06</dd>
								</dl>
							</div>
						</div>
						<div className="right">
							<div className="description">
								<strong>Description.</strong>
								<p>
									자신을 나타내고자, 좋아하니까 더 잘하는 포트폴리오를 만들고 싶었습니다.<br/>
									정보만 나열한 포트폴리오가 아닌 남들이 봤을 때에도 재밌고 즐길 수 있는 컨텐츠를 만들고자 했습니다.<br/>
									평소에 재밌을 것 같아서 관심있게 보던 Three.js를 이번 포트폴리오에 적용하고,
									반복 학습하고 기능들을 추가하며 인터랙션 UI개발을 성공적으로 작업하였습니다.<br/>
									무료 소스를 응용하고, 강의를 보며 블렌더 학습부터 시작했습니다.<br/>
									정보 전달을 하면서 보는 사용자로부터 지루하지 않게끔 창의적으로 아이디어를 생각하여 컨셉을 잡았습니다.
								</p>
							</div>
							<div className="description">
								<strong>Skills.</strong>
								<p>React, HTML, CSS, Javascript, Three.js, jQuery, Figma, Blender, PhotoShop, Illustrator, Github</p>
							</div>
						</div>
					</div>
					<a href="https://pmineq.github.io/portfolio-v2/" className="btn-goto" target="_blank" rel="noreferrer">사이트 바로가기</a>
				</section>

				<hr/>

				<section className="area-one">
					<video autoPlay playsInline loop muted src={PortfolioV201} />
				</section>

				<section className="area-one clr" data-bgcolor="#e5edef">
					<strong className="sub-title">기획, 블렌더, 디자인,<br/>UI Front 개발 진행.</strong>
					<div className="area-half">
						<div className="left description">
							<div className="dl-info">
								<dl>
									<dt>공통</dt>
									<dd>
										React 기반에서 Three.js, 애니메이션 라이브러리 gsap 등을 이용하여 인터랙티브한 UI 개발을 작업하였습니다.<br/>
										공통 컴포넌트로 Header, Menu, Footer, Layout, Loading 등을 작업하고 필요한 화면에서만 렌더링 하는 등
										최대한 효율적이고 깔끔한 코드로 작업하기 위해서 React 문서를 많이 찾아보며 학습하면서 진행하였습니다.  
									</dd>
								</dl>
								<dl>
									<dt>디자인 컨셉</dt>
									<dd>
										홈, 연락하기 페이지는 정보 전달력을 위해 깔끔한 컨셉으로 진행하였으며,<br/>
										메인, 프로젝트 페이지는 인터랙션 개발을 위주로 진행하였습니다.
									</dd>
								</dl>
							</div>
							<hr/>
							<img src={PortfolioV202} alt="Portfolio 이미지"/>
							<img src={PortfolioV203} alt="Portfolio 이미지"/>
							<div className="description">
								<strong>홈(인트로) 페이지</strong>
							</div>
							<div className="dl-info">
								<dl>
									<dt>컨셉</dt>
									<dd>
										나를 잘 나타낼 수 있는 첫 진입 화면은 깔끔하고 전달력 있게 구성하였습니다.<br/>
										이전에는 Three.js을 활용한 메인 페이지가 첫 페이지 였는데, 전달력이 부족한 것 같아서
										간결한 문장과 함께 Skills 나열을 통해 직관적으로 보여줄 수 있게끔 수정하였습니다.<br/>
										또한, 프로젝트를 바로 보고 싶은 사람은 버튼을 통해 바로 이동할 수 있게 구성하였습니다.
									</dd>
								</dl>
								<dl>
									<dt>메뉴</dt>
									<dd>
										페이지 전체 홈/메인/프로젝트/연락하기 페이지로 이동할 수 있는 공통 메뉴 컴포넌트를 만들었습니다.<br/>
										버튼이나 이어서 이동할 수 있는 페이지가 있지만 언제 어디서든 페이지를 변경해서 보고 싶을 수 있기 때문에
										사용자 편의성을 고려하여 추가 작업하였습니다.
									</dd>
								</dl>
							</div>
							<hr/>
							<img src={PortfolioV209} alt="Portfolio 이미지"/>
							<div className="description">
								<strong>연락하기 페이지</strong>
							</div>
							<div className="dl-info">
								<dl>
									<dt>컨셉</dt>
									<dd>
										첫 진입화면과 같이 정보 전달력을 위해 깔끔한 컨셉으로 작업하였습니다.
									</dd>
								</dl>
								<dl>
									<dt>이메일</dt>
									<dd>
										무료 이용 가능한 Email.js 자바스크립트 API를 이용하여 개발하였습니다.<br/>
										보완할 점이나 하고 싶은 말 모두 적어주세요! 빠른 시일 내 답장 드리겠습니다. 😊
									</dd>
								</dl>
							</div>
						</div>
						<div className="right">
							<img src={PortfolioV204} alt="Portfolio 이미지"/>
							<img src={PortfolioV205} alt="Portfolio 이미지"/>
							<img src={PortfolioV206} alt="Portfolio 이미지"/>
							<div className="description">
								<strong>메인 페이지</strong>
							</div>
							<div className="dl-info">
								<dl>
									<dt>컨셉</dt>
									<dd>
										메인 화면은 Three.js를 이용한 컨텐츠를 주력으로 하여 스킬 및 정보 등을 
										사용자에게 재미있게 정보를 전달할 수 있게끔 컨셉을 잡아 진행하였습니다.<br/>
										첫 진입시 작동 방법을 알려주는 가이드 텍스트를 포스트잇 형태로 css만으로 작업했으며,
										인지하지 못하는 경우를 위해 백그라운드를 누를 시 좌우로 움직이는 모션을 추가하였습니다.<br/>
										전체적으로 귀여운 컨셉을 잡아 바닥 이미지는 손으로 그린듯한 낙서 컨셉으로 작업하였습니다.
									</dd>
								</dl>
								<dl>
									<dt>캐릭터 (무료소스 -&gt; 활용)</dt>
									<dd>
										<div className="area-half">
											<div className="left">
												<img src={PortfolioV210} alt="Portfolio 이미지"/>
											</div>
											<div className="right">
												<img src={PortfolioV211} alt="Portfolio 이미지"/>
											</div>
										</div>
										Three.js의 학습이 목표였기에 블렌더도 약간의 학습을 통해 간단한 부분은 변형할 수 있는 정도로 공부하였습니다.<br/>
										3D 모델 데이터 무료 사이트인 <a href="https://sketchfab.com/" target="_blank" rel="noreferrer"><i>Sketchfab</i></a>을 통해 다운 받아서 활용하였습니다.
									</dd>
								</dl>
								<dl>
									<dt>우주선</dt>
									<dd>
										<img src={PortfolioV212} alt="Portfolio 이미지"/>
										마찬가지로 해당 사이트에서 받아서 색상 변경 및 portfolio 글자를 붙여 활용하였습니다.
										캐릭터를 끌고 이동하면서 영역에 도착 시 gsap 애니메이션 라이브러리를 이용하여 y축 값을 조절,
										로켓이 발사하는 듯한 모션을 적용하였습니다.
									</dd>
								</dl>
								<dl>
									<dt>물리엔진 적용</dt>
									<dd>
										더 나아가 물리엔진을 적용하고자 검색 및 학습 후, 원형에 축구공 텍스처 이미지를 넣고
										재질과 중력 설정을 통해 캐릭터와 축구공에 물리엔진을 적용하였습니다.
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</section>
				
				<section className="area-one clr" data-bgcolor="#fff">
					<strong className="sub-title">재밌으니까 좋아하고, 좋아하니까 잘하는 사람.<br/>끝까지 열정적으로 도전하는 사람.</strong>
					<div className="area-half">
						<div className="left">
							<video autoPlay playsInline loop muted src={PortfolioV207} />
							<div className="description">
								<strong>프로젝트 페이지 초기 로딩화면 및 Three.js와 gsap를 활용한 애니메이션</strong>
							</div>
							<div className="dl-info">
								<dl>
									<dt>컨셉</dt>
									<dd>
										메인 페이지에서 우주선을 타고 우주로 온 컨셉으로 잡았습니다.<br/>
										창의적인 아이디어와 함께 개발 능력 뿐만이 아니라 디자인까지 신경 쓸 줄 아는 UI개발자의 역량을 보여드리고 싶었습니다.
										그래서 스토리텔링을 녹여 프로젝트 페이지는 우주 컨셉으로 진행하였고, 피드백을 받아 프로젝트는 행성 모양으로 디자인 하여 CSS로 작업하였습니다.<br/>
									</dd>
								</dl>
								<dl>
									<dt>첫 화면(인트로)</dt>
									<dd>
										첫 화면은 우주선을 타고 와서 신난 느낌의 액션을 재생하고, 꾸벅 인사하는 모션을 추가한 다음 게임과 같은 UI를 구성하였습니다.<br/>
										어릴 적 했던 게임처럼 말풍선을 누를 때마다 다음 대화가 흘러갈 수 있도록 깜빡이는 ▼를 추가하여 클릭을 유도했습니다.<br/>
										인사가 끝나면 아래 컨텐츠가 있다는 것을 상기 시키기 위해 멘트와 함께 위로 올라오는 Scroll Down 글자를 추가하였습니다.
									</dd>
								</dl>
								<dl>
									<dt>주요 행성</dt>
									<dd>
										주요 행성은 이전에 작업했던 프로젝트 중 주요 프로젝트를 나타내는 영역 입니다.<br/>
										Scroll과 함께 line path를 따라가는 직접 그린 귀여운 별 이미지를 추가하였습니다.<br/>
										gsap의 ScrollTrigger를 이용하였으며 부드럽게 따라오는 pathEase 함수로 ease를 설정하였습니다.<br/>
										프로젝트 행성은 돌아가는 keyframe 애니메이션과 box-shadow 그림자를 추가하여 행성과 같은 입체를 표현할 수 있게 CSS로 작업하였습니다.<br/>
										프로젝트별 로고 이미지와 포인트 컬러를 다르게 두어 같은 디자인 내에서도 행성별 포인트를 달리 두었습니다.<br/>
										클릭 시 나오는 디테일 페이지에서는 작업했던 영역과 기여한 부분을 간결하게 작성 했습니다.
									</dd>
								</dl>
								<dl>
									<dt>사이 행성</dt>
									<dd>
										주요 프로젝트가 아닌 그 외 업무, 또는 스터디 프로젝트와 자기계발용 프로젝트를 추가하기 위해 react-slick을 이용하여 작업한 영역입니다.<br/>
										뜻이 궁금하거나 인지가 안 될 경우를 위해 타이틀 옆에 툴팁형 가이드를 추가하였습니다.<br/>
										centerMode로 가운데에 있는 행성 정보만 나타내고 그 외 행성은 opacity를 조절하고 이름만 노출하게끔 작업하였습니다.
										디테일 페이지를 보지 않아도 사이트의 Type과 어떤 업무를 맡았는지 간결하게 Duty 영역을 추가하였습니다.
									</dd>
								</dl>
							</div>
						</div>
						<div className="right">
							<img src={PortfolioV208} alt="Portfolio 이미지"/>
							<div className="description">
								<strong>프로젝트 페이지 전체 스크린샷</strong>
							</div>
						</div>
					</div>
				</section>

				<section className="area-one pf-bghalf">
					<img src={PortfolioV213} alt="Portfolio 이미지"/>
				</section>
			</div>
			
		</Layout>
	);
};



export default PortfolioV2;