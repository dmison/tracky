<template lang="html">
  <div>
    <Entry
      :key="entry.id"
      v-for="entry in getEntries"
      :id="entry.id"
      :content="entry.content"
      :mood="entry.mood"
    />
  </div>
</template>

<script>
import Entry from "@/components/Entry.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getEntries"])
  },
  components: {
    Entry
  }
};
</script>

<style lang="css" scoped></style>
