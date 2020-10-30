<template>

  <div id="app">
    <nav class="navbar navbar-light bg-dark">
  <a class="navbar-brand">Games Art</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/tendencias">Tendencias</router-link> |
      <router-link to="/desarrollo">Desarrollo</router-link> |
      <router-link to="/login">Login</router-link> 
    <router-view/>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   background-image: url('./assets/bac.jpg'); 


}

#nav a {
  font-weight: bold;
  color: white;
  
}

#nav a.router-link-exact-active {
  color:white;
 
}

</style>
