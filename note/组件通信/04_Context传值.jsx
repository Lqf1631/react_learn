// Context 封装的通用传值方法
// react 封装 createContext 方法，调用之后解构出 Provider 和 Consumer
// 在传值的 jsx 的 html 中使用 Provider 包裹并设置 value 值进行传值
// 在被传值的 jsx 的数据使用处，使用 Consumer 包裹，内部采用回调形式使用 value 值
// 注意：使用时仅包裹数据位置，传递时需包裹整个 html

// 一个 Provider 注入可以被下层的多个 Consumer 订阅接受
// 多个 Provider 会按上下层的顺序被下层覆盖，但是需要保证上下层的传递值形式一致

// 上下层的关系为相对关系

import React, { createContext } from 'react'

const { Provider, Consumer } = createContext()

function A() {
  const obj = {
    key: 'Tom',
    value: 20,
  }
  return (
    <Provider value={obj}>
      this is a <br />
      <B></B>
    </Provider>
  )
}
function B() {
  return (
    <>
      this is b <br />
      <Consumer>
        {({ key, value }) => (
          <p>
            {value},{key}
          </p>
        )}
      </Consumer>
    </>
  )
}

class App extends React.Component {
  state = {
    value: 'App',
    key: '1',
  }
  render() {
    return (
      <Provider value={this.state}>
        <A></A>
        <br />
      </Provider>
    )
  }
}
export default App
