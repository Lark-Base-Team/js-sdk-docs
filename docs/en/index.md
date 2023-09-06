---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Base JS SDK"
  text: "Base Plugin Development Documentation"
  tagline: "Helping Developers Build Plugins Easier"
  image:
    src: image.svg
  actions:
    - theme: brand
      text: "Quick Start"
      link: en/start
    - theme: alt
      text: "API Reference"
      link: en/api/guide
features:
  - icon: 📝
    title: "Quick Start"
    details: "Get a quick understanding of the Base frontend plugin development model and core concepts to help external developers quickly build an interesting and useful plugin."
    link: en/start
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


