import footer from './src/footer'
import header from './src/header'
export default {
  setup () {

    const target = '这是参数'
    const { footer1, footer2, footer3 } = footer(target)
    const { header1 } = header()

    return {
      footer1,
      footer2,
      footer3,
      header1
    }
  }
}