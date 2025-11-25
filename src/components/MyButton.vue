<script setup lang="ts">
defineProps<{
  href?: string
  variant?: 'default' | 'outline'
  size?: 'default' | 'small'
}>()
</script>

<template>
  <a
    v-if="href"
    class="btn"
    :class="{ '-outline': variant === 'outline', '-small': size === 'small' }"
    href=""
    ><slot></slot
  ></a>
  <button
    v-else
    class="btn"
    :class="{ '-outline': variant === 'outline', '-small': size === 'small' }"
  >
    <slot></slot>
  </button>
</template>


