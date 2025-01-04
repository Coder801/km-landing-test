import clsx from 'clsx';
import { FC, useState } from 'react';
import { Link } from 'react-scroll';

import { PAGES } from '@/constants';

import styles from './styles.module.scss';

type NavigationProps = {
  className?: string;
};

export const Navigation: FC<NavigationProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={clsx(className, styles.container)}>
      <button
        className={clsx(styles.button, {
          [styles.open]: isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>&nbsp;</span>
      </button>

      <ul className={clsx(styles.list, { [styles.open]: isOpen })}>
        {PAGES.map(({ id, name }) => (
          <li key={id} className={styles.item}>
            <Link
              to={id}
              spy
              smooth
              duration={300}
              activeClass={styles.active}
              className={styles.link}
              offset={-70}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
