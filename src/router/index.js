/*
 * @Author: Lieyan
 * @Date: 2023-12-29 21:50:49
 * @LastEditors: Lieyan
 * @LastEditTime: 2023-12-29 22:49:17
 * @FilePath: /FireSSL-Web/src/router/index.js
 * @Description:
 * @Contact: QQ: 2102177341  Website: lieyan.space  Github: @lieyan666
 * @Copyright: Copyright (c) 2023 by lieyanDevTeam, All Rights Reserved.
 */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/rootCA",
      name: "RootCA",
      component: () => import("../views/RootCAView.vue"),
    },
  ],
});

export default router;
