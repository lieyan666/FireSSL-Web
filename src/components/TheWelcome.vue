<!--
 * @Author: Lieyan
 * @Date: 2023-12-29 21:50:49
 * @LastEditors: Lieyan
 * @LastEditTime: 2023-12-29 22:41:09
 * @FilePath: /FireSSL-Web/src/components/TheWelcome.vue
 * @Description: 
 * @Contact: QQ: 2102177341  Website: lieyan.space  Github: @lieyan666
 * @Copyright: Copyright (c) 2023 by lieyanDevTeam, All Rights Reserved. 
-->
<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    FireSSL’s
    <a href="https://firessl.lieyan.space/docs" target="_blank" rel="noopener"
      >documentation</a
    >
    (Under development)
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is based on
    <a href="https://www.openssl.org/" target="_blank" rel="noopener">OpenSSL</a
    >. <br />The serverless service is provided by
    <a href="https://cloudflare.com/" target="_blank" rel="noopener"
      >Cloudflare</a
    >. <br />The ecommended IDE is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener"
      >VSCode</a
    >
    <!--
    <br />

    More instructions are available in <code>README.md</code>.
    -->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>
    <!--
    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
    -->
    Looking forward to your participation in
    <RouterLink to="/dev">building the ecosystem</RouterLink>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>
    <!--
    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
    -->

    <RouterLink to="/dev">Under development</RouterLink>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support FireSSL</template>

    As an independent project, FireSSL relies on community backing for its
    sustainability. You can help us by
    <a
      href="https://firessl.lieyan.space/sponsor/"
      target="_blank"
      rel="noopener"
      >becoming a sponsor</a
    >.
  </WelcomeItem>
</template>
