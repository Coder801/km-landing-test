import clsx from 'clsx';
import { FC } from 'react';

import styles from './styles.module.scss';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  children,
  href,
  className,
  onClick,
  size = 'medium',
}) =>
  href ? (
    <a
      href={href}
      className={clsx(className, styles.container, styles[size])}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <button
      className={clsx(className, styles.container, styles[size])}
      onClick={onClick}
    >
      {children}
    </button>
  );
