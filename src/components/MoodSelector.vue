<script>
export default {
  props: { value: Number, moods: Object },
  methods: {
    setMood(mood_id) {
      this.$emit("set-mood", parseInt(mood_id));
    }
  }
};
</script>

<template>
  <div>
    <p>How were you feeling?</p>
    <ul>
      <li v-for="(label, id) in moods" :key="id" @click="setMood(id)">
        <span :class="{ mood: true, active: parseInt(id) === value }">{{
          label
        }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  margin: 16px 0px;
  padding: 0px;
  font-size: 1.5rem;
}
ul > li {
  list-style: none;
  display: inline-block;
  margin: 8px;
}
.mood {
  display: inline-block;
  background-color: rgb(230, 230, 230);
  border: 1px solid lightgrey;
  padding: 2px 3px;
  border-radius: 3px;
  color: grey;
  cursor: pointer;
  min-width: 80px;
  text-align: center;
}
.mood.active {
  color: white;
  background-color: rgb(39, 124, 180);
  border: 1px solid rgb(55, 146, 206);
  cursor: default;
}
</style>
