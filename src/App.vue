<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <!-- Navigation Bar -->
    <nav class="nav-bar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <!-- Main Content -->
    <RouterView />
  </div>
</template>

<style scoped>
/* Wrapper Styling */
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navigation Bar Styling */
.nav-bar {
  display: flex;
  justify-content: center; /* Align links in the center */
  background-color: #6200ea; /* Vuetify-style purple color */
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow */
}

.nav-bar a {
  color: white; /* Link text color */
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  font-size: 16px;
}

.nav-bar a:hover {
  text-decoration: underline;
}
</style>
