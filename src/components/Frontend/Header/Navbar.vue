<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#"> <strong> Ujian Onglen</strong></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li v-show="!isAuth" class="nav-item">
              <button class="btn btn-primary mr-2">
            <a class="nav-link" href="#">Daftar</a>
            </button>
          </li>
          <li v-show="!isAuth" class="nav-item">
              <button class="btn btn-success">
            <a class="nav-link" href="#">Masuk</a>
            </button>
          </li>
          <li v-show="isAuth" class="nav-item">
              <button class="btn btn-success mr-2">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            </button>
          </li>
          <li v-show="isAuth" class="nav-item">
              <button class="btn btn-primary mr-2">
            <a class="nav-link" href="#">Keluar</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    name:'Navbar',
    computed:{
      isAuth(){
        return this.$store.state.user[0].isAuth
      }
    }
}
</script>
