import { useNavigate } from 'react-router-dom'

// useNavigate 调用后返回一个 navigate 函数用于编程式跳转
// navigate 函数第一个参数为跳转路径，第二个参数为配置对象
// 在配置对象中，一般设置 replace 属性，值为 boolearn 类型，表明是否替代

// 在默认跳转过程中，会记录跳转历史，点击回退按钮会回到上次历史
// 设置 replace 后，会采用替代跳转，不能回退

function Login() {
  const navigate = useNavigate()
  return (
    <>
      <br /> Login <br />
      <button
        onClick={() =>
          navigate('/about?id=100&name=Tom&id=200', { replace: true })
        }>
        About
      </button>
      <button onClick={() => navigate('/index/100/Tom', { replace: true })}>
        Index
      </button>
    </>
  )
}
export default Login
