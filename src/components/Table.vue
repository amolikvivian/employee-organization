<template>
  <table
    v-if="headers.length > 0"
    class="shadow-lg bg-white border-collapse border rounded"
  >
    <thead>
      <th
        v-for="header in headers"
        :key="header"
        class="bg-blue-100 border text-left px-8 py-4 text-gray-800 font-medium"
      >
        <tr class="text-center">
          {{
            capitalize(header)
          }}
        </tr>
      </th>
    </thead>

    <tbody>
      <tr
        v-for="(emp, i) in data"
        :key="i"
        class="px-2"
        :class="i % 2 == 0 ? 'bg-gray-100' : 'bg-white'"
      >
        <td
          v-for="header in headers"
          :key="header"
          class="px-8 py-4 text-gray-700"
        >
          {{ emp[header] }}
        </td>
      </tr>
    </tbody>
  </table>
  <div v-else>No Data to Show!</div>
</template>

<script>
import { capitalize, builder } from "@/helper.js";

export default {
  props: {
    data: Array,
  },
  computed: {
    headers() {
      if (this.data.length === 0) return [];
      else return Object.keys(builder(this.data[0]));
    },
  },
  data() {
    return {
      capitalize,
    };
  },
};
</script>

<style></style>
