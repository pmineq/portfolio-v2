import { ReactNode } from 'react';

export interface ProjectInfo {
  title: string;
  subtitle: string;
  category: string;
  type: string;
  date: string;
  skills: string;
  description: string;
  bgColor?: string;
  link?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectContent {
  children: ReactNode;
}
