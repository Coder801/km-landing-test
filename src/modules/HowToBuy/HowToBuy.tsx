import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { Button } from '@/ui/Button';
import { Container } from '@/ui/Container';
import { Typography } from '@/ui/Typography';
import { Card } from '@/ui/Сard';

import { steps } from './constants';
import styles from './styles.module.scss';

type HowToBuyProps = {
  className?: string;
};

export const HowToBuy: FC<HowToBuyProps> = ({ className }) => (
  <section className={clsx(className, styles.section)}>
    <Container className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        how to buy
      </Typography>

      {steps.map(({ id, title, description, image }) => (
        <Card key={id} className={styles.card}>
          <Image
            src={image}
            className={styles.image}
            alt={title}
            width={100}
            height={100}
          />
          <div className={styles.content}>
            <Typography variant="h4" className={styles.subtitle}>
              {title}
            </Typography>
            <Typography className={styles.text}>{description}</Typography>
          </div>
        </Card>
      ))}

      <div className={styles.button}>
        <Button size="large">Buy Now</Button>
      </div>
    </Container>
  </section>
);
