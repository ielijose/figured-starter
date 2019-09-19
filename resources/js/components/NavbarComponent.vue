<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="!$route.meta.hideNavigation">
    <div class="container-fluid">
      <button
        type="button"
        id="sidebarCollapse"
        class="navbar-btn"
        v-on:click="toggleSidebar"
        v-bind:class="{ active: !isSidebarOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <button
        class="btn btn-dark d-inline-block d-lg-none ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-align-justify"></i>
      </button>

      <span class="logo text-center">- EgroTech -</span>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item" v-if="!loggedIn">
            <router-link :to="{name: 'login'}" class="nav-link">Log In</router-link>
          </li>
          <li class="nav-item" v-if="!loggedIn">
            <router-link :to="{name: 'register'}" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item" v-if="loggedIn">
            <router-link :to="{name: 'logout'}" class="nav-link">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  props: {
    user: Object,
    isSidebarOpen: Boolean
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch("toggleSidebar");
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>
