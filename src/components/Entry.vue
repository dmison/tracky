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

<style lang="scss" scoped>
div.entry-panel {
  border: 1px solid grey;
  margin: 5px;

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
