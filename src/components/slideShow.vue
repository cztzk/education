<template>
    <wc-swiper :duration="1000" :interval="3000"  v-if="slides.length">
        <wc-slide v-for="(item, key) in slides" :key="key">
            <img :src="item.picUrl" :alt="item.title">
        </wc-slide>
    </wc-swiper>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    slides: Array
  }
};
</script>
<style lang="less">
@import url("../assets/common/css/common");
.wc-slide {
  img {
    width: 100%;
    max-width: 100%;
    display: block;
    height: auto;
  }
}
.wc-pagination .wc-dot-active {
  background: #fff;
}
</style>
