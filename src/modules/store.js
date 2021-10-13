import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { goodsSlice } from './slices/Goods';
import rootSaga from './sagas/rootSaga';

const getStore = () => {
  const devMode = process.env.NODE_ENV === 'development';
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: { goods: goodsSlice.reducer },
    middleware: [sagaMiddleware],
    devTools: devMode,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
export default getStore;
