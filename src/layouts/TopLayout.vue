<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <!-- サイドバー -->
      <div class="col-3 sidebar bg-white p-3">
        <slot name="side-bar"></slot>
      </div>
      <!-- コンテンツ -->
      <div class="col-9 main-content">
        <!-- ヘッダー -->
        <header class="row">
          <Header />
        </header>
        <!-- メインコンテンツ -->
        <main class="row">
          <slot name="main"></slot>
        </main>
        <!-- フッター -->
        <footer class="row">
          <Footer />
        </footer>
      </div>
    </div>
  </div>
</template>

<style>
header {
    margin-bottom: 20px;
}

.sidebar {
    position: fixed;
    background: linear-gradient(135deg, #3e9afe, #004b9c);
    top: 0;
    left: 0;
    width: 350px;
    height: 100vh;
    color: white;
    text-align: center;
    overflow-y: auto;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    padding: 0%;
    z-index: 1000;
}

.main-content {
    position: fixed;
    margin-left: 350px;
    height: 100vh;
    overflow-y: auto;
    padding: 20px;
}

@media (max-width: 767.98px) {
    .sidebar {
        left: -100%;
    }
    
    .sidebar.show {
        left: 0;
    }
    
    .main-content {
        margin-left: 0;
    }
}
</style>
