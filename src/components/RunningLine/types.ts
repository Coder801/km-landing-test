enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
}

type RunningLineProps = {
  count?: number;
  direction?: Direction;
  className?: string;
};

export { Direction };
export type { RunningLineProps };
