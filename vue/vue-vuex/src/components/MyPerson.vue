<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件求和为：{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="person in persons" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyPerson",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    persons() {
      return this.$store.state.person.persons;
    },
    sum() {
      return this.$store.state.count.sum;
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("person/ADD_PERSON", personObj);
      this.name = "";
    },
  },
};
</script>

<style>
</style>