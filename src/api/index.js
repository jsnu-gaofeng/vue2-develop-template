//当前这个模块：对api进行统一管理
import { request, nodeApi } from './request'
export const reqNative = () => request({ url: '', method: 'get' })
export const reqNode = (data) => nodeApi({ url: '', method: 'post', data })
