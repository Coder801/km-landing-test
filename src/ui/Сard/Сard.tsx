import clsx from 'clsx';
import { FC } from 'react';

import styles from './styles.module.scss';
import { CardProps } from './types';

export const Card: FC<CardProps> = ({ children, className }) => (
  <div className={clsx(className, styles.container)}>{children}</div>
);
