<script>
import MoodSelector from "./MoodSelector.vue";
export default {
  props: {
    entry: Object,
    actionName: String,
    moods: Object
  },
  components: {
    "mood-selector": MoodSelector
  },
  methods: {
    setMood(id) {
      this.entry.mood_id = id;
    }
  }
};
</script>

<template>
  <div>
    <textarea v-model="entry.content" placeholder="Notes" />
    <mood-selector :value="entry.mood_id" :moods="moods" @set-mood="setMood" />
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
