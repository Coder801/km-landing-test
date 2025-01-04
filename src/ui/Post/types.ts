import { ReactNode } from 'react';

export type PostProps = {
  className?: string;
  avatar: string;
  name: string;
  account: string;
  children: ReactNode;
};
