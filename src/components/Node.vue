<template>
  <div class="">
    <div class="flex items-center my-2">
      <div
        v-if="item.children && item.children.length > 0"
        class="h-5 w-5 text-white border-2 border-white rounded-full text-tiny flex items-center justify-center cursor-pointer font-semibold"
        @click="expand()"
      >
        <span v-if="!showChildren">{{
          item.children.length > 0 ? item.children.length : 0
        }}</span>
        <Icon v-if="showChildren" name="minus" />
      </div>
      <div
        v-if="
          item.children == null || (item.children && item.children.length == 0)
        "
        class="h-5 w-5 text-white border-2 border-white rounded-full text-tiny flex items-center justify-center cursor-pointer font-semibold"
      >
        <Icon name="right" />
      </div>
      <hr class="w-4" :class="checkPos(item)" />
      <div
        class="px-1 py-2 border-l-4 w-80 shadow-md flex items-center bg-gray-100 justify-between shadow-xl"
        @mouseenter="showOptions = true"
        @mouseleave="showOptions = false"
        :class="checkPos(item)"
        @click="expand()"
      >
        <div class="flex items-center">
          <Icon name="user" />
          <div class="flex flex-col px-2 text-sm">
            <span>{{ item.name }}</span>
            <span class="tracking-wide text-gray-500 text-xs"
              >{{ item.position }}
              {{ item.isLead || item.isMember ? "- " + item.teamId : "" }}</span
            >
          </div>
        </div>
        <div v-if="showOptions" class="flex items-center">
          <div @click="toEdit()" class="cursor-pointer" title="Edit Name">
            <Icon name="edit" />
          </div>
          <div
            v-if="item.isMember"
            @click="switchTeam()"
            class="pl-2 cursor-pointer"
            title="Switch Teams"
          >
            <Icon name="switch" />
          </div>
          <div
            @click="deleteItem(item)"
            class="px-2 cursor-pointer"
            title="Delete Employee"
          >
            <Icon name="delete" />
          </div>
        </div>
      </div>
      <div
        v-if="item.isLead || item.isHead"
        class="cursor-pointer ml-2 text-sm flex items-center text-gray-200 border border-white px-1 rounded-full py-1"
        :title="getTitle"
        @click="toggleAddModal(item)"
      >
        <Icon name="plus" />
      </div>
      <div v-if="showSwitch" class="flex items-center justify-between ml-5">
        <select
          v-model="newTeamId"
          class="w-20 px-2 py-1"
          @change="toggleSwitchOptions()"
        >
          <option v-for="team in teamIds" :key="team" :value="team">
            {{ team }}
          </option>
        </select>
        <div class="ml-4 mt-2" v-if="showSwitchOptions">
          <button @click="confirmSwitch" class=""><Icon name="tick" /></button>
          <button @click="cancelSwitch" class="ml-2">
            <Icon name="cross" />
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="item.children && item.children.length > 0"
      v-show="showChildren"
      class="flex items-baseline flex-col"
      :class="`pl-8`"
    >
      <Node v-for="child in item.children" :item="child" :key="child.id" />
    </div>
    <Modal
      v-if="showModal"
      :type="getType"
      :data="item"
      @addMember="addMember"
      @cancel="cancel"
    />
  </div>
</template>
<script>
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
export default {
  props: {
    item: Object,
  },
  components: { Icon, Modal },
  data() {
    return {
      showChildren: false,
      showMenu: false,
      showOptions: false,
      showAddMemberModal: false,
      showAddTeamModal: false,
      showModal: false,
      showSwitch: false,
      showSwitchOptions: false,
      newTeamId: this.item.teamId,
    };
  },
  computed: {
    getTitle() {
      let msg;
      if (this.item.isLead) {
        msg = "Add Member";
      }
      if (this.item.isHead) {
        msg = "Add Team";
      }
      return msg;
    },
    getType() {
      let type;
      if (this.item.isLead) {
        type = "member";
      }
      if (this.item.isHead) {
        type = "team";
      }
      return type;
    },
    teamIds() {
      let arr = this.$store.getters.teamByDept(this.item.deptId).map((team) => {
        return team.teamId;
      });
      arr = arr.filter((ele) => ele != undefined);
      return [...new Set(arr)];
    },
  },

  methods: {
    expand() {
      this.showChildren = !this.showChildren;
    },
    switchTeam() {
      this.showSwitch = !this.showSwitch;
    },
    toEdit() {
      this.$router.push({ path: `/edit/${this.item.id}` });
    },
    checkPos(item) {
      if (item.isRoot) {
        return "border-red-400";
      }
      if (item.isHead) {
        return "border-yellow-400";
      }
      if (item.isLead) {
        return "border-green-400";
      }
      if (item.isMember) {
        return "border-blue-400";
      }
    },
    deleteItem(item) {
      if (item.isRoot !== null && item.isRoot == true) {
        alert("Cant Delete Root");
      } else {
        this.$store.dispatch("deleteEmployee", item);
      }
    },
    toggleAddModal() {
      this.showModal = !this.showModal;
    },
    addMember(ob) {
      this.$store.dispatch("addEmployee", ob);
      this.showChildren = true;
      this.cancel();
    },
    toggleSwitchOptions() {
      if (this.newTeamId != this.item.teamId) {
        this.showSwitchOptions = true;
      } else {
        this.showSwitchOptions = false;
      }
    },
    confirmSwitch() {
      const currentItem = {
        ...this.item,
      };
      const newItem = {
        ...this.item,
        teamId: this.newTeamId,
      };
      this.deleteItem(currentItem);
      this.addMember(newItem);
    },
    cancelSwitch() {
      this.showSwitchOptions = false;
    },
    cancel() {
      this.showModal = false;
    },
  },
};
</script>

<style></style>
