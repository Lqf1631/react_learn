import { useSearchParams } from 'react-router-dom'

// useSearchParams 获取以查询字符串形式传递的参数
// 调用 useSearchParams 返回一个数组，数组第一项为一个 Params 对象
// 调用 Params.get() 方法，根据查询字符串的 key 获取值
// 以查询字符串的形式传参时，不用对路由路径进行额外配置，可以不传递参数
// 如果有多个同 key 的查询字符串，返回参数为第一个 key 的值

function About() {
  const [Params] = useSearchParams()
  return (
    <>
      about id:{Params.get('id')} name:{Params.get('name')}
    </>
  )
}
export default About
