<template>
  <nav id="sidebar" v-bind:class="{ active: !isSidebarOpen }" v-if="!$route.meta.hideNavigation">
    <div class="sidebar-header">
      <h3>
        <router-link :to="{name: 'home'}" class="text-white">- EgroTech -</router-link>
      </h3>
    </div>

    <ul class="list-unstyled components">
      <p class="username" v-if="loggedIn">{{user.name}}</p>
      <li>
        <router-link :to="{name: 'home'}">Home</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "sidebar",
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
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    }
  }
};
</script>
