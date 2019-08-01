import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["addActivity"]),
    addNewActivity(activity) {
      this.addActivity(activity);
    }
  },
  computed: {
    ...mapState(["activities", "moods"])
  }
};
