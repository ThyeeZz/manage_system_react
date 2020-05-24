import { combineReducers} from 'redux'

// 首先创建一个 reducer

// reducer 又两个参数，1：state的默认值；2、action
const changeLanguageReducer = (state={lang:'cn'},action) => {
  // 然后通过判断 action的 type，来决定如何处理state
  switch (action.type){
    // 获取到action的 type 之后，返回一个改变后的state的状态，
    // 需要使用 Object.assign 来操作 state，不可直接改变
    case 'useCn':
      
      return {...state,lang: action.params};
    case 'useEn':
      return {...state,lang: action.params};
    // 一定要写上 默认状态以免匹配不到 type 报错
    default:
      return state
  }
}

const reducer = combineReducers({
  changeLanguageReducer
})

export default reducer