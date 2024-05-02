<template>
  <div class="signup-page">
    <div class="signup-container">
      <h2>Sign Up</h2>
      <p>Create Your Account!</p>
      <div class="account-type-selector">
        <button @click="setAccountType('personal')" 
                :class="{ 'active': accountType === 'personal' }">Personal</button>
        <button @click="setAccountType('organization')" 
                :class="{ 'active': accountType === 'organization' }">Organization</button>
      </div>
      <form @submit.prevent="submitForm">
        <input type="text" placeholder="Username" v-model="username" required>
        <input type="email" placeholder="Email" v-model="email" required>
        <input type="password" placeholder="Password" v-model="password" required>
        <input type="password" placeholder="Confirm Password" v-model="confirmPassword" required>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      accountType: 'personal' // Default to 'personal'
    };
  },
  methods: {
    setAccountType(type) {
      this.accountType = type;
    },
    submitForm() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return false;
      }
      console.log(this.username, this.email, this.password, this.accountType);
      // Add registration logic here
    }
  }
}
</script>

<style scoped>
.signup-page {
  display: flex;
  justify-content: center;
  align-items: start; /* Aligns to the top, reducing the centering effect */
  min-height: 100vh;
  background: linear-gradient(to right, #74ebd5, #acb6e5);
  padding-top: 5vh; /* Adds some space at the top */
}

.signup-container {
  background: #fff;
  padding: 40px; /* Increased padding for symmetry */
  border-radius: 8px; /* Subtle border-radius */
  box-shadow: 0 4px 10px rgba(0,0,0,0.1); /* Softer shadow */
  width: 450px; /* Adjusted width for better symmetry */
  text-align: center;
}

h2 {
  color: #333;
  font-size: 26px; /* Increased font size for heading */
  margin-bottom: 10px; /* Adjusted spacing */
}

p {
  color: #666;
  font-size: 18px; /* Details in smaller font */
  margin-bottom: 20px; /* Adjusted spacing */
}

.account-type-selector {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.account-type-selector button {
  background: none;
  border: 2px solid #ccc;
  padding: 10px 20px;
  cursor: pointer;
  color: #555;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: 16px; /* Increased button font size */
}

.account-type-selector button.active {
  border-color: #007BFF;
  background-color: #e1f5fe; /* Light blue background for active button */
  color: #007BFF;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px;
  margin-bottom: 12px; /* Uniform bottom margin */
  border: 2px solid #ccc; /* Standard border size */
  border-radius: 5px;
  box-sizing: border-box; /* Includes padding and border in the element's total width and height */
}

input:focus {
  border-color: #007BFF;
  outline: none; /* Removing focus outline for a cleaner look */
}

button[type="submit"] {
  width: 100%;
  padding: 15px; /* Slightly thicker for a more substantial feel */
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px; /* Larger font size for the submit button */
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>



