<template>
  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
  </tyh-container>

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
    <tyh-footer>Footer</tyh-footer>
  </tyh-container>

  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-main>Main</tyh-main>
  </tyh-container>

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-container>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-main>Main</tyh-main>
    </tyh-container>
  </tyh-container>

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-container>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-container>
        <tyh-main>Main</tyh-main>
        <tyh-footer>Footer</tyh-footer>
      </tyh-container>
    </tyh-container>
  </tyh-container>

  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
    </tyh-container>
  </tyh-container>

  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
      <tyh-footer>Footer</tyh-footer>
    </tyh-container>
  </tyh-container>
</template>

<style scoped>
.tyh-header,
.tyh-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.tyh-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.tyh-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .tyh-container {
  margin-bottom: 40px;
}

.tyh-container:nth-child(5) .tyh-aside,
.tyh-container:nth-child(6) .tyh-aside {
  line-height: 260px;
}

.tyh-container:nth-child(7) .tyh-aside {
  line-height: 320px;
}
</style>
