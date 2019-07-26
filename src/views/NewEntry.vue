<script>
import { mapActions, mapState } from "vuex";
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
  computed: {
    ...mapState(["moods"])
  },
  data() {
    return {
      entry: {
        content: "",
        mood_id: 2
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
    />
  </div>
</template>

<style lang="css" scoped></style>
