export default function (target) {
  function footer1 () {
    console.log('footer1 模块')
    console.log(target)
  }

  function footer2 () {
    console.log('footer2 模块')
  }

  function footer3 () {
    console.log('footer3 模块')
  }

  return {
    footer1,
    footer2,
    footer3
  }
}