<template>
  <div class="wrapper">
    <sidebar v-bind:user="user" v-bind:is-sidebar-open="isSidebarOpen"></sidebar>

    <div id="content">
      <navbar v-bind:user="user" v-bind:is-sidebar-open="isSidebarOpen"></navbar>

      <transition name="slide-fade" mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from "./NavbarComponent.vue";
import Sidebar from "./SidebarComponent.vue";

export default {
  name: "app",
  components: { Navbar, Sidebar },
  data() {
    return {
      user: {},
      isSidebarOpen: false
    };
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case "login":
        case "logout":
          this.user = state.auth.user;
          break;
        case "toggleSidebar":
          this.isSidebarOpen = state.commons.isSidebarOpen;
          break;
      }
    });
  },
  created: function() {
    this.user = this.$store.state.auth.user;
  }
};
</script>
