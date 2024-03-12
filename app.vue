<template>
  <div>
    <NuxtLayout>
      <NavbarTop />
      <NuxtPage />
      <PageBottom />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
  import NavbarTop from './components/NavbarTop.vue';
  import PageBottom from './components/PageBottom.vue';
  useHead({
    title: 'INnUP'
  })
</script>
<style></style>