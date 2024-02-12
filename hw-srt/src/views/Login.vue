<!-- src/views/Login.vue -->
<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input id="username" v-model="username" type="text" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // 로그인 로직 구현
      console.log("Login attempt with:", this.username, this.password);
      // 로그인 성공 후 리디렉션 등의 추가 로직 필요
    },
  },
};
</script>

<style scoped>
/* 여기에 스타일 추가 */
</style>
