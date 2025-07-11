<template>
  <header class="app-header">
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
    <h1>My Application</h1>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.app-header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

.app-header h1 {
  margin: 0;
}

.app-header nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
</style>