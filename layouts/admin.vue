<template>
  <Nuxt />
</template>

<script>
export default {
  layout: 'auth',
  head: {
    htmlAttrs: {
      class: 'h-full bg-gray-100'
    },
    bodyAttrs: {
      class: 'h-full'
    }
  }
}
</script>
