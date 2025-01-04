import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { Twits } from '@/components/Twits';
import { Container } from '@/ui/Container';
import { Typography } from '@/ui/Typography';

import logo from './assets/image/logo.svg';
import styles from './styles.module.scss';

type AboutProps = {
  className?: string;
};

export const About: FC<AboutProps> = ({ className }) => (
  <section className={clsx(className, styles.section)}>
    <Container className={styles.container}>
      <div className={styles.logo}>
        <Image
          src={logo}
          className={styles.image}
          width={568}
          height={433}
          alt="Company Logo"
        />
      </div>
      <div className={styles.text}>
        <Typography variant="h2" className={styles.title}>
          About:
        </Typography>
        <Typography variant="h4" className={styles.subtitle}>
          Are you intentioned or not?!
        </Typography>
      </div>
    </Container>
    <Twits className={styles.twits} />
  </section>
);
