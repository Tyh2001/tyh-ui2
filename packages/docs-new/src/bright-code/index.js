import hljs from './utils/core'
import { javascript } from './code/javascript'
import { xml } from './code/xml'
import { css } from './code/css'
import { shell } from './code/shell'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)
hljs.registerLanguage('shell', shell)

export default hljs
