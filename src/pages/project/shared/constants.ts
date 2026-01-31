export interface ProjectNavItem {
  id: string;
  name: string;
  path: string;
}

export const PROJECT_ORDER: ProjectNavItem[] = [
  { id: 'bithumb', name: 'Bithumb', path: '/project/bithumb' },
  { id: 'ked', name: '한국평가데이터', path: '/project/ked' },
  { id: 'hyundai', name: '현대Shop', path: '/project/hyundai' },
  { id: 'kplus', name: 'YG KPLUS', path: '/project/kplus' },
  { id: 'lsgpis', name: 'LS GPIS', path: '/project/lsgpis' },
  { id: 'portfoliov2', name: 'Portfolio ver.02', path: '/project/portfoliov2' },
  { id: 'dubuck', name: '두벅 영워드', path: '/project/dubuck' },
  { id: 'editodo', name: 'Editodo', path: '/project/editodo' },
  { id: 'admin', name: 'Admin 디자인 시스템', path: '/project/admin' },
  { id: 'callct', name: '직장 내 괴롭힘 상담센터', path: '/project/callct' },
  { id: 'lms', name: '한국공인노무사회 이러닝센터', path: '/project/lms' },
  { id: 'lslpl', name: 'LS LPL Admin', path: '/project/lslpl' },
];

export const getAdjacentProjects = (currentId: string) => {
  const currentIndex = PROJECT_ORDER.findIndex((p) => p.id === currentId);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  const prev = currentIndex > 0 ? PROJECT_ORDER[currentIndex - 1] : null;
  const next = currentIndex < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[currentIndex + 1] : null;

  return { prev, next };
};
