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
    class="button"
    :class="{ '-outline': variant === 'outline', '-small': size === 'small' }"
    href=""
    ><slot></slot
  ></a>
  <button
    v-else
    class="button"
    :class="{ '-outline': variant === 'outline', '-small': size === 'small' }"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss">
.button {
  --button-color: var(--color-text);
  --button-bg-color: var(--color-primary);
  --button-border-color: var(--color-primary);
  padding: rem(10) rem(20);
  background: var(--button-bg-color);
  color: var(--button-color);
  border: rem(1) solid var(--button-border-color);
  border-radius: rem(4);
  font-size: var(--font-size-base);
  cursor: pointer;
  &:hover {
    --button-color: var(--color-primary);
    --button-bg-color: transparent;
  }
  &.-small {
    padding: rem(5) rem(10);
  }
  &.-outline {
    --button-color: var(--color-primary);
    --button-bg-color: transparent;
    &:hover {
      --button-color: var(--color-text);
      --button-bg-color: var(--color-primary);
    }
  }
}
</style>
