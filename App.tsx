import React from 'react'
import Routes from './src/routes'
import {reducer} from './src/store/reducer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import watchCard from './src/sagas/saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchCard);

export default () => <Provider store={store}>
<Routes />
    </Provider>