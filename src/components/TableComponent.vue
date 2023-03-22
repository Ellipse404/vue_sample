<template>
    <pre>
        {{ textProps }}
    </pre>
  </template>
  
  <script setup lang="ts">
    defineProps<{
        textProps: string | number
    }>()
  </script>