---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Base JS SDK"
  text: "Base 插件开发文档"
  tagline: 帮助开发者更轻松地开发插件
  image:
    src: image.svg
  actions:
    - theme: brand
      text: 快速入门
      link: /zh/start/core
    - theme: alt
      text: API 参考
      link: /zh/api/guide
features:
  - icon: 📝
    title: 快速入门 
    details: 快速了解 Base 前端插件开发模式，以及核心概念，帮助外部开发者迅速搭建一个有趣且好用的插件
    link: /zh/start/core
  - icon: 🌟
    title: 旧版本升级指南
    details: 已有插件升级指南，以及相关部分 API 优化和核心优化点
    link: /zh/update.md
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

.image-src {
  width: 100%;
  height: 100%;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  import('./public/mounted').then((module) => {
    // use code
  })
})
</script>


