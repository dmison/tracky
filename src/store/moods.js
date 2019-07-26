export const state = {
  moods: { 0: "sad", 1: "meh", 2: "ok", 3: "good", 4: "fantastic" }
};

export const getters = {
  getMood: state => id => {
    return state.moods[id];
  }
};
