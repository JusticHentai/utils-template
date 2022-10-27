import MyApiMap from './ApiMap'
import Merge from './Merge'

/**
 * 初始化选项
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Options {}

/**
 * 默认选项
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DefaultOptions {}

/**
 * 内部选项
 */
export type InnerOptions = Merge<Options, DefaultOptions> & Record<string, any>

/**
 * 映射列表类型
 */
export type ApiMap = MyApiMap<InnerOptions>
