<template>
  <div class="w-80 bg-gray-100 shadow-2xl ml-9 my-4 p-4 rounded-lg">
    <div class="flex items-center py-2">
      <label for="name" class="text-sm">Name</label>
      <input
        type="text"
        v-model="name"
        class="px-2 ml-3 outline-none bg-transparent border-b-2 border-gray-400"
      />
    </div>
    <div class="flex items-center py-2">
      <label for="email" class="text-sm">Email</label>
      <input
        type="email"
        v-model="email"
        class="px-2 ml-4 outline-none bg-transparent border-b-2 border-gray-400"
      />
    </div>
    <div class="flex items-center py-2">
      <label for="phone" class="text-sm">Phone</label>
      <input
        type="text"
        v-model="number"
        class="px-2 ml-2 outline-none bg-transparent border-b-2 border-gray-400"
      />
    </div>
    <div class="text-right">
      <button class="mt-4" @click="add()">Add New Member</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    data: Object,
  },
  data() {
    return {
      name: null,
      email: null,
      number: null,
    };
  },
  methods: {
    add() {
      let emp = this.data;
      let ob = {
        id: "22e12",
        position: "Team Member",
        name: this.name,
        teamId: emp.teamId,
        dept: emp.dept,
        deptId: emp.deptId,
        number: this.number,
        email: this.email,
        isMember: true,
      };
      this.$emit("addMember", ob);
    },
  },
};
</script>

<style></style>
