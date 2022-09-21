<script setup>
import PostList from "../components/PostList.vue";
import getPosts from '../composible/getPosts'
import TagCloud from "../components/TagCloud.vue";
const {posts, load}=getPosts()
load()
</script>

<template>

    <div v-if="posts.length" class="main">
        <PostList :posts="posts" class="postlist"></PostList>
        <TagCloud :posts="posts" class="tagcloud"></TagCloud>
    </div>
    <div v-else>加载中···</div>

</template>

<style scoped>
    .main{
        display: flex;
    }
    .postlist{
        flex:3
    }
    .tagcloud{
        flex:1
    }
</style>