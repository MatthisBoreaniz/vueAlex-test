<script setup lang="ts">
defineProps<{
    href?: string;
}>();
</script>


<template>
    <a v-if="href" class="button" href=""><slot></slot></a>
    <button v-else class="button"><slot></slot></button>
</template>

<style lang="scss" >
.button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    cursor: pointer;
}
</style>