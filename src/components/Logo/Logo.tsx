import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { Typography } from '@/ui/Typography';

import styles from './styles.module.scss';
import { LogoProps, Size } from './types';

export const Logo: FC<LogoProps> = ({ className, size = Size.small }) => (
  <div className={clsx(className, styles.container, styles[size])}>
    <Image
      width={47}
      height={47}
      className={styles.image}
      src="/images/logo.svg"
      alt=""
    />
    <Typography className={styles.text}>$kekius</Typography>
  </div>
);
