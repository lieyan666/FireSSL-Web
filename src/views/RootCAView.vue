<!--
 * @Author: Lieyan
 * @Date: 2023-12-29 22:49:00
 * @LastEditors: Lieyan
 * @LastEditTime: 2023-12-30 01:32:51
 * @FilePath: /FireSSL-Web/src/views/RootCAView.vue
 * @Description: 
 * @Contact: QQ: 2102177341  Website: lieyan.space  Github: @lieyan666
 * @Copyright: Copyright (c) 2023 by lieyanDevTeam, All Rights Reserved. 
-->
<script setup>
import RootCAItem from "../components/WelcomeItem.vue";
import DocumentationIcon from "../components/icons/IconDocumentation.vue";
import ToolingIcon from "../components/icons/IconTooling.vue";
import EcosystemIcon from "../components/icons/IconEcosystem.vue";
import CommunityIcon from "../components/icons/IconCommunity.vue";
import SupportIcon from "../components/icons/IconSupport.vue";
</script>

<template>
  <RootCAItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>RootCA Contents</template>
    <a
      href="https://data.firessl.chycloud.top/rootCA"
      target="_blank"
      rel="noopener"
      >Data</a
    >
    <code>{{ codeContent }}</code>
  </RootCAItem>
  <!--
  <RootCAItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>
    Dev
  </RootCAItem>
  -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      codeContent: "",
    };
  },
  mounted() {
    axios
      .get("https://data.firessl.chycloud.top/rootCA", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      })
      // axios.get("https://firessl-rootca.lieyan.workers.dev/rootCA")
      .then((response) => {
        this.codeContent = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
