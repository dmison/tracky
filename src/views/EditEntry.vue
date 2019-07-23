<script>
import { mapActions, mapGetters } from "vuex";
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
    ...mapGetters(["getEntry"]),
    entry() {
      return this.getEntry(this.id);
    }
  }
};
</script>

<template>
  <div>
    <h1>Edit</h1>
    <entry-form
      :entry="entry"
      action-name="update"
      @entry-action="updateAction"
    />
  </div>
</template>

<style lang="sass" scoped></style>
