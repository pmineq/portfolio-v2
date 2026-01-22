import type { SubProject, SlickSettings } from './types';

export const SUB_PROJECTS: SubProject[] = [
  {
    id: 'sub01',
    url: '/project/portfoliov2',
    name: 'Portfolio ver.02',
    type: '반응형',
    duty: '디자인/퍼블리싱/프론트개발',
  },
  {
    id: 'sub02',
    url: '/project/dubuck',
    name: '두벅 영워드',
    type: '반응형',
    duty: '퍼블리싱(React)',
  },
  {
    id: 'sub03',
    url: '/project/admin',
    name: 'Admin 디자인 시스템',
    type: '반응형',
    duty: '기획/디자인/퍼블리싱',
  },
  {
    id: 'sub04',
    url: '/project/callct',
    name: '직장 내 괴롭힘 상담센터',
    type: '적응형',
    duty: '디자인/퍼블리싱',
  },
  {
    id: 'sub05',
    url: '/project/lms',
    name: '한국공인노무사회 이러닝센터',
    type: '적응형',
    duty: '퍼블리싱',
  },
  {
    id: 'sub06',
    url: '/project/lslpl',
    name: 'LS LPL Admin',
    type: 'PC',
    duty: '퍼블리싱',
  },
  {
    id: 'sub07',
    url: '/project/editodo',
    name: 'Editodo',
    type: 'Mobile',
    duty: '기획/디자인',
  },
];

export const SLIDER_SETTINGS: SlickSettings = {
  centerMode: true,
  centerPadding: '150px',
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  draggable: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerPadding: '0',
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: '150px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        centerPadding: '100px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
};

export const MESSAGES = [
  '웹 UI개발자 박민혜 입니다.',
  '포트폴리오를 보러 와주셔서 감사합니다!',
  '스크롤 하시면 프로젝트를 확인할 수 있습니다!',
] as const;
