import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { goodsRequest } from 'modules/slices/Goods';

const Observable = ({ listPage }) => {
  const dispatch = useDispatch();
  const observableTrigger = useRef(null);
  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([{ isIntersecting }]) => {
          isIntersecting && dispatch(goodsRequest(listPage));
        },
        { threshold: 1.0 },
      ),
    [listPage, dispatch],
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
  listPage: PropTypes.number,
};
export default Observable;
