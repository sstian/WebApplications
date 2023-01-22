export default {
  namespaced: true, // 开启命名空间
  
  state: {
    persons: [
      { id: "001", name: "jack" }
    ]
  },
  getters: {},
  actions: {},
  mutations: {
    ADD_PERSON(state, value) {
      console.log("mutations: ADD_PERSON()");
      state.persons.unshift(value);
    }
  }
}