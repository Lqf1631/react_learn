import About from './components/About'
import Index from './components/Index'
import Login from './components/Login'

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Board from './components/Board'
import Article from './components/Article'
import NotFount from './components/NotFound'

// BrouserRouter 组件：在一个 react 应用中仅使用一次，用于声明使用的路由模式
// 在其组件内部的模板开启路由模式
// 路由模式：基于 history 的 BrowserRouter 和基于 hash 的 HashRouter

// Link 组件：设置路由跳转，具有 to 属性，绑定路由跳转的地址，渲染为 a 标签

// Routes 组件：路由出口组件，在内部存放路由组件，将匹配路由的路由组件渲染到其内部

// Route 组件：路由匹配组件，具有 path 属性和 element 属性，用于匹配路由
// element 组件值类型为组件标签 <Component></Component>

function App() {
  return (
    <BrowserRouter>
      <Link to={'/index/20/Jerry'}>首页</Link>
      <Link to={'/about'}>关于</Link>
      <Routes>
        {/* 在路由配置中，如果采用路径传参，需在路径中进行额外配置，且配置后均需要传递参数 */}
        <Route path="/index/:id/:name" element={<Index></Index>}>
          {/* 嵌套路由,在 Route 组件内部配置嵌套路由, path 不必写 / */}
          <Route path="article" element={<Article></Article>}></Route>
          {/* 在二级路由中配置 index 属性取代 path 属性,来设置嵌套路由的默认展示 */}
          <Route index element={<Board></Board>}></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/" element={<Login></Login>}></Route>
        {/* 在一级路由最后配置 404 页面,采用 * 通配符设置 */}
        {/* 路由匹配按设置顺序进行,在此前均未匹配到,则最后匹配通配符 * 到 404 页面 */}
        <Route path="*" element={<NotFount />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
