import { ApiMap as MyApiMap, Merge } from '@justichentai/types-utils'

/**
 * 初始化选项
 */
export interface Options {}

/**
 * 默认选项
 */
export interface DefaultOptions {}

/**
 * 内部选项
 */
export type InnerOptions = Merge<Options, DefaultOptions> & Record<string, any>

/**
 * 映射列表类型
 */
export type ApiMap = MyApiMap<InnerOptions>
