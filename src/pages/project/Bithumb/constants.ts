import type { BithumbProject } from '../types';

export const PROJECT_INFO = {
  title: '빗썸',
  subtitle: '암호화폐 거래소 UI/UX 프론트엔드 개발',
  category: 'Web Development',
  type: '적응형',
  date: '2024.07 ~ 현재',
  description:
    '국내 대표 암호화폐 거래소 빗썸에서 UI 프론트엔드 개발을 담당하고 있습니다. 다양한 서비스의 UI/UX를 개발하여 구현하고 있습니다.',
  skills: 'React, TypeScript',
  bgColor: '#ff6b00',
};

export const BITHUMB_PROJECTS: BithumbProject[] = [
  {
    id: 'ranking-system',
    name: '고객 랭킹 시스템 구축 (메이커 주문 거래 랭킹)',
    period: '2024',
    description:
      '랭킹전 시스템을 구축했습니다.',
    techStack: ['React', 'TypeScript'],
    achievements: [
      '랭킹 UI 신규 제작',
      '데이터 구조에 맞춘 화면 구성',
      '반응형 대응',
    ],
  },
  {
    id: 'welcome-mission',
    name: '웰컴 미션 개편 프로젝트',
    period: '2024',
    description:
      '신규 가입자 대상 웰컴 미션 UX를 전면 개편했습니다.',
    techStack: ['React', 'TypeScript', '인터랙션'],
    achievements: [
      '미션 참여 흐름 개선',
      '인터랙션 추가로 사용자 경험 향상',
      '신규 사용자 진입 장벽 완화',
    ],
  },
  {
    id: 'system-migration',
    name: '시스템 개편 프로젝트 (PHP → JAVA 전환)',
    period: '2024',
    description:
      '레거시 시스템을 신규 JAVA 기반 환경으로 이전하는 작업에 참여했습니다.',
    techStack: ['React', 'TypeScript', '시스템 마이그레이션'],
    achievements: [
      '신규 구조에 맞는 화면 재구성',
      '유지보수 용이하도록 코드 구조 정리',
    ],
  },
  {
    id: 'market-event',
    name: '마켓 이벤트 / 리워드 대응 프로젝트',
    period: '2024',
    description:
      'BTC 마켓 수수료 무료, 멤버십 혜택 변경 등 이벤트성 UI 다수 대응했습니다.',
    techStack: ['React', 'TypeScript', '이벤트 페이지'],
    achievements: [
      '긴급 배포 대응 UI 수정',
      '이벤트 플로우 빠른 반영',
      '운영 안정성 유지',
    ],
  },
  {
    id: 'game-landing',
    name: '게임 랜딩 활성화 프로젝트 (모의 / 실전 거래 연계)',
    period: '2024',
    description:
      '모의 거래와 실전 거래를 연결한 게임형 이벤트 랜딩 페이지를 구축해 사용자의 참여를 유도하는 프로모션 UI 플랫폼 개발.',
    techStack: ['React', 'TypeScript', '이벤트 UX', '게임형 프로모션'],
    achievements: [
      '게임 랜딩 공통 UI 템플릿 구축',
      '모의/실전 모드 전환 구조 구현',
      '반복 활용 가능한 이벤트 구조화',
      '단기간 다수 이벤트 대응을 위한 컴포넌트화',
      '이후 UX 변경 대응까지 진행'
    ],
  },
  {
    id: 'orderbook-share',
    name: '해외 거래소 오더북(호가창) 공유 프로젝트',
    period: '2024 ~ 2025',
    description:
      '해외 거래소의 실시간 호가 데이터를 연동해 국내 서비스 화면에 제공하는 오더북 공유 시스템 UI 구축.',
    techStack: ['React', 'TypeScript'],
    achievements: [
      '해외 거래소 데이터 구조에 맞춘 호가창 UI 개발',
      '레거시 코드 최신화',
      '기존 거래 화면 UX 유지하면서 신규 기능 연동',
      '기존 운영이슈 수정'
    ],
  },
  {
    id: 'push-notification',
    name: 'PUSH 알림 시스템 개선',
    period: '2024',
    description:
      '주요 알림 신규 추가 및 알림 내역 UI 개편 적용을 했습니다.',
    techStack: ['React', 'TypeScript'],
    achievements: [
      '알림 리스트 UX 개선',
      '신규 알림 타입 대응',
      '사용자 확인 흐름 최적화',
    ],
  },
  {
    id: 'bank-migration',
    name: '은행 변경 프로젝트 (농협 → 국민은행)',
    period: '2024',
    description:
      '기존 농협은행에서 국민은행으로 전환하는 과정에서 사용자 인증 및 금융 플로우 UI를 개편한 프로젝트.',
    techStack: ['React', 'TypeScript'],
    achievements: [
      '은행 변경에 따른 인증/연결 플로우 UI 수정',
      '운영 안정화를 위한 빠른 배포 대응',
      '사전 오픈/정식 오픈 대응',
      '이후 법인회원 연결 오픈'
    ],
  },
  {
    id: 'signal',
    name: '선행지표 상승/하락 종목 추천 (상승신호)',
    period: '2025',
    description:
      '선행지표 종목 추천 기능 추가',
    techStack: ['React', 'TypeScript'],
    achievements: [
      '거래 화면 내 상승신호 추가 ',
    ],
  },
  {
    id: 'coin-lending',
    name: '가상자산 대여 (코인대여) v1, v2',
    period: '2025',
    description:
      '가상자산 대여 서비스 UI 개발',
    techStack: ['React', 'TypeScript'],
    achievements: [
      '가상자산대여 v1 UI개발',
      '코인대여 v2 단기간 개발 후 성공적 오픈'
    ],
  },
  {
    id: 'sbs',
    name: 'SBS 가요대전 방청권 신청 / 투표시스템 제작',
    period: '2025.12',
    description:
      'SBS 가요대전 X 빗썸 이벤트 방청권 신청 / 투표시스템 제작',
    techStack: ['React', 'TypeScript'],
    achievements: [
      '방청권 신청과 함께 빗썸 회원가입 유도 UI 개발',
      '투표 시스템에 따른 랭킹 UI 개발',
      '단기간 내 작업하여 오픈'
    ],
  }
];

export const OPR_ISSUES = [
  '운영 중 UI 수정 및 긴급 패치 다수 처리',
  '룰렛 게임 / 혜택존 안내 UX 개선',
  '이벤트 조건 변경에 따른 화면 수정',
  '공통 컴포넌트 정리',
  '사명 변경 (8개 레포 수정)',
  '퍼블리싱 오류 수정 및 인터랙션 보완',
  '기획/디자인 협업 통한 빠른 반영',
  '운영 안정화 작업 지속 수행',
];
