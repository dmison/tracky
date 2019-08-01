<template>
  <div>
    <p>What did you get up to?</p>
    <template v-if="addingNew">
      <input v-model="newA" type="text" />
      <button @click="addNewActivity">save</button>
    </template>
    <button v-else @click="doNew">New activity</button>
    <ul>
      <li v-for="activity in theseActivities" :key="activity.id">
        <span
          :class="{ activity: true, active: activity.active }"
          @click="setActivity(activity.id)"
        >
          {{ activity.content }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: { value: Array, activities: Array },
  data() {
    return {
      addingNew: false,
      newA: ""
    };
  },
  computed: {
    theseActivities() {
      return this.activities.map(activity => {
        activity.active = this.value.includes(activity.id);
        return activity;
      });
    }
  },
  methods: {
    addNewActivity() {
      this.$emit("add-activity", this.newA);
      this.newA = "";
      this.addingNew = false;
    },
    doNew() {
      this.addingNew = true;
    },
    setActivity(id) {
      this.$emit("set-activity", id);
    }
  }
};
</script>

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
.activity {
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
.activity.active {
  color: white;
  background-color: rgb(39, 124, 180);
  border: 1px solid rgb(55, 146, 206);
  cursor: default;
}
</style>
