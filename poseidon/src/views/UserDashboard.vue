<template>
    <div class="dashboard">
      <h1>用户仪表盘</h1>
      <div>
        <button @click="logout">登出</button>
        <h2>我的信息</h2>
        <!-- 显示和编辑用户信息 -->
        <h2>我的组织</h2>
        <!-- 加入和查看组织 -->
        <h2>即将举行的活动</h2>
        <!-- 显示和 RSVP 活动 -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // 登出逻辑
      }
    }
  }
  </script>
  