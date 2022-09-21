<script setup>
import getPost from '../composible/getPost';
import {useRoute} from 'vue-router'
const props = defineProps({
    id: String
});

const route=useRoute()
const { post, load } = getPost(route.params.id)
load()
</script>
    
<template>
    <div v-if="post">
        <h3>{{post.title}}</h3>
        <p>{{post.body}}</p>
        
    </div>
    <div v-else>
        <p>加载中···</p>
    </div>

</template>