// var hljs = require('./core');
import hljs from './my-core'
import javascript from './languages/javascript'

hljs.registerLanguage('javascript', javascript)

export default hljs
