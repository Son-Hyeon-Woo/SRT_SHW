<!-- src/views/Login.vue -->

<script setup></script>

<template>
  <router-view />
  <div class="login">
    <h2>about</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input id="username" type="text" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped></style>
