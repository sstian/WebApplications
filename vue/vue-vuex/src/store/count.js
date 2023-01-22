export default {
  namespaced: true, // 开启命名空间

  state: {
    sum: 0,
    school: "snowflake",
    subject: "frontend"
  },
  getters: {
    bigSum(state) {
      console.log("getters: bigSum()");
      return state.sum * 10;
    }
  },
  actions: {
    jiaOdd(context, value) {
      console.log("actions: jiaOdd()");
      if (context.state.sum % 2) {
        context.commit("JIA", value);
      }
    },
    jiaWait(context, value) {
      console.log("actions: jiaWait()");
      setTimeout(() => { context.commit("JIA", value) }, 500);
    }
  },
  mutations: {
    JIA(state, value) {
      console.log("mutations: JIA()");
      state.sum += value;
    },
    JIAN(state, value) {
      console.log("mutations: JIAN()");
      state.sum -= value;
    }
  }
}