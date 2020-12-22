/**
 * 为 reducer.ts 以及 index.tsx 定义的类型文件
 * 这里定义 state 接口以及 action 的类型
 * 这里可以使用命名空间来避免冲突，（因为之后这个 Store 可能会变得越来越大）
 */

export as namespace ICount

export interface State {
  count: number
}

type Action =
  | {
      type: 'INCREMENT'
      payload: {
        num: number
      }
    }
  | {
      type: 'DECREMENT'
      payload: {
        num: number
      }
    }
