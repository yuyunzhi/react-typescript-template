/**
 * reducer 函数，就是当 dispatch 函数触发了之后，会自动调用 reducer 这个函数
 * 这个其实跟 Vuex 的原理很像
 */
const reducer = (state: ICount.State, action: ICount.Action) => {
  switch (action.type) {
    case 'INCREMENT': // 加
      return { count: state.count + action.payload.num }
    case 'DECREMENT': // 减
      return { count: state.count - action.payload.num }
    default:
      return state
  }
}

export default reducer
