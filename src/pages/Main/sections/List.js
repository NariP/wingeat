import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import ListItem from './ListItem';
import Observable from './Observable';
import {
  getGoods,
  getPageNumber,
  getGoodsRequestState,
} from 'modules/slices/Goods';

const List = () => {
  const goodsInfo = useSelector(getGoods);
  const listPage = useSelector(getPageNumber);
  const goodsLoading = useSelector(getGoodsRequestState);
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
        {goodsLoading && <div>로딩 중..</div>}
        {listPage < 7 ? (
          <Observable listPage={listPage} />
        ) : (
          <div>모든 상품이 로드되었습니다.</div>
        )}
      </Grid>
    </div>
  );
};

export default List;
