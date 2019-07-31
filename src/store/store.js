import Vue from "vue";
import Vuex from "vuex";
import * as entries from "./entries";
import * as moods from "./moods";
import * as activities from "./activities";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { entries, moods, activities }
});
