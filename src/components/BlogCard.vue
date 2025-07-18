<script setup>
const props = defineProps(['post'])
const post = props.post
</script>

<template>
  <div class="card border-0">
    <div class="card-body">
      <h1 class="card-title">{{ post.title }}</h1>
      <div class="d-flex flex-row">
        <div class="me-auto">
          <img src="https://dummyjson.com/icon/lillianb/30" class="rounded-circle" alt="icon" />
          <span class="card-subtitle mb-2 text-body-secondary">John Doe</span>
        </div>
        <div class="mb-2">
          <span class="bi bi-hand-thumbs-up me-2">&nbsp;{{ post.reactions.likes }}</span>
          <span class="bi bi-hand-thumbs-down me-2">&nbsp;{{ post.reactions.dislikes }}</span>
        </div>
      </div>
      <div>
        <span v-for="tag in post.tags" class="badge text-bg-secondary me-1">{{ tag }}</span>
      </div>
      <p class="card-text">{{ post.body }}</p>
    </div>
  </div>
</template>
