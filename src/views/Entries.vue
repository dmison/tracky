<template lang="html">
  <div>
    <h1>Entries</h1>
    <ul>
      <li :key="entry.id" v-for="entry in entries">
        <Entry :id="entry.id" />
      </li>
    </ul>
  </div>
</template>

<script>
import Entry from "@/components/Entry.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["entries"])
  },
  components: {
    Entry
  }
};
</script>

<style lang="css" scoped></style>
