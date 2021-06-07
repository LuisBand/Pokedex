
<template id="principal">
  <div id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo">
        <img src="../assets/iconPokedex.png" clasa="app-logo" alt="Logotipo" />
        <span id="brand">
          <strong>Pokedex</strong>
        </span>
      </div>

      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/">Home</router-link> |
          </li>
          <li>
            <router-link to="/about">About</router-link> |
          </li>
          <li>
            <router-link to="/find">PokeFind</router-link> |
          </li>
        </ul>
      </nav>

      <!--- LIMPIAR FLOTADOS --->
      <div class="clearfix"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "NavBar",
  data() {},
};
</script>

<style scoped>
#header {
  height: 110px;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  background: #e1e1e1;
}

.center {
  width: 78%;
  margin: 0px auto;
}

.clearfix {
  clear: both;
  float: none;
}

#logo {
  width: 25%;
  font-size: 30px;
  float: left;
  margin-top: 35px;
}

#logo img {
  display: block;
  float: left;
  width: 50px;
  margin-top: -7px;
  margin-right: 8px;
}

#brand {
  display: block;
  margin: 0px;
  float: left;
}

#brand p {
  display: block;
  margin: 0;
  font-size: 14px;
}

#menu {
  width: 45%;
  float: right;
  font-size: 18px;

}

#menu ul {
  line-height: 85px;
  width: 60%;
  float: right;
  margin-right: 100x;
}

#menu ul li {
  list-style: none;
  height: 46px;
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
}

#menu a {
  text-decoration: none;
  color: #444;
  transition: 300ms all;
}

#menu a:hover {
  color: #a10004;
}

</style>
