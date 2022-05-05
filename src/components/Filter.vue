<template>
  <div class="flex flex-col mb-10 items-start">
    <div class="flex items-center mt-10">
      <button
        @click="toggleShowFilter()"
        class="py-2 px-5 rounded-3xl font-medium flex items-center"
        :class="showFilter == true ? 'active' : 'inactive'"
      >
        <span class="pr-2">Filters</span>
        <Icon name="filter" />
      </button>
      <div v-if="showFilter" class="flex items-center ml-2">
        <Icon name="right" />

        <button
          v-for="chip in chips"
          :key="chip"
          @click="selectChip(chip)"
          class="px-2 py-1 rounded-3xl text-sm mx-2"
          :class="
            chip.value == selectedChip.value ? 'selectedFilter' : 'inactive'
          "
        >
          {{ chip.name }}
        </button>
      </div>
      <div v-if="showInput" class="flex items-center ml-2">
        <Icon name="right" />
        <input
          @keyup="filter()"
          type="text"
          v-model="filterString"
          class="w-full ml-4 py-2 px-1 text-sm border-b-2 border-gray-400 outline-none bg-transparent focus:border-blue-400"
          :placeholder="'Filter by ' + selectedChip.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: { Icon },
  data() {
    return {
      showFilter: false,
      showInput: false,
      selectedChip: {
        name: null,
        value: null,
      },
      filterString: null,
      chips: [
        {
          name: "Name",
          value: "name",
        },
        {
          name: "Department",
          value: "dept",
        },
        {
          name: "Phone",
          value: "number",
        },
        {
          name: "Email",
          value: "email",
        },
      ],
    };
  },
  methods: {
    toggleShowFilter() {
      this.showFilter = !this.showFilter;
      this.showInput = false;
      this.filterOption = null;
      this.filterString = null;
      this.selectedChip = {
        name: null,
        value: null,
      };
    },
    selectChip(chip) {
      this.selectedChip = chip;
      this.showInput = true;
    },
    filter() {
      this.$emit("filter", this.filterString, this.selectedChip.value);
    },
  },
};
</script>

<style>
.active {
  background-color: var(--red-accent);
  border: 2px solid var(--red-accent);
  color: white;
}
.selectedFilter {
  background-color: white;
  border: 2px solid white;
  color: var(--blue-darkest);
}
.inactive {
  border: 2px solid white;
}
.inactive:hover {
  border: 2px solid var(--red-accent);
}
</style>
