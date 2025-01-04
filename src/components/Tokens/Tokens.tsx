import clsx from 'clsx';
import { partition } from 'lodash';
import Image from 'next/image';
import { FC } from 'react';

import { Button } from '@/ui/Button';
import { Typography } from '@/ui/Typography';

import { TokenList } from './constants';
import styles from './styles.module.scss';

type TokensProps = {
  className?: string;
};

export const Tokens: FC<TokensProps> = ({ className }) => {
  const [commingSoon, avaliable] = partition(TokenList, 'isCommingSoon');

  return (
    <div className={clsx(className, styles.container)}>
      <ul className={styles.list}>
        {avaliable.map(({ name, image, link }) => (
          <li key={name} className={styles.item}>
            <Button href={link} className={styles.button}>
              <Typography>{name}</Typography>
              <Image src={image} alt={name} width={30} height={30} />
            </Button>
          </li>
        ))}
      </ul>

      <Typography className={styles.text}>COMING SOON</Typography>

      <ul className={styles.list}>
        {commingSoon.map(({ name, image, link }) => (
          <li key={name} className={styles.item}>
            <Button href={link} className={styles.button}>
              <Typography>{name}</Typography>
              <Image src={image} alt={name} width={30} height={30} />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
