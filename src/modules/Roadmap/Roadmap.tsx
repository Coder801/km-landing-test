import clsx from 'clsx';
import Image from 'next/image';
import { FC, useRef } from 'react';

import { Logo, LogoSize } from '@/components/Logo';
import { SocialList, Socials } from '@/components/Socials';
import { useResize } from '@/hooks/useResize';
import { Container } from '@/ui/Container';
import { Typography } from '@/ui/Typography';
import { Card } from '@/ui/Сard';

import styles from './styles.module.scss';

type RoadmapProps = {
  className?: string;
};

export const Roadmap: FC<RoadmapProps> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useResize(ref as any); //eslint-disable-line

  return (
    <section className={clsx(className, styles.section)} ref={ref}>
      <Container className={styles.container}>
        <Image
          width={383}
          height={388}
          className={styles.logo}
          src="/images/logo.svg"
          alt=""
        />
        <Typography variant="h3" className={styles.title}>
          ROADMAP
        </Typography>

        <Card className={styles.card}>
          <Typography variant="h6" className={styles.text}>
            Phase 1: Meme <br />
            Phase 2: Vibe and HODL <br />
            Phase 3: Meme Takeover
          </Typography>
        </Card>

        <div className={styles.socials}>
          <Socials list={[SocialList.telegram, SocialList.x]} />
          <Logo size={width < 768 ? LogoSize.small : LogoSize.large} />
        </div>

        <Typography variant="h5" className={styles.caption}>
          Follow our journey on social media
        </Typography>
      </Container>
    </section>
  );
};
