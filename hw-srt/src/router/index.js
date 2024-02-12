// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"; // 로그인 컴포넌트 임포트

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login, // 로그인 경로에 컴포넌트 등록
  },
  // 기타 라우트 설정
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
