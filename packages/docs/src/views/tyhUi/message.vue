<template>
  <messageMD />
</template>

<script lang="ts" setup>
import messageMD from "@/docs/message.md";

import { Message } from "@tyh-ui/tyh-ui2";
function change1() {
  Message({ message: "默认提示", type: "default", round: true });
}
function change2() {
  Message({ message: "主要提示", type: "primary", round: true });
}
function change3() {
  Message({ message: "成功提示", type: "success", round: true });
}
function change4() {
  Message({ message: "危险提示", type: "danger", round: true });
}
function change5() {
  Message({ message: "警告提示", type: "warning", round: true });
}
</script>
