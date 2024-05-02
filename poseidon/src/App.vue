<template>
  <nav>
    <div class="nav-links">
      <router-link to="/">Homepage</router-link>
      <router-link to="/dashboard/user">User Dashboard</router-link> 
      <router-link to="/dashboard/manager">Manager Dashboard</router-link> 
      <router-link to="/dashboard/admin">Admin Dashboard</router-link> 
    </div>
    <div class="auth-links">
      <router-link to="/login">Sign In</router-link>
      <router-link to="/signup">Sign Up</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.nav-links, .auth-links {
  display: flex;
}

.router-link {
  margin-right: 10px;
  text-decoration: none;
}

.router-link:last-child {
  margin-right: 0;
}
</style>
