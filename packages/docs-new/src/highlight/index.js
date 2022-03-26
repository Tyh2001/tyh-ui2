import hljs from './core'
import { javascript } from './languages/javascript'
import { xml } from './languages/xml'
import { css } from './languages/css'
import { shell } from './languages/shell'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)
hljs.registerLanguage('shell', shell)

export default hljs
