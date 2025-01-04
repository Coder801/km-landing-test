import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { Container } from '@/ui/Container';
import { Typography } from '@/ui/Typography';
import { Card } from '@/ui/Сard';

import logoImage from './assets/image/logo.svg';
import styles from './styles.module.scss';

type TokenomicsProps = {
  className?: string;
};

export const Tokenomics: FC<TokenomicsProps> = ({ className }) => (
  <section className={clsx(className, styles.section)}>
    <Container className={styles.container}>
      <Typography variant="h3" className={styles.title}>
        TOKENOMICS
      </Typography>

      <div className={styles.content}>
        <Typography variant="h4" className={styles.subtitle}>
          Token supply:
          <br /> 90,970,653,913,232.00
        </Typography>
        <Card className={styles.card}>
          <Typography variant="h6">
            No Taxes, No Bullshit. It’s that simple. LP
          </Typography>
          <br />
          <Typography variant="h6">
            tokens are burnt, and contract ownership is renounced. 
          </Typography>
        </Card>
      </div>
      <div className={styles.logo}>
        <Image
          src={logoImage}
          className={styles.image}
          alt=""
          width={435}
          height={435}
        />
      </div>
    </Container>
  </section>
);
