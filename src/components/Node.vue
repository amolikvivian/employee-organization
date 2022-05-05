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
        class="px-1 py-2 border-l-4 w-80 shadow-md flex items-center bg-gray-100 justify-between card shadow-xl"
        @mouseenter="showOptions = true"
        @mouseleave="showOptions = false"
        :class="checkPos(item)"
      >
        <div class="flex items-center">
          <Icon name="user" />
          <div class="flex flex-col px-2 text-sm">
            <span>{{ item.name }}</span>
            <span class="tracking-wide text-gray-500 text-xs"
              >{{ item.position }} {{ item.isLead || item.isMember ? '- ' + item.teamId : "" }}</span
            >
          </div>
        </div>
        <div v-if="showOptions" class="flex items-center">
          <div @click="toEdit()" class="cursor-pointer" title="Edit Name">
            <Icon name="edit" />
          </div>
          <div
            @click="deleteItem(item)"
            class="px-2 ml-1 cursor-pointer"
            title="Delete Employee"
          >
            <Icon name="delete" />
          </div>
        </div>
      </div>
      <div
        v-if="item.isLead || item.isHead"
        class="cursor-pointer ml-2 text-sm flex items-center text-gray-200 border border-white px-1 rounded-full py-1"
        :title="addMessage"
        @click="toggleAddModal(item)"
      >
        <Icon name="plus" />
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
      v-if="showAddMemberModal"
      :type="member"
      :data="item"
      @addMember="addMember"
    />
    <Modal
      v-if="showAddTeamModal"
      :type="team"
      :data="item"
      @addTeam="addTeam"
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
    };
  },
  computed: {
    addMessage() {
      let msg;
      if (this.item.isLead) {
        msg = "Add Member";
      }
      if (this.item.isHead) {
        msg = "Add Team";
      }
      return msg;
    },
  },

  methods: {
    expand() {
      this.showChildren = !this.showChildren;
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
    toggleAddModal(item) {
      if (item.isHead) this.showAddTeamModal = !this.showAddTeamModal;
      if (item.isLead) this.showAddMemberModal = !this.showAddMemberModal;
    },
    addMember(ob) {
      this.$store.state.employees.push(ob);
      this.showChildren = true;
      this.showAddMemberModal = false;
    },
  },
};
</script>

<style>
.card {
  transition: all 0.1s ease-in-out;
}
</style>
