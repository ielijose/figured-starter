<template>
  <div>
    <section class="ajumbotron text-center mb-4">
      <div class="container">
        <h1 class="jumbotron-heading">Add new Post</h1>
      </div>
    </section>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <form autocomplete="off" @submit.prevent="addPost" method="post">
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

            <input type="submit" class="btn btn-primary float-right" value="Add" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        excerpt: "",
        body: ""
      }
    };
  },
  methods: {
    addPost() {
      const loader = this.$loading.show();

      this.$store
        .dispatch("addPost", this.post)
        .then(response => {
          this.$router.push({ name: "home" });
          this.$toasted.success("The Post was created.");
        })
        .catch(error => {
          this.$toasted.error("Error creating the post.");
        })
        .finally(() => {
          loader.hide();
        });
    }
  }
};
</script>
