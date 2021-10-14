import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

Observable.prototype = {
  setPage: PropTypes.func, // () => void
};
function Observable({ setPage }) {
  const observableTrigger = useRef(null);
  const observer = useMemo(
    () =>
      new IntersectionObserver(([{ isIntersecting }]) => {
        isIntersecting && setPage(page => (page >= 6 ? page : page + 1));
        // isIntersecting && console.log('ddd');
      }),
    [setPage],
  );

  useEffect(() => {
    observer.observe(observableTrigger.current);
    return () => {
      observer.disconnect();
    };
  }, [observer]);

  return <div ref={observableTrigger} />;
}

export default Observable;
