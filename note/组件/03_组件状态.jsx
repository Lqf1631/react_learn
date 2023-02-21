// 组件状态：在组件中定义的响应式数据，当状态改变时，页面会重新渲染
// 在类组件中使用 state 原型属性形式创建状态，使用 setState 方法重写状态
// state 属性值为对象，且仅能使用 setState 方法对状态值进行修改
// 在函数组件中，需要使用 hook 函数定义状态和监控状态的回调

import React from 'react'
class StateCompoent extends React.Component {
  // 使用继承自 React.Component 类的 state 原型属性定义状态，值为对象
  state = {
    name: 'Tom',
  }
  changeName = () => {
    // 使用继承自 React.Component 类的 setState 原型方法修改状态
    // 参数为函数，实质为将 state 对象传入 setState 函数，再进行重写
    this.setState({
      // 如果需要访问状态原值，仍需访问到原 state 对象
      name: this.state.name + '=',
    })
  }
  render() {
    return <div onClick={this.changeName}>{this.state.name}</div>
  }
}

function App() {
  return (
    <>
      <StateCompoent></StateCompoent>
    </>
  )
}
export default App
