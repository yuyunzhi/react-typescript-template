/**
 * 这里使用 useReducer + context 的组合来搭建状态管理
 * 主要是针对于需要组件嵌套传值的场景
 * 下面的 demo 是一个计数器
 */

import React, {
  createContext,
  useReducer,
  useContext,
  ComponentType
} from 'react'
import reducer from './reducer'

// 导出初始状态
export const initialState = {
  count: 0
}

// 创建 context
const CountCtx = createContext(null)

// 创建并导出对应的 Provider
export const Provider: ComponentType = (props) => {
  // 这里规定就是这么传参数和使用的，具体可以看 react hooks 相关文档
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CountCtx.Provider value={{ state, dispatch }}>
      {props.children}
    </CountCtx.Provider>
  )
}

// 导出 context 中的 value，可通过该函数获取到 state 和 dispatch
export const useCountStore = () => useContext(CountCtx)
