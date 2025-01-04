import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import checkIcon from './assets/icons/check.svg';
import styles from './styles.module.scss';
import { PostProps } from './types';

export const Post: FC<PostProps> = ({
  children,
  className,
  name,
  avatar,
  account,
}) => (
  <div className={clsx(className, styles.container)}>
    <div className={styles.author}>
      <Image
        src={avatar}
        className={styles.avatar}
        width={50}
        height={50}
        alt={name}
      />
      <div className={styles.text}>
        <div className={styles.name}>
          {name} <Image src={checkIcon} width={23} height={23} alt="" />
        </div>
        <div className={styles.account}>{account}</div>
      </div>
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);
