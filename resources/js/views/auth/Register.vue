<template>
  <div class="auth-wrapper fadeInDown">
    <div id="formContent">
      <div class="fadeIn first">
        <router-link :to="{name: 'home'}" class="display-4 mb-4">EgroTech</router-link>
      </div>

      <form autocomplete="off" @submit.prevent="register" method="post">
        <div class="form-group">
          <input
            type="text"
            id="name"
            class="fadeIn first"
            name="name"
            placeholder="Name"
            v-model="name"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            id="email"
            class="fadeIn second"
            name="email"
            placeholder="Email"
            v-model="email"
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            id="password"
            class="fadeIn third"
            name="password"
            placeholder="Password"
            v-model="password"
          />
        </div>

        <input type="submit" class="fadeIn fourth" value="Register" />
      </form>

      <div id="formFooter">
        <router-link :to="{name: 'login'}" class="underlineHover">Login?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      const loader = this.$loading.show();
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.$router.push({
            name: "login",
            params: { successRegistrationRedirect: true }
          });
          this.$toasted.success("Successful registration.");
        })
        .catch(error => {
          console.log(error);
          this.$toasted.error("Registration error.");
        })
        .finally(() => {
          loader.hide();
        });
    }
  }
};
</script>
