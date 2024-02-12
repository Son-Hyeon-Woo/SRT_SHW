<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
// 여기에는 script setup 관련 로직이 들어갑니다.
// 현재 예시에서는 추가적인 JavaScript 로직이 필요하지 않습니다.
</script>

<style>
/* 전역 스타일이 아닌 컴포넌트 지역 스타일입니다. */
nav {
  padding: 1rem;
}

nav a {
  text-decoration: none;
  padding: 0 1rem;
}

main {
  padding: 1rem;
}
</style>
