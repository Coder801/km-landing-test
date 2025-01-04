import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { Post } from '@/ui/Post';
import { Typography } from '@/ui/Typography';

import { twits } from './constants';
import styles from './styles.module.scss';

type TwitsProps = {
  className?: string;
};

export const Twits: FC<TwitsProps> = ({ className }) => (
  <div className={clsx(className, styles.container)}>
    {twits.map(({ id, name, avatar, image, account, comment }) => (
      <Post key={id} name={name} account={account} avatar={avatar}>
        <Typography className={styles.comment}>{comment}</Typography>
        <Image
          className={styles.image}
          src={image}
          width={100}
          height={100}
          alt={name}
        />
      </Post>
    ))}
  </div>
);
