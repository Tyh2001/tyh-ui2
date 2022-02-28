export function Message (opts) {
  console.log(opts)
  console.log(mergeOptions(opts))
}

/**
 * 配置 message
 * @param { object} opts 配置对象
 * @returns 全部配置项
 */
function mergeOptions (opts) {
  const defaultOptions = {
    type: 'default',
    time: 2000,
    iconClass: ''
  }
  return Object.assign(defaultOptions, opts)
}

/**
 * 创建 message
 * @param { object} opts 配置对象
 * @returns 
 */
function createMessage (opts) {

}
