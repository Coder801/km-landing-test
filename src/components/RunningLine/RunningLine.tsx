import clsx from 'clsx';
import { motion } from 'framer-motion';
import { cond, constant, gt, size } from 'lodash';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';

import { useResize } from '@/hooks/useResize';

import { list } from './constats';
import styles from './styles.module.scss';
import { Direction, RunningLineProps } from './types';

const variants = (direction: Direction) => ({
  animate: {
    x: [0, direction === Direction.LEFT ? '-50%' : '50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 50,
        ease: 'linear',
        delay: 1,
      },
    },
  },
});

export const RunningLine: FC<RunningLineProps> = ({
  direction = Direction.LEFT,
  count = 9,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useResize(ref as any); //eslint-disable-line
  const mirrorList = [...list, ...list];
  const totalItems = size(mirrorList);

  const [itemWidth, setItemWidth] = useState<number>(100 / count);
  const [containerWidth, setContainerWidth] = useState<number>(
    totalItems * itemWidth,
  );

  useEffect(() => {
    const currentCount = cond([
      [(val: number) => gt(val, 1260), constant(count)],
      [(val: number) => gt(val, 1024), constant(count - 2)],
      [(val: number) => gt(val, 768), constant(count - 4)],
      [(val: number) => gt(val, 480), constant(count - 6)],
      [(val: number) => gt(val, 0), constant(count - 8)],
    ])(width);

    setItemWidth(100 / currentCount);
    setContainerWidth(totalItems * itemWidth);
  }, [width, itemWidth, totalItems, count]);

  return (
    <div className={clsx(className, styles.container)} ref={ref}>
      <motion.div
        className={styles.line}
        variants={variants(direction)}
        style={{ width: `${containerWidth}vw` }}
        animate="animate"
      >
        {mirrorList.map(({ image, link }, key) => (
          <a
            href={link}
            target="_blank"
            key={key}
            style={{ width: `${itemWidth}vw` }}
            className={styles.item}
            rel="noreferrer"
          >
            <Image src={image} className={styles.image} alt="" />
          </a>
        ))}
      </motion.div>
    </div>
  );
};
