<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-12">
        <posts></posts>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from "../components/PostsComponent.vue";

export default {
  name: "home",
  components: { Posts }
};
</Script>
