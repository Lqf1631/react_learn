// 父子组件通信
// 在父组件中渲染子组件时，为其绑定自定义属性值
// 在子组件中访问 props 对象，可以接受自定义属性传递来的值
// props 可以采用结构形式获取父组件传递的值
// 传值类型：函数(用于修改父组件的值) jsx(模板)

import React from 'react'

// 在函数组件的 props 参数中获取父组件传值
// 在接受参数时对 props 进行结构
function SonF({ list, obj, changeList }) {
  return (
    <>
      <div>函数子组件</div>
      {list.map((item) => (
        <p key={item}>{item}</p>
      ))}
      {obj.name} {obj.age}
      <button onClick={changeList}>change</button>
    </>
  )
}

// 在类组件的 this.props 属性上获取父组件传值
class SonC extends React.Component {
  render() {
    return (
      <>
        <div>类子组件</div>
        {/* props 接受传递来的 jsx 并使用 */}
        {this.props.jsx}
      </>
    )
  }
}

function App() {
  // 传递数组
  const list = [1, 2, 3]
  // 传递对象
  const obj = {
    name: 'Tom',
    age: 20,
  }
  // 传递函数
  const changeList = () => {
    list.push('a')
    console.log(list)
  }
  return (
    <>
      <SonF obj={obj} list={list} changeList={changeList}></SonF>
      {/* 传递 jsx，即实现插槽 */}
      <SonC jsx={<span>this is slot</span>}></SonC>
    </>
  )
}
export default App
