<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label for="title">标题</label>
            <input type="text" v-model="title" required>
            <label for="body">内容</label>
            <textarea v-model="body" required></textarea>
            <label for="tag">标签</label>
            <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" />
            <!-- 显示标签 -->
            <div v-for="tag in tags" :key="tag">
                #{{tag}}
            </div>
            <button>添加</button>

        </form>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { useRouter } from 'vue-router';
import { ref } from 'vue';
const title = ref('')
const body = ref('')
const tag = ref('')
const tags = ref([])

const handleKeydown = () => {
    if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, '')
        tags.value.push(tag.value)
    }
    tag.value = ''
}

const routr=useRouter()
const handleSubmit=async()=>{
    const post={
        id:Math.floor(Math.random*10000),
        title:title.value,
        body:body.value,
        tags:tags.value
    }
    const data=await axios.post('http://localhost:3000/post',post)
    if(data.status===201){
        routr.push('/')
    }
}

</script>