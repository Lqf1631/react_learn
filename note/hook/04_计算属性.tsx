import { useState, useEffect } from 'react'

// useState 参数可以为一个函数,将函数的返回值作为状态添加到组件
// 其参数函数执行时机同样仅组件首次渲染时执行一次

// react 中的计算属性需要配合 useState 和 useEffect 使用
// 在 useState 中传入参数函数,得到计算属性,并将其设置为组件状态
// 在 useEffect 中调用计算属性的操作方法,设置计算属性的新值
// 将计算值作为依赖项设置,在其计算值变化时,触发副作用函数,重新设置新的计算属性值,并触发页面渲染

function App() {
  const [a, setA] = useState(4)
  const [b, setB] = useState(5)
  const [c, setC] = useState(() => {
    return a + b
  })
  useEffect(() => {
    setC(a + b)
  }, [a, b])
  return (
    <>
      {a} + {b} = {c} <br />
      <button onClick={() => setA(a + 1)}>a+</button>
      <button onClick={() => setB(b + 1)}>b+</button>
    </>
  )
}

export default App
