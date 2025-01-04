import clsx from 'clsx';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import { FC } from 'react';

import { SocialList, socials } from './constants';
import styles from './styles.module.scss';

type SocialsProps = {
  className?: string;
  list?: Array<keyof typeof SocialList>;
};

export const Socials: FC<SocialsProps> = ({ className, list = [] }) => {
  const activeList = isEmpty(list)
    ? socials
    : socials.filter(({ name }) => list.includes(name));

  return (
    <ul className={clsx(className, styles.container)}>
      {activeList.map(({ name, image, link }) => (
        <li key={name} className={styles.item}>
          <a href={link} target="_blank" rel="noreferrer">
            <Image
              src={image}
              className={styles.image}
              alt={name}
              width={64}
              height={64}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
