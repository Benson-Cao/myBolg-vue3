<template>
    <div>
        <h3>标签</h3>
        <div v-for="tag in tags" :key="tag">
            <router-link :to="{name:'Tag', params:{tag}}">#{{tag}}</router-link> 
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
    posts: Array
})

const tags = ref([])
const tagSet = new Set()

props.posts.forEach(item => {
    item.tags.forEach(tag => {
        tagSet.add(tag)
    })
})

tags.value=[...tagSet]


</script>