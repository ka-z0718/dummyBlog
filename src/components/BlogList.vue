<script setup>
import BlogCard from '@/components/BlogCard.vue'

const props = defineProps(['posts'])
</script>

<template>
    <div v-if="props.posts.length > 0" v-for="post in props.posts" :key="post.id" class="row">
        <BlogCard :post="post" />
    </div>
    <div v-else>
        <strong>ポストがありません。</strong>
    </div>
</template>
