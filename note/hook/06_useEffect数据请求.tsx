import { useEffect } from 'react'

// 在函数组件中请求数据,需要在函数组件初始化时开始发起异步请求
// 故在 useEffect 中设置请求数据的异步函数
// 注意:数据请求的异步函数需要在 useEffect 中先声明再使用
// 不能直接将数据请求的异步函数作为副作用函数传入 useEffect

function App() {
  useEffect(() => {
    async function get() {
      const res = await fetch('http://localhost:3000/')
      console.log(res)
    }
    get()
  }, [])
  return <></>
}

export default App
