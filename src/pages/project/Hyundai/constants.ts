export const PROJECT_INFO = {
  title: '현대Shop',
  subtitle: '현대자동차 공식 온라인 쇼핑몰',
  category: 'Web/Mobile Platform, E-commerce',
  type: '반응형',
  date: '2021.12 ~ 2022.03, 이후 유지보수',
  skills: 'HTML, CSS, Javascript, jQuery, ASP, PPT',
  description: `고객사에서 요청한 기획서 및 디자인 시안을 토대로 웹 퍼블리싱을 작업하였습니다.
크로스 브라우징을 고려하였으며, 반응형으로 작업된 현대자동차 통합 온라인쇼핑몰 플랫폼 입니다.
gnb 무한 스크롤과 상단 scroll percent, 상세페이지 상품정보 고정 등 기존 쇼핑몰에서 볼 수 없었던 기능들을 Javascript로 작성하여 추가해 작업하였습니다.
메인 페이지 및 서브페이지 등 초기 개발부터 참여하여 성공적인 오픈을 끌어낸 경험이 있습니다.`,
  bgColor: '#ffffff',
} as const;

export const WORK_DETAILS = [
  {
    title: '레이아웃.',
    items: [
      '전체 반응형 진행',
      'header, gnb, contents, footer 작성하여 공통 컴포넌트 협업하는 회사에 넘기면서 성공적으로 적용시켰습니다. (충돌 방지를 위해 class, id 앞에 rd_를 붙임)',
      'PC 마크업을 유지하면서 디자인에 맞게 gnb에 Swiper.js를 사용하여 무한 스크롤링 요청을 적용하였습니다.',
      'header-bar를 추가하여 스크롤 한 위치에 따라 width가 넓어지게끔 javascript를 사용하여 작성하였습니다.',
    ],
  },
  {
    title: '공통.',
    description: `검색 - 검색, 결과 페이지 (결과 페이지는 list 페이지에 검색 영역과 hashtag 추가)
장바구니 - 장바구니, 주문, 완료 등...
마이페이지 - 주문내역, 교환/반품, 최근 본 상품, 위시리스트, 할인쿠폰, 1:1문의, 구매후기, 배송지관리 등...`,
  },
  {
    title: '서브 페이지 01.',
    description: '베스트 - tab, list로 구성하며 순위는 직관적으로 표현하였습니다.',
  },
  {
    title: '서브 페이지 02.',
    description: `스토리 - slick.js를 이용하여 최상단 배너 작업, 배너 위 텍스트와 상품리스트 퍼블리싱 진행하였습니다.
태블릿(768px)기준 이하는 모바일 이미지가 보이며 하단에 상품 리스트가 나오게끔 변경하였습니다.`,
  },
  {
    title: '서브 페이지 03.',
    description: `포인트샵 - 디자인에 맞춰 퍼블리싱 진행하였습니다.
PC와 모바일에서 노출되는 상품 갯수가 달라 css로 조정하여 모바일에선 slick.js를 추가하고 pc에선 제외하며 요청사항에 맞는 화면을 성공적으로 작업하였습니다.`,
  },
  {
    title: '이벤트 페이지 01.',
    description: '휠핑(구) - 프로젝트 페이지처럼 자동차가 내려오는 듯한 인터랙션 UI 개발과, 차량 이미지 영역에 포인터를 두어 클릭 시 상세 설명 popup이 뜨게끔 개발하였습니다.',
  },
  {
    title: '이벤트 페이지 02.',
    description: '룰렛 페이지(구) - 룰렛 플러그인인 Winwheel.js를 이용하여 룰렛이 돌아가는 인터랙티브한 UI 개발을 진행하였습니다.',
  },
] as const;
