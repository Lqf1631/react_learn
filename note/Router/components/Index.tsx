import { Outlet, useParams, useNavigate } from 'react-router-dom'

// useParams 调用后返回一个对象，收集以路径传参的参数
// 该对象为路径传参的 key=value 键值对对象，可以根据 key 直接取值
// 以路径传参需要在路由路径中以 /:key 形式配置参数的 key
// 在之后的路由跳转中,必须传递对应的 /value 形成键值对,否则报错

function Index() {
  const Params = useParams()
  const navigate = useNavigate()
  return (
    <>
      index id:{Params.id} name:{Params.name}
      <div>
        {/* 由于配置了路径传参,故跳转到对应路由处必须进行参数传递 */}
        <button onClick={() => navigate('/index/101/Merry/article')}>
          article
        </button>
        <button onClick={() => navigate('/index/102/Mike')}>board</button>
        {/* 在嵌套路由的父路由的组件中,使用 Outlet 组件设置嵌套路由的组件出口 */}
        <Outlet></Outlet>
      </div>
    </>
  )
}
export default Index
