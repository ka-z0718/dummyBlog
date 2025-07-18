<script setup>
const isDev = import.meta.env.MODE === 'development';
</script>

<template>
  <!-- ロゴタイトル -->
  <div class="sidebar-header">
    <h4><i class="bi bi-grid-3x3-gap"></i>&nbsp;Inspiria</h4>
  </div>
  <!-- 検索ボックス -->
  <div class="search-container m-4">
    <div class="position-relative">
      <i class="bi bi-search search-icon"></i>
      <input type="text" class="search-input" placeholder="Search...">
    </div>
  </div>
  <!-- ピックアップ情報 -->
  <div class="pickup-info">
    <h1>あなただけのストーリーを、世界へ。</h1>
    <p>Inspiriaは個性を輝かせるブログサービスです。</p>
  </div>
  <template v-if="isDev">
    <span class="badge text-bg-success">DEV</span>
  </template>
</template>

<style>
.sidebar-header {
    padding: 20px;
    color: white;
    text-align: center;
}

.sidebar-header h4 {
    margin: 0;
    font-weight: 700;
}

.search-input {
    opacity: 0.33;
    border: 0;
    border-radius: 0.375rem;
    padding: 0.5rem 0.75rem 0.5rem 2.5rem;
    width: 100%;
    transition: opacity 0.15s ease-in-out;
}

.search-input::placeholder {
  opacity: 1;
  color: rgb(57, 52, 142);
}

.search-input:focus {
    opacity: 0.9;
    outline: none;
    box-shadow: none;
    border-color: #ced4da;
}

.search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgb(21, 18, 100);
    pointer-events: none;
}
</style>
