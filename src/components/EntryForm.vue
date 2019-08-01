<script>
import MoodSelector from "./MoodSelector.vue";
import ActivitySelector from "./ActivitySelector.vue";

export default {
  props: {
    entry: Object,
    actionName: String,
    moods: Object,
    activities: Array
  },
  components: {
    "mood-selector": MoodSelector,
    "activity-selector": ActivitySelector
  },
  methods: {
    setMood(id) {
      this.entry.mood_id = id;
    },
    toggleActivity(activity_id) {
      if (this.entry.activities.includes(activity_id)) {
        this.entry.activities = this.entry.activities.filter(
          a => a !== activity_id
        );
      } else this.entry.activities.push(activity_id);
    },
    addActivity(activity) {
      this.$emit("add-activity", activity);
    }
  }
};
</script>

<template>
  <div>
    <textarea v-model="entry.content" placeholder="Notes" />
    <mood-selector :value="entry.mood_id" @set-mood="setMood" :moods="moods" />
    <activity-selector
      :value="entry.activities"
      :activities="activities"
      @set-activity="toggleActivity"
      @add-activity="addActivity"
    />
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
