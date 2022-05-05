<template>
  <div>
    <input
      class="bg-white h-10 px-4 pr-16 w-80 rounded-3xl text-sm focus:outline-none text-blue-900"
      type="text"
      v-model="search"
      name="search"
      placeholder="Search"
    />
    <button class="absolute mt-2 -ml-8">
      <Icon name="search" />
    </button>
    <button
      v-if="search"
      @click="clearSearch()"
      class="absolute mt-3 -ml-14"
    >
      <Icon name="delete" />
    </button>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: { Icon },
  data() {
      return {
          search: ''
      }
  },
  methods: {
      clearSearch() {
          this.search = ''
      }
  }
};
</script>

<style></style>
