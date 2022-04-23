<template>
  <div id="Footer">
    <div class="foot-box">
      <h3 class="title-footer">合作者</h3>
      <a
        v-for="(item, index) in collaborator"
        target="_blank"
        :href="item.url"
        :key="index"
      >
        <div class="userBox">
          <img
            draggable="false"
            class="myPhoto"
            :src="item.photo"
            alt="photo"
          />
          <span class="userName">{{ item.name }}</span>
        </div>
      </a>

      <h3 class="title-footer">链接</h3>
      <ul class="link-ul">
        <li>
          <a target="_blank" href="https://github.com/Tyh2001/tyh-ui">
            Github
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.npmjs.com/package/tyh-ui2">
            NPM
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/Tyh2001/tyh-ui/blob/master/CHANGELOG.md"
          >
            更新日志
          </a>
        </li>
        <li>
          <a target="_blank" href="https://tianyuhao.cn"> 关于我 </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const collaborator = [
  {
    name: '田同学',
    photo: 'https://avatars.githubusercontent.com/u/73180970?v=4',
    url: 'https://github.com/Tyh2001'
  },
  {
    name: '话梅桔',
    photo: 'https://avatars.githubusercontent.com/u/46716525?v=4',
    url: 'https://github.com/Givenchy-Coisini'
  }
]
</script>

<style scoped>
#Footer {
  background: #f7fbfd;
  padding: 60px 0;
  box-sizing: border-box;
  user-select: none;
}
#Footer .foot-box {
  width: 800px;
  margin: auto;
}
#Footer .foot-box .title-footer {
  margin-top: 50px;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 20px;
  color: #515a6e;
}
#Footer .foot-box a {
  display: inline-block;
  color: #3f536e;
  text-decoration: none;
}
#Footer .foot-box a .userBox {
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
#Footer .foot-box a .userBox .myPhoto {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
#Footer .foot-box a .userBox .userName {
  font-size: 20px;
  color: #515a6e;
  margin-left: 10px;
}
#Footer .foot-box .link-ul li {
  list-style: none;
  line-height: 40px;
}
@media screen and (max-width: 700px) {
  #Footer {
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
  }
  #Footer .foot-box {
    width: 100%;
  }
}
</style>
