<script setup lang="ts">
defineProps<{
  href?: string
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'giant' | 'large' | 'medium' | 'small' | 'tiny'
  icon?: boolean
  disabled?: boolean
}>()
</script>

<template>
  <a
    v-if="href"
    :href="href"
    class="btn"
    :class="{
      '-outline': variant === 'outline',
      '-ghost': variant === 'ghost',
      '-giant': size === 'giant',
      '-large': size === 'large',
      '-medium': size === 'medium',
      '-small': size === 'small',
      '-tiny': size === 'tiny',
      '-disabled': disabled,
      '-icon': icon
    }"
  >
    <slot></slot>
  </a>

  <button
    v-else
    :disabled="disabled"
    class="btn"
    :class="{
      '-outline': variant === 'outline',
      '-ghost': variant === 'ghost',
      '-giant': size === 'giant',
      '-large': size === 'large',
      '-medium': size === 'medium',
      '-small': size === 'small',
      '-tiny': size === 'tiny',
      '-disabled': disabled,
      '-icon': icon
    }"
  >
    <slot></slot>
  </button>
</template>
