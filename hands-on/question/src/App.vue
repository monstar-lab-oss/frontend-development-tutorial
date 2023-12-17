<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <br />
        <span>Demo ></span>
        <RouterLink to="/demo/component">Component</RouterLink>
        <RouterLink to="/demo/ui-library">UI Library</RouterLink>
        <RouterLink to="/demo/api">API</RouterLink>
        <br />
        <span>Hands On ></span>
        <RouterLink to="/hands-on/component">Component</RouterLink>
        <RouterLink to="/hands-on/responsive">CSS Library</RouterLink>
        <RouterLink to="/hands-on/ui-library">UI Library</RouterLink>
        <RouterLink to="/hands-on/blogs">Blog</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1.5rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
