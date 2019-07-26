<script>
import { mapActions, mapGetters, mapState } from "vuex";
import EntryForm from "@/components/EntryForm";
export default {
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
    ...mapState(["moods"]),
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
    />
  </div>
</template>

<style lang="scss" scoped></style>
