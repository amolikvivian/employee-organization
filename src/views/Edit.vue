<template>
  <div class="bg-transparent py-10 px-12">
    <span class="text-3xl text-gray-300 px-4 header-font"
      >Edit Employee Details.</span
    >
    <div class="flex items-baseline justify-between mt-10">
      <span class="text-gray-400 text-sm">Name</span>
      <textarea
        class="text-md text-white flex items-center border-b focus:border-none focus:outline-none resize-none bg-transparent py-2"
        cols="30"
        rows="1"
        v-model="emp.name"
      ></textarea>
    </div>

    <div class="flex items-baseline justify-between my-4">
      <span class="text-gray-400 text-sm">Email</span>
      <textarea
        class="text-md text-white flex items-center border-b focus:border-none focus:outline-none resize-none bg-transparent py-2"
        cols="30"
        rows="1"
        v-model="emp.email"
      ></textarea>
    </div>

    <div class="flex items-baseline justify-between my-4">
      <span class="text-gray-400 text-sm mr-8">Number</span>
      <textarea
        class="text-md text-white flex items-center border-b focus:border-none focus:outline-none resize-none bg-transparent py-2"
        cols="30"
        rows="1"
        v-model="emp.number"
      ></textarea>
    </div>
    <div class="flex items-center justify-between">
      <button
        @click="updateEmployee()"
        class="py-2 rounded-3xl font-medium flex items-center save-btn px-5 text-gray-200 mt-12"
      >
        <span class="pr-2">Save</span>
        <Icon name="save" />
      </button>
      <button
        @click="discard()"
        class="py-2 rounded-3xl font-medium flex items-center border border-2 px-5 text-gray-200 mt-12"
      >
        <span class="pr-2">Discard</span>
        <Icon name="cross" />
      </button>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: { Icon },
  computed: {
    emp() {
      return this.$store.getters.employee(this.$route.params.id);
    },
  },
  methods: {
    updateEmployee() {
      this.$store.dispatch("updateEmployee", this.emp);
      this.$router.push({ path: "/organization" });
    },
    discard() {
      this.$router.push({ path: "/organization" });
    },
  },
};
</script>

<style>
.header-font {
  border-left: 3px solid var(--yellow-accent);
}
.save-btn {
  border: 2px solid var(--yellow-accent);
  background: var(--yellow-accent);
  color: white;
}
</style>
