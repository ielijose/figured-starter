<template>
  <div class="auth-wrapper fadeInDown">
    <div id="formContent">
      <div class="fadeIn first">
        <router-link :to="{name: 'home'}" class="display-4 mb-4">EgroTech</router-link>
      </div>

      <form autocomplete="off" @submit.prevent="login" method="post">
        <div class="form-group">
          <input
            type="text"
            id="email"
            class="fadeIn first"
            name="email"
            placeholder="Email"
            v-model="email"
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            id="password"
            class="fadeIn second"
            name="password"
            placeholder="Password"
            v-model="password"
          />
        </div>

        <input type="submit" class="fadeIn third" value="Log In" />
      </form>

      <div id="formFooter">
        <router-link :to="{name: 'register'}" class="underlineHover">Register?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      const loader = this.$loading.show();
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.$router.push({ name: "home" });
          this.$toasted.success("Welcome back 🥳");
        })
        .catch(error => {
          this.$toasted.error("Invalid credentials ☹️");
        })
        .finally(() => {
          loader.hide();
        });
    }
  }
};
</script>
