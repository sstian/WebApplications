<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3 style="color: red">Pserson组件的总人数是：{{ persons.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option></select
    >&nbsp; <button @click="increment(n)">+</button>&nbsp;
    <button @click="decrement(n)">-</button>&nbsp;
    <button @click="incrementOdd(n)">jiaOdd</button>&nbsp;
    <button @click="incrementWait(n)">jiaWait</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "MyCount",
  data() {
    return {
      n: 0,
    };
  },
  computed: {
    // sum() { return this.$store.state.count.sum; },
    // // 对象写法
    // ...mapState("count", {sum: "sum", school: "school", subject: "subject", persons: "persons"}),
    // 数组写法
    ...mapState("count", ["sum", "school", "subject"]),
    ...mapState("person", ["persons"]),

    // bigSum() { return this.$store.getters["count/bigSum"];},
    // // 对象写法
    // ...mapGetters("count", { bigSum: "bigSum" }),
    // 数组写法
    ...mapGetters("count", ["bigSum"]),
  },
  methods: {
    // incrementOdd(value) { this.$store.dispatch("count/jiaOdd", value); },
    // 对象写法
    ...mapActions("count", {
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),
    // // 数组写法
    // ...mapActions("count", ["jiaOdd", "jiaWait"]),

    // increment(value) { this.$store.commit("count/JIA", value); },
    // 对象写法
    ...mapMutations("count", { increment: "JIA", decrement: "JIAN" }),
    // // 数组写法
    // ...mapMutations("count", ["JIA", "JIAN"]),
  },
};
</script>

<style>
</style>