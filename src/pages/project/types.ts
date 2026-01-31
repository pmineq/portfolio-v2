export interface SubProject {
  id: string;
  url: string;
  name: string;
  type: string;
  duty: string;
}

export interface SlickSettings {
  centerMode: boolean;
  centerPadding: string;
  dots: boolean;
  arrows: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  swipeToSlide: boolean;
  draggable: boolean;
  responsive: Array<{
    breakpoint: number;
    settings: {
      centerPadding: string;
      slidesToShow: number;
    };
  }>;
}

export interface CareerSection {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  isProtected?: boolean;
  hint?: string;
}

export interface BithumbProject {
  id: string;
  name: string;
  period: string;
  role: string;
  description: string;
  techStack: string[];
  achievements?: string[];
}
