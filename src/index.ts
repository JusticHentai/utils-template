import { DefaultOptions, InnerOptions, Options } from './types'

const defaults: DefaultOptions = {}

/**
 * 外部使用对象
 */
export default class Utils {
  public options: InnerOptions

  constructor(options: Options) {
    this.options = { ...defaults, ...options }
    this.init()
  }

  init() {
    console.log('utilsTemplate 初始化1')
    return this
  }
}
