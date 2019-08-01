<script>
import { mapActions } from "vuex";
import EntryForm from "@/components/EntryForm";
import EntryFormSupport from "@/mixins/EntryFormSupport";

export default {
  mixins: [EntryFormSupport],
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
    <entry-form
      :entry="entry"
      action-name="Save"
      @entry-action="saveEntry"
      :moods="moods.moods"
      :activities="activities.activities"
      @add-activity="addNewActivity"
    />
  </div>
</template>

<style lang="css" scoped></style>
