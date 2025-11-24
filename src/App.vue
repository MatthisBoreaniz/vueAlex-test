<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <DefaultLayout>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </DefaultLayout>
</template>
