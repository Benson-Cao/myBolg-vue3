<template>
    <div  v-if="posts.length">
        <PostList :posts="postsWithTag" />
        <TagCloud :posts="posts"></TagCloud>
    </div>
</template>
<script setup>
  import { useRoute } from 'vue-router';  
  import getPosts from '../composible/getPosts';
  import { computed } from 'vue';
  import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';

  const route=useRoute()
  const {posts,load}=getPosts()
  load()
//   console.log(posts)

  const postsWithTag=computed(()=>{
    return posts.value.filter(p=>p.tags.includes(route.params.tag))
  })
</script>