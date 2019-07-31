<script>
import { mapActions } from "vuex";
import EntryForm from "@/components/EntryForm";
export default {
  components: {
    "entry-form": EntryForm
  },
  methods: {
    ...mapActions(["addEntry"]),
    saveEntry(entry) {
      this.addEntry(entry);
      this.$router.push({ name: "entries" });
    }
  },
  data() {
    return {
      entry: {
        content: "",
        mood_id: 2,
        activities: []
      }
    };
  }
};
</script>

<template lang="html">
  <div>
    <h4>Creating new entry:</h4>
    <entry-form :entry="entry" action-name="Save" @entry-action="saveEntry" />
  </div>
</template>

<style lang="css" scoped></style>
