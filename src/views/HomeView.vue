<script setup lang="ts">
import MyButton from '@/components/MyButton.vue'
</script>

<template>
  <main>
    <h1>HP</h1>
    <MyButton>Button</MyButton>
    <MyButton class="outline">Link</MyButton>
    <MyButton href="/about" variant="outline">Click me Outline !</MyButton>
    <MyButton size="small">Click me !</MyButton>
    <MyButton href="/about" variant="outline" size="small">Click me Outline !</MyButton>
  </main>
</template>
