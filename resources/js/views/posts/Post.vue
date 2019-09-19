<template>
  <div>
    <section class="jumbotron text-center" v-bind:style="dinamicBackground">
      <div class="float-right admin-posts-actions" v-if="isAdmin">
        <router-link
          :to="{name: 'edit', params:{slug: post.slug}}"
          class="btn btn-success mr-2"
        >Edit</router-link>

        <button class="btn btn-danger" v-on:click="deletePost">Delete</button>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <h1 class="jumbotron-heading" v-text="post.title"></h1>

            <div class="jumbotron-body">
              <p class="lead mb-0 mt-4" v-text="post.excerpt"></p>

              <div class="row justify-content-center">
                <div class="col-md-10">
                  <div class="line"></div>

                  <div class="text-justify" v-html="post.body"></div>
                  <div class="line"></div>
                  <span class="float-right">
                    <i class="fas fa-clock"></i>
                    {{ post.created_at }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["slug"],
  data() {
    return {
      background: "",
      post: {}
    };
  },
  created() {
            const loader = this.$loading.show();

    this.$store.dispatch("retrievePostBySlug", this.slug).then(response => {
      this.post = response.data;
      this.background = response.data.picture;
      loader.hide();
    });
  },
  methods: {
    deletePost() {
      let message = {
        title: "Delete Post",
        body: "The post will be deleted. Are you sure?"
      };
      this.$dialog.confirm(message).then(dialog => {
        const loader = this.$loading.show();

        this.$store.dispatch("deletePost", this.post._id).then(response => {
          loader.hide();
          this.$router.push({ name: "home" });
        });
      });
    }
  },
  computed: {
    dinamicBackground: function() {
      return {
        backgroundImage: `url(/storage/images/${this.background})`,
        backgroundSize: "cover"
      };
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    }
  }
};
</script>
