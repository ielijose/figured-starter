<template>
  <div class="row">
    <div class="col-md-12">
      <div v-for="item in list" :key="item._id">
        <div class="row">
          <div class="col-md-9">
            <h2>
              <router-link :to="{name: 'post', params: {slug: item.slug}}" v-text="item.title"></router-link>
            </h2>
            <p>{{item.excerpt}}</p>
          </div>
          <div class="col-md-3">
            <router-link :to="{name: 'post', params: {slug: item.slug}}">
              <img v-bind:src="'/storage/images/' + item.picture" class="img-thumbnail float-right" />
            </router-link>
          </div>

          <div class="line"></div>
        </div>
      </div>
      <div v-if="!loading">
        <infinite-loading @distance="1" @infinite="infiniteHandler">
          <div slot="no-more">--</div>
          <div slot="spinner">Loading...</div>
          <div slot="no-results">No Results</div>
        </infinite-loading>
      </div>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "posts",
  components: {
    InfiniteLoading
  },
  data() {
    return {
      list: [],
      loading: true
    };
  },
  computed: {
    postList() {
      return this.$store.posts;
    }
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case "retrievePosts":
          const { posts } = state.posts;
          this.list = posts;
          this.loading = false;
          break;
      }
    });
    this.list = this.$store.getters.postList;
    this.loading = false;
  },
  methods: {
    infiniteHandler($state) {
      this.$store.dispatch("retrievePosts").then(response => {
        let posts = response.data.data;

        if (posts.length) {
          $state.loaded();
        } else {
          $state.complete();
        }
        this.loading = false;
      });
    }
  }
};
</script>
