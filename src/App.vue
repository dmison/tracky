<template>
  <div id="app">
    <nav>
      <router-link to="/">all entries</router-link> |
      <router-link to="/entry/new">new entry</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
html,
body {
  padding: 0px;
  margin: 0px;
  min-width: 320px;
  font-size: 20px;
}
h1,
h2,
h3,
h4,
h5 {
  margin-top: 1px;
  margin-bottom: 0.5rem;
}

main {
  margin: 0px auto;
  width: 90%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
nav {
  background-color: rgb(90, 97, 104);
  text-align: center;
  padding: 1rem 0.5rem;
  margin-bottom: 1rem;
}

nav a {
  font-weight: bold;
  /* color: white; */
  color: #19222c;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
