<script>
import MoodSelector from "./MoodSelector.vue";
import ActivitySelector from "./ActivitySelector.vue";
import { mapState } from "vuex";

export default {
  props: {
    entry: Object,
    actionName: String
  },
  computed: {
    ...mapState(["moods", "activities"])
  },
  components: {
    "mood-selector": MoodSelector,
    "activity-selector": ActivitySelector
  },
  methods: {
    setMood(id) {
      this.entry.mood_id = id;
    },
    setActivity(activity_id) {
      if (this.entry.activities.includes(activity_id)) {
        this.entry.activities = this.entry.activities.filter(
          a => a !== activity_id
        );
      } else this.entry.activities.push(activity_id);
    }
  }
};
</script>

<template>
  <div>
    <textarea v-model="entry.content" placeholder="Notes" />
    <mood-selector
      :value="entry.mood_id"
      @set-mood="setMood"
      :moods="moods.moods"
    />
    <activity-selector :value="entry.activities" @set-activity="setActivity" />
    <button @click="$emit('entry-action', entry)">{{ actionName }}</button>
  </div>
</template>

<style lang="scss" scoped>
textarea {
  width: 100%;
  height: 70px;
  font-size: 0.8rem;
}
</style>
