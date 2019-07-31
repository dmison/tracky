<template lang="html">
  <div class="entry-panel">
    <div class="markdown" v-html="markdownContent" />
    <span>Mood: {{ mood }}</span>
    <br />
    <button class="button del">delete</button>
    <router-link
      class="button edit"
      :to="{ name: 'edit-entry', params: { id } }"
      >edit</router-link
    >
  </div>
</template>

<script>
import md from "@/markdown";
export default {
  props: {
    id: String,
    content: String,
    mood: String
  },
  computed: {
    markdownContent() {
      return md.render(this.content);
    }
  }
};
</script>

<style lang="scss" scoped>
div.markdown {
  font-size: 0.7rem;
}
div.entry-panel {
  border-bottom: 1px solid grey;
  padding: 5px 10px;

  .button {
    text-decoration: none;
    border-radius: 3px;
    font-family: inherit;
    font-size: 0.8rem;
    cursor: hand;
    color: black;
    border: 1px solid grey;
    background-color: lightgrey;
    padding: 3px 6px;
  }

  .del {
    color: white;
    border: 1px solid rgb(78, 14, 14);
    background-color: rgb(153, 19, 19);
    &:hover {
      background-color: red;
      color: black;
    }
  }
}
</style>
