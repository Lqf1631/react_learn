import { useEffect, useState } from 'react'

// useEffect 参数为副作用函数,即对组件外部产生影响的函数
// 而在销毁组件后,部分副作用函数需要被清除
// 其参数副作用函数的返回值为一个函数
// 当组件被销毁时,会触发返回值函数,在该函数内对副作用进行清除

function Com() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('timer')
    }, 1000)
    // 设置 useEffect 参数函数的返回值,在该组件被销毁时,会触发返回值函数
    // 返回值函数一般为清理副作用函数的副作用效果
    return () => {
      clearInterval(timer)
    }
  }, [])
  return <>Com</>
}

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <>
      {flag ? <Com></Com> : null} <br />
      <button onClick={() => setFlag(!flag)}>show</button>
    </>
  )
}

export default App
