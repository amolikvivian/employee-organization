<template>
  <div class="min-h-screen bg flex items-start">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.bg {
  background-color: var(--blue-darkest);
}
</style>
