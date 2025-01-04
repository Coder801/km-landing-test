import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { RunningLine } from '@/components/RunningLine';
import { Socials } from '@/components/Socials';
import { Tokens } from '@/components/Tokens';
import { Container } from '@/ui/Container';
import { Typography } from '@/ui/Typography';

import styles from './styles.module.scss';

type HeroProps = {
  className?: string;
};

export const Hero: FC<HeroProps> = ({ className }) => (
  <section className={clsx(className, styles.section)}>
    <Container className={styles.container}>
      <div className={styles.content}>
        <Typography className={styles.title} variant="h1">
          $kekius
        </Typography>
        <Typography className={styles.subtitle} variant="h2">
          Kekius Maximus Who controls the memes, controls the Universe
        </Typography>
        <Socials className={styles.social} />
      </div>
      <div className={styles.logo}>
        <Image
          width={475}
          height={475}
          className={styles.image}
          src="/images/logo.svg"
          alt=""
        />
      </div>
      <div className={styles.tokens}>
        <Tokens />
      </div>
    </Container>
    <RunningLine className={styles.runningLine} />
  </section>
);
