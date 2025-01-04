import { RefObject, useCallback, useEffect, useState } from 'react';

type Size = {
  width: number;
  height: number;
};

export const useResize = (ref: RefObject<HTMLElement>): Size => {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  const updateSize = useCallback(() => {
    if (ref.current) {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, [ref]);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, updateSize]);

  return size;
};
