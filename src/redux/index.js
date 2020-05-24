// 创建store 实例，并把 reducer 挂在到store实例上

import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(reducer);
// 讲创建好的实例暴露出去
export default store