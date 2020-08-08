<template>
  <mdb-navbar style="z-index: 2" position="top" tag="div" container light color="white">
    <router-link to="/">
      <mdb-navbar-brand>
        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt />
      </mdb-navbar-brand>
    </router-link>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="#" waves-fixed>Menu 1</mdb-nav-item>
        <mdb-nav-item href="#" waves-fixed>Menu 2</mdb-nav-item>
        <mdb-nav-item href="#" waves-fixed>Menu 3</mdb-nav-item>
      </mdb-navbar-nav>
      <mdb-navbar-nav right>
        <mdb-nav-item href="#" waves-fixed>
          <i class="fab fa-facebook-f"></i>
        </mdb-nav-item>
        <mdb-nav-item href="#" waves-fixed>
          <i class="fab fa-instagram"></i>
        </mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavbarBrand,
} from "mdbvue";
export default {
  name: "Navbar",
  components: {
    "mdb-navbar": mdbNavbar,
    "mdb-navbar-brand": mdbNavbarBrand,

    "mdb-nav-item": mdbNavItem,
    "mdb-navbar-nav": mdbNavbarNav,
    "mdb-navbar-toggler": mdbNavbarToggler,
  },
};
</script>

<style scoped>
body {
  margin-bottom: 120px;
}
</style>