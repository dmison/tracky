<script>
import { mapActions, mapGetters } from "vuex";
import EntryForm from "@/components/EntryForm";
import EntryFormSupport from "@/mixins/EntryFormSupport";

export default {
  mixins: [EntryFormSupport],
  props: ["id"],
  components: {
    "entry-form": EntryForm
  },
  methods: {
    ...mapActions(["updateEntry"]),
    updateAction(entry) {
      this.updateEntry(entry);
      this.$router.push({ name: "entries" });
    }
  },
  computed: {
    ...mapGetters(["getEntry"]),
    entry() {
      return this.getEntry(this.id);
    }
  }
};
</script>

<template>
  <div>
    <h4>Editing entry:</h4>
    <entry-form
      :entry="entry"
      action-name="update"
      @entry-action="updateAction"
      :moods="moods.moods"
      :activities="activities.activities"
    />
  </div>
</template>

<style lang="scss" scoped></style>
