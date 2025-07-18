<script setup>
import BlogCard from '@/components/BlogCard.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <!-- サイドバー -->
      <div class="col-3 sidebar bg-white p-3">
        <!-- ロゴタイトル -->
        <Sidebar />
      </div>
      <!-- メインコンテンツ -->
      <main class="col-9 main-content">
        <!-- ヘッダー -->
        <header class="row">
          <Header />
        </header>
        <!-- カード -->
        <div class="row">
          <BlogCard />
        </div>
        <!-- カード -->
        <div class="row">
          <BlogCard />
        </div>
        <!-- メインコンテンツ -->
        <div class="row">
          <div class="col-12">
            <h1 class="mb-4">メインコンテンツエリア</h1>
            <div class="card">
              <div class="card-header">
                <h5 class="card-title mb-0">
                  <i class="bi bi-info-circle me-2"></i>サイドナビゲーションの特徴
                </h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <h6><i class="bi bi-check-circle text-success me-2"></i>レスポンシブ対応</h6>
                    <p class="text-muted">モバイルデバイスでは折りたたみ可能</p>

                    <h6><i class="bi bi-check-circle text-success me-2"></i>ホバーエフェクト</h6>
                    <p class="text-muted">マウスオーバー時のスムーズなアニメーション</p>

                    <h6><i class="bi bi-check-circle text-success me-2"></i>アクティブ状態</h6>
                    <p class="text-muted">現在のページを視覚的に表示</p>
                  </div>
                  <div class="col-md-6">
                    <h6><i class="bi bi-check-circle text-success me-2"></i>アイコン付きメニュー</h6>
                    <p class="text-muted">Bootstrap Iconsを使用</p>

                    <h6><i class="bi bi-check-circle text-success me-2"></i>セクション分け</h6>
                    <p class="text-muted">メニューを論理的にグループ化</p>

                    <h6><i class="bi bi-check-circle text-success me-2"></i>モダンなデザイン</h6>
                    <p class="text-muted">シャドウとグラデーションを使用</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mt-4">
              <div class="card-body">
                <h5 class="card-title">使用方法</h5>
                <ul class="list-unstyled">
                  <li><strong>デスクトップ：</strong> サイドバーは常に表示されます</li>
                  <li><strong>モバイル：</strong> 左上のハンバーガーメニューをタップしてサイドバーを開閉</li>
                  <li><strong>ナビゲーション：</strong> 各メニュー項目をクリックするとアクティブ状態が切り替わります</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- フッター -->
        <footer class="row">
          <Footer />
        </footer>
      </main>
    </div>
  </div>
</template>

<style>
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