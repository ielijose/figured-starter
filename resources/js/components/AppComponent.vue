<template>
  <div class="wrapper">
    <div id="content">
      <transition name="slide-fade" mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
