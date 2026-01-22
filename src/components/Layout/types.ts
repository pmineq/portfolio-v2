import { ReactNode } from 'react';

export interface LayoutProps {
  header?: boolean;
  children: ReactNode;
  footer?: boolean;
}
