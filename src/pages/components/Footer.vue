<template>
  <a-layout-footer class="footer">
    <img class="logo" :src="mountainLogoIcon" />
  </a-layout-footer>
</template>

<script lang="ts" setup>
  import mountainLogoIcon from '@/assets/images/mountain_full_logo_400x100.png';
</script>

<style lang="less" scoped>
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    color: var(--color-text-2);
    text-align: center;

    .logo {
      width: 200px;
    }
  }
</style>
