import { useContext, useState } from 'react'

import context from './context'

// useContext 与 createContext 方法连用
// createContext 参数为需要传递的值的初始值,返回一个对象 context ,对象用于承载传递值
// context.Provider 属性为标签,为其绑定 value 值将传递值传入 context 中
// 调用 useContext 方法,参数为 context 对象,返回值为 context 对象中的传递值

// 与类组件的区别:类组件使用 context.Consumer 作为标签,包裹参数为 value 的回调函数来拦截

// context 可以抽离为一个模块创建,在整个应用的任意处导入使用

// 对于静态传递值,可以在 index.js 中的 App 标签外包裹 context.Provider 进行传递
// 或者直接在创建 context 时传入初始值

// 创建 context 实例
// 参数为 context 为设置 Provider 时,默认传递值
// const context = createContext(0)

function A() {
  // 调用 useContext 参数为 context 实例对象,返回值为在其中传递的值
  // 具有响应式特点
  const count = useContext(context)
  return (
    <>
      A {count}
      <br />
      <B></B>
    </>
  )
}
function B() {
  const count = useContext(context)
  return <>B {count}</>
}

function App() {
  const [count, setCount] = useState(1)
  return (
    <>
      <context.Provider value={count}>
        <A></A>
        <br />
        <button onClick={() => setCount(count + 1)}>+1</button>
      </context.Provider>
    </>
  )
}
export default App
