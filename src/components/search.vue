<script setup>
import { computed, ref, watch, watchEffect } from 'vue';
const animals = ref([
    { name: '小猫' },
    { name: '小狗' },
    { name: '小猪' },
    { name: '小狗dog' }
])

const search = ref('')
const matchAnimals = computed(() => {
    return animals.value.filter(item => item.name.includes(search.value))
})

watch([search, matchAnimals], ([newSearch, newName], [prevSearch, prevName]) => {
    console.log('newSearch', newSearch, newName)
    console.log('prevSearch', prevSearch, prevName)
})

watchEffect(() => {
    console.log('watcheffect执行了', search.value);
})
</script>

<template>
    <h3>search</h3>
    <input type="text" v-model="search" />
    <p v-for="a in matchAnimals" :key="a">
        {{ a.name }}
    </p>
</template>