import hljs from './core'

import javascript from './languages/javascript'
import xml from './languages/xml'
import css from './languages/css'
import shell from './languages/shell'
// console.log(hljs)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)
hljs.registerLanguage('shell', shell)

hljs.HighlightJS = hljs
hljs.default = hljs
// module.exports = hljs;
export default hljs
