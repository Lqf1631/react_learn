// 副作用函数:对函数外部值进行操作的函数
// 对于 react 函数组件,其内部渲染 jsx 的 UI 结构为主作用
// 其余如操作 jsx 以外的 dom ajax localstorage 等均为副作用
// useEffect:控制副作用操作的执行
// 第一个参数为函数,第二个参数为依赖项数组
// 会在函数组件首次渲染时,执行一次
// 未配置第二个参数时,默认依赖整个组件的 State 状态,当 State 状态改变时,会执行参数函数
// 配置第二个参数为空数组时,参数函数仅在首次渲染时执行一次
// 配置第二个参数为依赖项数组时,参数函数会在任意依赖项改变时执行,且参数函数中使用的状态必须为依赖项
// 副作用函数的依赖项必须为 State 状态

// useEffect 执行时机为页面渲染(首次以及依赖项更新后渲染)完成后才执行

import { useState, useEffect } from 'react'

function App() {
  // 添加状态 count name
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Tom')
  // 设置副作用函数,修改函数组件外部值
  // 无依赖项时,默认依赖整个 State
  // useEffect(() => {
  //   console.log('effect')
  //   document.title = '' + count
  // })

  // 配置依赖项时,执行时机依赖于依赖项的更新,且内部使用的状态值必须成为对应依赖
  // useEffect(() => {
  //   console.log('effect')
  //   document.title = '' + count
  // }, [count])

  // 依赖项为空数组时,仅在组件渲染时执行一次
  useEffect(() => {
    console.log('effect')
    document.title = '1'
  })

  return (
    <>
      {count} <button onClick={() => setCount(count + 1)}>+1</button> <br />
      {name} <button onClick={() => setName(name + '+')}>+</button>
    </>
  )
}
export default App
