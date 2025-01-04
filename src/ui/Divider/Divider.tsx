import clsx from 'clsx';
import { FC } from 'react';

import styles from './styles.module.scss';
import { DividerProps } from './types';

export const Divider: FC<DividerProps> = ({ className }) => (
  <hr className={clsx(className, styles.container)} />
);
