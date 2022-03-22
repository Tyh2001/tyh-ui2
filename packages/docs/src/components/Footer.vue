<template>
  <div id="footer">
    <a target="_blank" href="https://github.com/Tyh2001/tyh-ui">Github</a>
    <span class="interval">-</span>
    <a target="_blank" href="https://www.npmjs.com/package/tyh-ui2">NPM</a>
    <span class="interval">-</span>
    <a
      target="_blank"
      href="https://github.com/Tyh2001/tyh-ui/blob/master/CHANGELOG.md"
    >
      更新日志
    </a>
    <span class="interval">-</span>
    <a target="_blank" href="https://tianyuhao.cn">关于我</a>
  </div>
</template>

<style scoped>
#footer {
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#footer .interval {
  display: inline-block;
  padding: 0 15px;
  cursor: default;
}
#footer a {
  color: #333;
  text-decoration: none;
  transition: 0.4s;
}
#footer a:hover {
  color: #3a6ff4;
}
</style>
