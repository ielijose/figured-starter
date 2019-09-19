<template>
  <div>
    <section class="ajumbotron text-center mb-4">
      <div class="container">
        <h1 class="jumbotron-heading">Update Post</h1>
      </div>
    </section>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <form autocomplete="off" @submit.prevent="updatePost" method="post">
            <div class="form-group">
              <input
                type="text"
                id="title"
                class="form-control"
                name="title"
                placeholder="Title"
                v-model="post.title"
              />
            </div>

            <div class="form-group">
              <textarea
                id="excerpt"
                class="form-control"
                name="excerpt"
                placeholder="Excerpt"
                v-model="post.excerpt"
                rows="5"
              />
            </div>

            <div class="form-group">
              <textarea
                id="body"
                class="form-control"
                name="body"
                placeholder="Body"
                v-model="post.body"
                rows="10"
              />
            </div>

            <input type="submit" class="btn btn-success float-right" value="Save" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slug: String
  },
  data() {
    return {
      post: {}
    };
  },
  created() {
    const loader = this.$loading.show();

    this.$store.dispatch("retrievePostBySlug", this.slug).then(response => {
      this.post = response.data;
      loader.hide();
    });
  },
  methods: {
    updatePost() {
      const loader = this.$loading.show();

      this.$store
        .dispatch("updatePost", this.post)
        .then(response => {
          this.$router.push({ name: "home" });
          this.$toasted.success("The Post was updated.");
        })
        .finally(() => {
          loader.hide();
        });
    }
  }
};
</script>
