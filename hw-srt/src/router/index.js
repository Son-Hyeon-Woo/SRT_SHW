// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"; // 로그인 컴포넌트 임포트
import About from "../views/About.vue";
import Home from "../views/Home.vue";

// 실제로는 인증 서비스를 통해 로그인 상태를 확인해야 합니다.
const isAuthenticated = () => !!localStorage.getItem("userLoggedIn");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { requiresAuth: true },
  },
  // 기타 라우트 설정
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 네비게이션 가드를 사용하여 로그인 필요 상태를 체크합니다.
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated()) {
    // 이 라우트는 인증이 필요하고, 사용자가 인증되지 않았으므로 로그인 페이지로 리다이렉트합니다.
    next({ name: "Login" });
  } else {
    // 인증이 필요 없거나 이미 인증된 경우, 원하는 라우트로 이동합니다.
    next();
  }
});

export default router;
