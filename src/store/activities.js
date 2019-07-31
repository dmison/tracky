import { v4 as uuid } from "uuid";

export const state = {
  activities: []
};

export const mutations = {
  ADD_ACTIVITY(state, activity) {
    if (!state.activities.map(a => a.content).includes(activity)) {
      const newId = uuid();
      state.activities.push({ id: newId, content: activity });
    }
  }
};

export const actions = {
  addActivity({ commit }, activity) {
    commit("ADD_ACTIVITY", activity);
  }
};
