<script setup>
import { ref, onMounted } from 'vue'
import { getPosts } from '@/functions/posts.js'

import TopLayout from '@/layouts/TopLayout.vue'

import BlogList from '@/components/BlogList.vue'
import SideBar from '@/components/SideBar.vue'

const posts = ref([])

onMounted(async () => {
    posts.value = await getPosts();
})
</script>

<template>
    <TopLayout>
        <template #side-bar>
            <SideBar />
        </template>
        <template #main>
            <BlogList :posts="posts" />
        </template>
    </TopLayout>
</template>
