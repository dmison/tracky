<script>
export default {
  props: {
    entry: Object,
    actionName: String
  }
};
</script>

<template>
  <div>
    <input v-model="entry.content" />
    <button @click="$emit('entry-action', entry)">{{ actionName }}</button>
  </div>
</template>

<style lang="sass" scoped></style>
