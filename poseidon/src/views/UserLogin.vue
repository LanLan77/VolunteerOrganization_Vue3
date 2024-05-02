<template>
    <div class="login-container">
      <h1>登录/注册</h1>
      <form @submit.prevent="onSubmit">
        <input type="email" v-model="email" placeholder="邮箱" required>
        <input type="password" v-model="password" placeholder="密码" required>
        <button type="submit">登录/注册</button>
        <!-- 可选的社交媒体登录按钮 -->
        <button @click.prevent="socialMediaLogin">使用社交媒体账号登录</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserLogin', // 更改为多个单词的组件名
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      onSubmit() {
        // 登录逻辑
      },
      socialMediaLogin() {
        // 社交媒体登录逻辑
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  