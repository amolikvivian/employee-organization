<template>
  <div class="w-full flex items-center justify-center">
    <div class="flex flex-col text-gray-300 py-10">
      <div class="flex items-center justify-between">
        <Filter @filter="filterData" />
        <router-link
          to="/organization"
          class="flex items-center bg-white px-3 py-2 rounded-3xl text-sm font-medium text-gray-800"
        >
          View Orgaization Structure
          <img
            src="../assets/tree.svg"
            alt="tree"
            height="24"
            width="24"
            class="ml-3"
          />
        </router-link>
      </div>

      <div>
        <Table :data="employeeList" />
      </div>
    </div>
  </div>
</template>

<script>
import Filter from "@/components/Filter";
import Table from "@/components/Table";
export default {
  components: { Filter, Table },
  data() {
    return {
      list: this.$store.getters.employees,
      employeeList: [],
    };
  },
  created() {
    if (this.employeeList.length == 0) this.employeeList = this.list;
  },
  methods: {
    filterData(val, category) {
      this.employeeList = this.list;
      if (val === null || val.length === 0) {
        this.employeeList = this.list;
      } else {
        this.employeeList = this.list.filter((emp) => {
          return emp[category].toLowerCase().includes(val.toLowerCase());
        });
      }
    },
  },
};
</script>

<style>
.red-text {
  color: var(--red-accent);
}
</style>
