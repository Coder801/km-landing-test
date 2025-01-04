import clsx from 'clsx';
import { FC } from 'react';

import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/ui/Button';
import { Container } from '@/ui/Container';

import styles from './styles.module.scss';

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => (
  <header className={clsx(className, styles.section)}>
    <Container className={styles.container}>
      <Logo className={styles.logo} />
      <Navigation className={styles.navigation} />
      <div className={styles.button}>
        <Button size="small">Buy Now</Button>
      </div>
    </Container>
  </header>
);
