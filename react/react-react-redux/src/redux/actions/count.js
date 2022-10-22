import { INCREMENT, DECREMENT } from "../constant";

// 同步action
// export const increment = data => ({ type: INCREMENT, data: data })
// export const decrement = data => ({ type: DECREMENT, data: data })

// 对象的简写形式
export const increment = data => ({ type: INCREMENT, data })
export const decrement = data => ({ type: DECREMENT, data })

// 异步action
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    window.setTimeout(() => dispatch(increment(data)), time)
  }
}
