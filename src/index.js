// 导入 React 和 ReactDom 库
import React from 'react'
import ReactDOM from 'react-dom/client'
// 导入入口 css 样式文件
import './index.css'
// 导入 App 组件
import App from './App'

// 调用 ReactDom 库的创建 root 节点方法
// 从页面中获取 id 为 root 的节点，将节点包装为 react 的 Root 节点
const root = ReactDOM.createRoot(document.getElementById('root'))
// 调用 root 节点的 render 方法，将 App 组件渲染到 root 节点上
root.render(
  // 删去严格模式标签，避免影响 useEffect 执行
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
