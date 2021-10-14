import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ListItem from './ListItem';
import Observable from './Observable';
import { useDispatch, useSelector } from 'react-redux';
import {
  goodsRequest,
  getGoods,
  getIsFinished,
  // getGoodsRequestState,
} from 'modules/slices/Goods';

const List = () => {
  const dispatch = useDispatch();
  const goodsInfo = useSelector(getGoods);
  // const goodsLoading = useSelector(getGoodsRequestState);
  const renderFinish = useSelector(getIsFinished);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (renderFinish) return;
    page <= 6 && dispatch(goodsRequest(page));
  }, [page, dispatch]);

  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        p={2}
      >
        {goodsInfo.map(info => {
          return (
            <Grid
              key={info.id}
              item
              xs={6}
              mobile={3}
              justifyContent="center"
              alignItems="center"
              sx={{
                display: 'flex',
              }}
            >
              <ListItem {...info} />
            </Grid>
          );
        })}
        {/*{goodsLoading && <div>로딩 중..</div>}*/}
        {page < 6 ? (
          <Observable setPage={setPage} />
        ) : (
          <div>모든 상품이 로드되었습니다.</div>
        )}
      </Grid>
    </div>
  );
};

export default List;
