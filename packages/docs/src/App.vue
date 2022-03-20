<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: '微软雅黑';
}
pre {
  margin-top: 12px;
}
pre code.hljs {
  font-family: '微软雅黑';
  font-size: 15px;
  border-radius: 18px;
  background: rgb(243, 247, 255);
}
.title {
  font-weight: 500;
  color: #1f2f3d;
  margin-bottom: 50px;
}
.Subtitle {
  color: #515a6e;
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 18px;
}
p {
  color: #515a6e;
  line-height: 40px;
  font-size: 15px;
}
::-webkit-scrollbar {
  width: 6px;
  background-color: #ffffff;
}
::-webkit-scrollbar-thumb {
  background: #dddddd;
  border-radius: 6px;
}
</style>
