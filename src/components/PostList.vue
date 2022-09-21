<script setup>
import SinglePost from './singlePost.vue';
const props = defineProps({
  posts: Array,
});

</script>

<template>
  <div class="post">
    <SinglePost v-for="post in props.posts" :post=post />
  </div>
</template>

<style scoped></style>
