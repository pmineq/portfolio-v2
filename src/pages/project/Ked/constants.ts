export const PROJECT_INFO = {
  title: '한국평가데이터',
  subtitle: 'GIVC – 소재·부품·장비 가치사슬 분석 프로그램',
  category: 'Web Development',
  type: 'PC',
  date: '2023.02 ~ 2024.02 (1년)',
  description:
    '주력 산업인 소재·부품·장비 품목별 국내외 데이터 및 수급 분석 결과를 조회할 수 있는 Node.js 기반 웹 시스템입니다. 웹 서비스 기획부터 퍼블리싱, 프론트엔드 개발 지원까지 폭넓게 참여했습니다.',
  skills: 'Figma, HTML5, CSS3, JavaScript, jQuery, amCharts5, plotly.js',
  bgColor: '#1a5276',
};

export interface RoleTask {
  title: string;
  description: string;
}

export interface RoleSection {
  id: string;
  title: string;
  icon: string;
  tasks: RoleTask[];
}

export const ROLE_SECTIONS: RoleSection[] = [
  {
    id: 'planning',
    title: '웹 서비스 기획',
    icon: '📋',
    tasks: [
      {
        title: '시스템 리뉴얼 기획서 작성',
        description: 'Figma를 활용하여 산업 생태계 시스템 전체 웹 버전 리뉴얼 기획서를 작성했습니다.',
      },
      {
        title: '제안서 제작',
        description: '운영 및 구축 제안서 PPT를 제작하여 클라이언트 커뮤니케이션에 활용했습니다.',
      },
      {
        title: '화면 구조 정리',
        description: '사용자/운영자 관점에서 화면 구조 및 사용자 플로우를 체계적으로 정리했습니다.',
      },
    ],
  },
  {
    id: 'publishing',
    title: '웹 퍼블리싱',
    icon: '🎨',
    tasks: [
      {
        title: '공통 UI 컴포넌트 구축',
        description: '산업 생태계 신규 구축 화면의 공통 UI 및 재사용 가능한 컴포넌트를 퍼블리싱했습니다.',
      },
      {
        title: '신규 기능 대응',
        description: '고객사 요청 기반 신규 기능 및 수정 사항에 빠르게 대응했습니다.',
      },
      {
        title: '소스 구조 개선',
        description: '유지보수 용이성을 고려하여 기존 소스 구조를 체계적으로 정리하고 개선했습니다.',
      },
    ],
  },
  {
    id: 'frontend',
    title: '프론트엔드 개발 지원',
    icon: '💻',
    tasks: [
      {
        title: 'amCharts5 지도 시각화',
        description: '3D Globe / 2D Map 전환 지도를 구현하고, 지역별 상세정보 툴팁 및 등치 지역도를 개발했습니다.',
      },
      {
        title: '버블 차트 맵',
        description: '애니메이션이 적용된 버블 차트 맵을 구성하여 데이터를 직관적으로 시각화했습니다.',
      },
      {
        title: 'plotly.js 차트 개선',
        description: '차트 Zoom 기능을 추가하고, 데이터 겹침 현상을 개선하여 가독성을 향상시켰습니다.',
      },
    ],
  },
  {
    id: 'collaboration',
    title: '협업 및 관리',
    icon: '🤝',
    tasks: [
      {
        title: '외주 개발자 커뮤니케이션',
        description: '외주 개발자와의 원활한 소통을 통해 프로젝트 일정과 품질을 관리했습니다.',
      },
      {
        title: '개발 방향성 조율',
        description: '기술적 의사결정 과정에서 개발 방향성을 조율하고 최적의 솔루션을 도출했습니다.',
      },
      {
        title: '크로스펑셔널 협업',
        description: '기획·디자인·개발 간 의견을 정리하고 조율하여 프로젝트를 원활하게 진행했습니다.',
      },
    ],
  },
];

export const TECH_HIGHLIGHTS = [
  { name: 'amCharts5', usage: '지도 시각화 (3D Globe, 2D Map, 등치도)' },
  { name: 'plotly.js', usage: '데이터 차트 및 Zoom 기능' },
  { name: 'Figma', usage: '기획서 및 화면 설계' },
  { name: 'jQuery', usage: '인터랙션 및 DOM 조작' },
];

export const PASSWORD = '981201';
export const PASSWORD_HINT = '생년월일 (YYMMDD)';
