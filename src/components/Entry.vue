<template lang="html">
  <div class="entry-panel">
    <p>
      <span>{{ mood }}</span>
      {{ entry.content }}
    </p>
    <button>Delete</button>
    <router-link :to="{ name: 'edit-entry', params: { id } }">edit</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    id: String
  },

  computed: {
    ...mapGetters(["getEntry", "getMood"]),
    entry() {
      return this.getEntry(this.id);
    },

    mood() {
      return this.getMood(this.entry.mood_id);
    }
  }
};
</script>

<style lang="css" scoped>

div.entry-panel {
  border: 1px solid grey;
}
</style>
