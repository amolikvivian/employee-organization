import { createStore } from "vuex";
import { transform } from "@/helper.js";
import VuexPersistence from "vuex-persist";

export default createStore({
  state: {
    employees: [
      {
        id: 0,
        position: "CEO",
        name: "John CEO Smith",
        dept: "Management",
        deptId: "000",
        number: 1234567890,
        email: "john@smith.com",
        isRoot: true,
      },
      {
        id: 1,
        position: "Head",
        name: "John HR Smith",
        dept: "HR",
        deptId: "00HR",
        number: 1234567890,
        email: "john@smith.com",
        isHead: true,
      },
      {
        id: 2,
        position: "Team Lead",
        name: "John Lead",
        teamId: "T001",
        dept: "HR",
        deptId: "00HR",
        number: 1234567890,
        email: "john@smith.com",
        isLead: true,
      },
      {
        id: 3,
        position: "Team Member",
        name: "John Member",
        teamId: "T001",
        dept: "HR",
        deptId: "00HR",
        number: 1234567890,
        email: "john@smith.com",
        isMember: true,
      },
      {
        id: 4,
        position: "Team Member",
        name: "John Member",
        teamId: "T001",
        dept: "HR",
        deptId: "00HR",
        number: 1234567890,
        email: "john@smith.com",
        isMember: true,
      },
      {
        id: 5,
        position: "Head",
        name: "John Er Smith",
        dept: "Engineering",
        deptId: "00ER",
        number: 1234567890,
        email: "john@smith.com",
        isHead: true,
      },
      {
        id: 6,
        position: "Team Lead",
        name: "John Lead",
        teamId: "T002",
        dept: "Engineering",
        deptId: "00ER",
        number: 1234567890,
        email: "john@smith.com",
        isLead: true,
      },
      {
        id: 7,
        position: "Team Member",
        name: "John Member",
        teamId: "T002",
        dept: "Engineering",
        deptId: "00ER",
        number: 1234567890,
        email: "john@smith.com",
        isMember: true,
      },
      {
        id: 8,
        position: "Team Member",
        name: "John Member",
        teamId: "T002",
        dept: "Engineering",
        deptId: "00ER",
        number: 1234567890,
        email: "john@smith.com",
        isMember: true,
      },
      {
        id: 9,
        position: "Head",
        name: "John Design Smith",
        dept: "Design",
        deptId: "00DS",
        number: 1234567890,
        email: "john@smith.com",
        isHead: true,
      },
      {
        id: 10,
        position: "Team Lead",
        name: "John Lead",
        teamId: "T003",
        dept: "Design",
        deptId: "00DS",
        number: 1234567890,
        email: "john@smith.com",
        isLead: true,
      },
      {
        id: 11,
        position: "Team Member",
        name: "John Member",
        teamId: "T003",
        dept: "Design",
        deptId: "00DS",
        number: 1234567890,
        email: "john@smith.com",
        isMember: true,
      },
      {
        id: 12,
        position: "Team Lead",
        name: "John Lead",
        teamId: "T004",
        dept: "Engineering",
        deptId: "00ER",
        number: 1234567890,
        email: "john@smith.com",
        isLead: true,
      },
      {
        id: 13,
        position: "Team Member",
        name: "John Member",
        teamId: "T004",
        dept: "Engineering",
        deptId: "00ER",
        number: 1234567890,
        email: "john@smith.com",
        isMember: true,
      },
    ],
  },

  mutations: {
    ADD(state, data) {
      state.employees.push(data)
    },
    DELETE(state, id) {
      state.employees = state.employees.filter((emp) => {
        return emp.id !== id;
      });
    },
    UPDATE(state, data) {
      let idx = state.employees.findIndex((emp) => emp.id == data.id);
      state.employees[idx] = data;
    },
  },
  actions: {
    addEmployee({commit}, payload) {
      commit("ADD", payload)
    },
    deleteEmployee({ commit }, payload) {
      commit("DELETE", payload.id);
    },
    updateEmployee({ commit }, payload) {
      commit("UPDATE", payload);
    },
    switchTeam({ commit }, payload) {
      commit("SWITCH_TEAM", payload);
    },
  },
  modules: {},
  getters: {
    employee: (state) => (id) => {
      return state.employees.filter((emp) => {
        return emp.id == id;
      })[0];
    },
    employeeDataObject(state) {
      return transform(state.employees);
    },
    employees(state) {
      return state.employees;
    },
    teamByDept: (state) => (deptId) => {
      return state.employees.filter((emp) => {
        return emp.deptId == deptId;
      });
    },
  },
  plugins: [new VuexPersistence().plugin],
});
