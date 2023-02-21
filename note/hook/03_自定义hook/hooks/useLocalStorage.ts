// 接受以键和值为参数的函数,将键值对存储在 localStorage 中
// 且每当值变化时,更新本地存储
// 返回值为以值为状态和修改值的方法组成的数组

import { useState, useEffect } from 'react'

export function useLocalStorage(key: string, value: any) {
  const [lsValue, setLsValue] = useState(value)
  // 存储本地的行为依赖于 lsValue 状态值改变
  useEffect(() => {
    window.localStorage.setItem(key, lsValue)
  }, [lsValue, key])
  return [lsValue, setLsValue]
} 