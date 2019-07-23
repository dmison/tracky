<template>
  <div id="app">
    <nav>
      <router-link to="/">all entries</router-link> |
      <router-link to="/entry/new">new entry</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
html,
body {
  padding: 0px;
  margin: 0px;
}
h1,
h2,
h3,
h4,
h5 {
  margin-top: 1px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
nav {
  text-align: center;
  padding: 20px 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
