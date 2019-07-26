import { v4 as uuid } from "uuid";

export const state = {
  entries: []
};

export const mutations = {
  ADD_ENTRY(state, entry) {
    state.entries.push({
      id: uuid(),
      content: entry.content,
      mood_id: entry.mood_id,
      datetime: new Date()
    });
  },
  UPDATE_ENTRY(state, entry) {
    state.entries.map(e => {
      return e.id === entry.id ? entry : e;
    });
  }
};

export const actions = {
  addEntry({ commit }, value) {
    commit("ADD_ENTRY", value);
  },
  updateEntry({ commit }, value) {
    commit("UPDATE_ENTRY", value);
  }
};

export const getters = {
  getEntry: state => id => {
    return state.entries.find(entry => entry.id === id);
  },
  getEntries: (state, getters, rootState) => {
    return state.entries.map(e => {
      e.mood = rootState.moods.moods[e.mood_id];
      return e;
    });
  }
};
