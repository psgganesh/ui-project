<template>
  <div>
    <div class="header">
      <h1>Routes overview</h1>
      <nuxt-link to="/">Go back to index</nuxt-link>
    </div>
    <div class="info">
      <h1>There are {{$router.options.routes.length}} available routes by nuxtjs</h1>
    </div>
    <div class="wrapper">
      <table id="routes">
        <tr>
          <th class="text-lg text-center">route.name</th>
          <th class="text-lg text-center">route.path</th>
        </tr>
        <tr v-for="route in $router.options.routes">
          <td>
            <nuxt-link :to="route.path" >{{ route.name }}</nuxt-link>
          </td>
          <td>
            <nuxt-link :to="route.path">{{route.path}}</nuxt-link>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  layout: "routes"
}
</script>
