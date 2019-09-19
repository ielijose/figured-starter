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
      <li>
        <a
          href="#pageSubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >Posts</a>
        <ul class="collapse list-unstyled" id="pageSubmenu">
          <li>
            <router-link :to="{name: 'home'}">List</router-link>
          </li>
          <li v-if="isAdmin">
            <router-link :to="{name: 'create'}">Create</router-link>
          </li>
        </ul>
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
