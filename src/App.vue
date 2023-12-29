<!--
 * @Author: Lieyan
 * @Date: 2023-12-29 21:50:49
 * @LastEditors: Lieyan
 * @LastEditTime: 2023-12-29 22:46:17
 * @FilePath: /FireSSL-Web/src/App.vue
 * @Description: 
 * @Contact: QQ: 2102177341  Website: lieyan.space  Github: @lieyan666
 * @Copyright: Copyright (c) 2023 by lieyanDevTeam, All Rights Reserved. 
-->
<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomePage from "./components/HomePage.vue";
</script>

<template>
  <header>
    <!--<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->
    <img
      alt="Lieyan Logo"
      class="logo"
      src="https://q.qlogo.cn/headimg_dl?dst_uin=2102177341&spec=640"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <HomePage msg="Welcome To FireSSL!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/rootCA">Get RootCA</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1.5rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
