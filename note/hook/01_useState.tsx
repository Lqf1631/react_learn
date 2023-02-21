import { useState } from 'react'

// hook 函数：增强函数组件功能的钩子函数
// 钩子函数：在对应时机触发的函数
// hook 函数使用：hook 函数按顺序依次执行故不能设置在限制执行的语句中

// useState 为函数组件设置状态的 hook 函数
// useState 参数为状态值，返回值为数组
// 按数组顺序进行解构，第一个值为状态，第二个值为修改对应状态方法
// useState 封装方法，将参数设置为 State 状态，并将状态使用值和操作方法按数组返回
// State 状态：状态设置为不可修改值，被组件所维护，状态仅能通过 setState 方法进行覆盖
// setState 操作状态方法，接受参数为一状态新值，将旧状态值进行覆盖后才能触发页面更新
// 为添加多个状态可以多次调用 useState

// 函数组件：首次渲染与更新渲染
// 首次渲染:当函数组件被导入使用时,会依次执行函数组件内部语句
// 此时 useState 方法的参数为设置的初始值,为函数组件添加状态
// 该状态被函数组件外部维护

// 当调用 setState 方法设置新的函数状态(根据 key=value 键值对更新判断),会更新渲染,触发页面更新
// 此时会重新执行函数组件语句,但是 useState 参数为 setState 参数,即为更新的状态值

function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <>
      {count} <br />
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  )
}

export default App
