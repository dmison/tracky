import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuid } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    entries: [],
    moods: { 0: "sad", 1: "meh", 2: "ok", 3: "good" }
  },
  mutations: {
    ADD_ENTRY(state, entry) {
      entry.datetime = Date.now();
      entry.id = uuid();
      state.entries.push(entry);
    },
    UPDATE_ENTRY(state, entry) {
      state.entries.map(e => {
        return e.id === entry.id ? entry : e;
      });
    }
  },
  actions: {
    addEntry({ commit }, value) {
      commit("ADD_ENTRY", value);
    },
    updateEntry({ commit }, value) {
      commit("UPDATE_ENTRY", value);
    }
  },
  getters: {
    getEntry: state => id => {
      return state.entries.find(entry => entry.id === id);
    },
    getMood: state => id => {
      return state.moods[id];
    }
  }
});

// {
//   id: "1",
//   content: "something something",
//   mood_id: 1
// }
