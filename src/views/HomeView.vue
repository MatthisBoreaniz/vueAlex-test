<script setup lang="ts">
import MyButton from '@/components/MyButton.vue'
</script>

<template>
  <main>
    <h1>HP</h1>

    <div>
      <MyButton>Default</MyButton>
      <MyButton disabled>Disabled Default</MyButton>
      <MyButton variant="outline">Outline</MyButton>
      <MyButton variant="outline" disabled>Outline Disabled</MyButton>
      <MyButton variant="ghost">Ghost</MyButton>
      <MyButton variant="ghost" disabled>Ghost Disabled</MyButton>
    </div>

    <div>
      <MyButton size="giant">Giant</MyButton>
      <MyButton size="large">Large</MyButton>
      <MyButton size="medium">Medium</MyButton>
      <MyButton size="small">Small</MyButton>
      <MyButton size="tiny">Tiny</MyButton>
    </div>

    <div>
      <MyButton size="giant" variant="outline">Giant Outline</MyButton>
      <MyButton size="large" variant="outline">Large Outline</MyButton>
      <MyButton size="medium" variant="outline">Medium Outline</MyButton>
      <MyButton size="small" variant="outline">Small Outline</MyButton>
      <MyButton size="tiny" variant="outline">Tiny Outline</MyButton>
    </div>
<div>
  
      <MyButton size="giant" variant="ghost">Giant Ghost</MyButton>
      <MyButton size="large" variant="ghost">Large Ghost</MyButton>
      <MyButton size="medium" variant="ghost">Medium Ghost</MyButton>
      <MyButton size="small" variant="ghost">Small Ghost</MyButton>
      <MyButton size="tiny" variant="ghost">Tiny Ghost</MyButton>
</div>

    <div>
      <MyButton icon>←</MyButton>
      <MyButton variant="outline" icon>←</MyButton>
      <MyButton variant="ghost" icon>←</MyButton>
    </div>

    <div>
      <MyButton href="/about">Link Default</MyButton>
      <MyButton href="/about" variant="outline">Link Outline</MyButton>
      <MyButton href="/about" variant="ghost">Link Ghost</MyButton>
      <MyButton href="/about" size="small">Link Small</MyButton>
      <MyButton href="/about" size="large" variant="outline"> Link Large Outline </MyButton>
    </div>
  </main>
</template>
