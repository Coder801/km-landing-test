import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  href?: string;
  onClick?: () => void;
};
