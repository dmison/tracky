<template lang="html">
  <div class="entry-panel">
    <p>
      <span>{{ mood }}</span>
      {{ content }}
    </p>
    <button class="button del">delete</button>
    <router-link
      class="button edit"
      :to="{ name: 'edit-entry', params: { id } }"
      >edit</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    content: String,
    mood: String
  }
};
</script>

<style lang="css" scoped>

div.entry-panel {
  border: 1px solid grey;
}
</style>
