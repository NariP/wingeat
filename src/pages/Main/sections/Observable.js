import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

const Observable = ({ setPage }) => {
  const observableTrigger = useRef(null);
  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([{ isIntersecting }]) => {
          isIntersecting && setPage(page => page + 1);
        },
        { threshold: 1.0 },
      ),
    [setPage],
  );

  useEffect(() => {
    observer.observe(observableTrigger.current);
    return () => {
      observer.disconnect();
    };
  }, [observer]);

  return <div ref={observableTrigger} />;
};
Observable.prototype = {
  setPage: PropTypes.func, // () => void
};
export default Observable;
