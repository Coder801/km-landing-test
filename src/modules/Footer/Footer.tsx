import clsx from 'clsx';
import { FC } from 'react';

import { Typography } from '@/ui/Typography';

import styles from './styles.module.scss';

type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => (
  <footer className={clsx(className, styles.container)}>
    <Typography className={styles.text}>
      © 2024 by Pepe. All rights reserved!
    </Typography>
  </footer>
);
