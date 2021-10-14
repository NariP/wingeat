import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import rootReducer from './slices/rootReducer';

const getStore = () => {
  const devMode = process.env.NODE_ENV === 'development';
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: devMode,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
export default getStore;
