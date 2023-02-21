// 组件创建
// 函数组件：创建一个包含 HTML UI 结构的函数，函数采用大写开头以标识组件
// 类组件：创建一个继承自 React.Component 且重写 render 函数的类，render 函数返回值为 HTML 模板
// 组件渲染：采用标签形式直接书写

// 导入 React 核心库
import React from 'react'
function FunComponent() {
  return <div>函数组件</div>
}
class ClassComponent extends React.Component {
  render() {
    return <div>类组件</div>
  }
}

function App() {
  return (
    <div>
      app
      <FunComponent></FunComponent>
      <ClassComponent></ClassComponent>
    </div>
  )
}
export default App
