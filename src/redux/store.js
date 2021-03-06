// redux最核心的管理对象
// 向外暴露store

import  {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'
export default  createStore(reducer,applyMiddleware(reducer))