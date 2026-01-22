export const PROJECT_INFO = {
  title: 'YG KPLUS',
  subtitle: 'YG KPLUS 홈페이지',
  category: 'Web/Mobile Platform, Homepage',
  type: '반응형',
  date: '2021.08 ~ 2022.02, 이후 유지보수',
  skills: 'HTML, CSS, Javascript, jQuery, ASP, PhotoShop, Illustrator',
  description: `리뉴얼한 YG KPLUS 반응형 홈페이지 입니다.
Photoshop으로 디자인 작업을 진행 후, 디자인 파일을 공유하여 고객사에 컨펌 받아 UI개발, 퍼블리싱까지 진행한 프로젝트 입니다.
PLANNING & PRODUCTION 메뉴의 페이지인 아코디언 레이아웃 등은 플러그인을 사용하지 않고 jQuery로 작성하였습니다.
이외의 초기 모든 페이지 디자인과 퍼블리싱 100% 작업하였습니다.`,
  bgColor: '#ffffff',
  link: 'https://ygkplus.com/',
} as const;

export const WORK_DETAILS = [
  {
    title: '공통, 메인.',
    items: [
      '전체 반응형 진행',
      'Main - Fullpage.js 사용 (현재는 디자인 변경으로 인해 없어짐)',
      '디자인을 먼저 진행하고 그에 맞춰 코드를 작성하니 더욱 재밌었습니다. 이후 유지보수를 통해 수정된 것이 많지만 메인 페이지에 slick.js를 여러 디자인으로 넣으며 많은 정보를 간략히 보여주려고 했습니다.',
      '메인 페이지의 경우, Fullpage 특성 상 한 페이지에 들어가야 되기 때문에 media query를 max-height도 잡아서 작업 진행했었습니다.',
      '기존의 홈페이지에서 더욱 깔끔하고 가독성있게 작업하였습니다.',
    ],
  },
  {
    title: '서브 페이지 01.',
    description: 'COMPANY - 기존 홈페이지 정보를 토대로 깔끔하게 디자인/퍼블리싱 진행하였습니다.',
  },
  {
    title: '서브 페이지 02.',
    description: `MANAGEMENT - 리스트 페이지, 디테일 페이지
반응형에 맞춰, 보여줘야 하는 크기가 각기 다른 slick.js가 많이 쓰였습니다. 영역을 벗어나지 않고 깔끔하게 작업하려고 신경썼었습니다.`,
  },
  {
    title: '서브 페이지 03.',
    description: `PRODUCTION - 아코디언 형태의 디자인을 작업하고 javascript, jQuery를 사용하여 직접 코딩했습니다.
누른 영역에 active 클래스를 주고 ul에 open 클래스명을 줘서 width값이 인터랙션하게 변하는 UI 개발을 진행했습니다.`,
  },
  {
    title: '서브 페이지 04.',
    description: 'ACADEMY - 수강신청, 강사소개, 모델, Q&A 리스트와 디테일 페이지 작업하였습니다.',
  },
  {
    title: '서브 페이지 05.',
    description: 'NEWS - 깔끔한 list 페이지에서 디테일 내용은 popup 형태로 나오게 작업하였습니다.',
  },
  {
    title: '서브 페이지 06.',
    description: 'NOTICE - Q&A와 같은 디자인으로, 게시판 형태의 페이지는 디자인을 동일하게 가져갔습니다.',
  },
] as const;

export const DESIGN_IMAGES = [
  { prefix: 'kplus', count: 14 },
] as const;
