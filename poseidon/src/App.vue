<template>
  <nav>
    <div class="nav-links">
      <router-link to="/" class="nav-item">Homepage</router-link>
      <router-link to="/dashboard/user" class="nav-item">User Dashboard</router-link> 
      <router-link to="/dashboard/manager" class="nav-item">Manager Dashboard</router-link> 
      <router-link to="/dashboard/admin" class="nav-item">Admin Dashboard</router-link> 
    </div>
    <div class="auth-links">
      <router-link to="/signIn" class="nav-item">Sign In</router-link>
      <router-link to="/signUp" class="nav-item">Sign Up</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  background-color: #2c3e50; /* 深色背景 */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-links, .auth-links {
  display: flex;
}

.nav-item {
  padding: 10px 15px;
  margin-right: 10px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: background-color 0.3s, color 0.3s;
}

.nav-item:hover {
  background-color: #34495e; /* 浅一些的蓝色背景 */
  color: #ecf0f1;
}

.nav-item:last-child {
  margin-right: 0;
}
</style>

