import { createContext } from "react";
// 对于传递的静态值,可以在创建 context 时传入
const context = createContext(0)
// 导出 context 以便其余组件随时导入拦截 context 获取传递值使用
export default context