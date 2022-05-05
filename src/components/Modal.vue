<template>
  <div
    class="w-80 bg-transparent ml-9 my-4 p-4"
    :class="type == 'member' ? 'add-member' : 'add-team'"
  >
    <div>
      <span class="text-lg text-gray-200">
        Enter New Team {{ type == "member" ? "Member" : "Lead" }} Details
      </span>
      <div class="flex items-center py-2 mt-3">
        <label for="name" class="text-sm text-gray-400">Name</label>
        <input
          type="text"
          v-model="name"
          class="px-1 ml-3 outline-none bg-transparent border-b-2 border-gray-400 text-white"
        />
      </div>
      <div class="flex items-center py-2">
        <label for="email" class="text-sm text-gray-400">Email</label>
        <input
          type="email"
          v-model="email"
          class="px-1 ml-4 outline-none bg-transparent border-b-2 border-gray-400 text-white"
        />
      </div>
      <div class="flex items-center py-2">
        <label for="phone" class="text-sm text-gray-400">Phone</label>
        <input
          type="text"
          v-model="number"
          class="px-1 ml-2 outline-none bg-transparent border-b-2 border-gray-400 text-white"
        />
      </div>
      <div v-if="type == 'team'">
        <div class="flex items-center py-2">
          <label for="name" class="text-sm text-gray-400">Team</label>
          <input
            type="text"
            v-model="teamName"
            placeholder="Start team name with T00.."
            class="px-1 ml-3 outline-none bg-transparent border-b-2 border-gray-400 text-white"
          />
        </div>
      </div>
    </div>

    <div class="text-gray-200 text-sm flex items-center justify-between">
      <button
        class="mt-4 px-4 py-1"
        :class="type == 'member' ? 'bg-blue-400' : 'bg-green-400'"
        @click="type == 'member' ? addMember() : addTeam()"
      >
        Add New {{ capitalize(type) }}
      </button>
      <button
        class="mt-4 px-4 py-1 border-2"
        :class="type == 'member' ? 'border-blue-400' : 'border-green-400'"
        @click="cancel()"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import { capitalize } from "@/helper.js";
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
      teamName: null,
      capitalize,
    };
  },
  methods: {
    addMember() {
      let ob = {
        id: "22e12",
        position: "Team Member",
        name: this.name,
        teamId: this.data.teamId,
        dept: this.data.dept,
        deptId: this.data.deptId,
        number: this.number,
        email: this.email,
        isMember: true,
      };
      this.$emit("addMember", ob);
    },
    addTeam() {
      let isDuplicate = this.$store.getters.employees.some((emp) => {
        return emp.teamId == this.teamName;
      });
      if (isDuplicate) {
        alert("Cannot have same team names");
      } else {
        let ob = {
          id: "12daa",
          position: "Team Lead",
          name: this.name,
          teamId: this.teamName,
          dept: this.data.dept,
          deptId: this.data.deptId,
          number: this.number,
          email: this.email,
          isLead: true,
        };
        this.$emit("addMember", ob);
      }
    },
    cancel() {
      this.$emit("cancel");
    },
    checkNum(num) {
      if (num.match(/^[0-9]+$/) == null) {
        return false;
      }
    },
  },
};
</script>

<style>
.add-member {
  border: 3px solid #60a5fa;
}
.add-team {
  border: 3px solid #4ade80;
}
</style>
