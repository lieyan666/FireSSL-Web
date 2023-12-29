<!--
 * @Author: Lieyan
 * @Date: 2023-12-29 22:06:46
 * @LastEditors: Lieyan
 * @LastEditTime: 2023-12-29 22:47:04
 * @FilePath: /FireSSL-Web/src/components/HomePage.vue
 * @Description: 
 * @Contact: QQ: 2102177341  Website: lieyan.space  Github: @lieyan666
 * @Copyright: Copyright (c) 2023 by lieyanDevTeam, All Rights Reserved. 
-->
<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="blue">{{ msg }}</h1>
    <h3>
      Powerd By Chy Lieyan.
      <br />
      <a
        href="https://github.com/lieyan666/FireSSL-Web"
        target="_blank"
        rel="noopener"
        >Github</a
      >
      <a href="https://lieyan.space/" target="_blank" rel="noopener"
        >HomePage</a
      >
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
