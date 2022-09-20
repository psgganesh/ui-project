<template>
  <Nuxt />
</template>

<script>
export default {
  layout: 'auth',
  head: {
    htmlAttrs: {
      class: 'h-full bg-amber-200'
    },
    bodyAttrs: {
      class: 'h-full'
    }
  }
}
</script>
