import clsx from 'clsx';
import { FC } from 'react';

import styles from './styles.module.scss';
import { ContainerProps } from './types';

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={clsx(className, styles.container)}>{children}</div>
);
