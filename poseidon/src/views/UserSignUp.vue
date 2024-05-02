<template>
    <div class="signup-container">
      <h1>注册</h1>
      <form @submit.prevent="onSignUp">
        <div>
          <label for="username">用户名:</label>
          <input id="username" type="text" v-model="username" required>
        </div>
        <div>
          <label for="email">邮箱:</label>
          <input id="email" type="email" v-model="email" required>
        </div>
        <div>
          <label for="password">密码:</label>
          <input id="password" type="password" v-model="password" required>
        </div>
        <button type="submit">注册</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserSignUp',
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      onSignUp() {
        // 实现注册逻辑
        alert('注册功能待实现！');
      }
    }
  }
  </script>
  
  <style scoped>
  .signup-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .signup-container div {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  </style>
  
