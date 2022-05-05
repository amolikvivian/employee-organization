<template>
  <div class="p-6 flex items-center">
    <Root :item="item" />
  </div>
</template>

<script>
import Root from "@/components/Root";
export default {
  name: "Home",
  components: {
    Root,
  },
  computed: {
    item() {
      return this.$store.getters.employeeDataObject[0]
    }
  }
};
</script>

<style>
.root {
  min-height: 80vh;
}
</style>
