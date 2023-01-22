<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- <MyHeader :addTodo="addTodo" /> -->
        <!-- 组件自定义事件 -->
        <MyHeader @addTodo="addTodo" />
        <MyList :todos="todos" />
        <MyFooter
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearAllDone="clearAllDone"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
import * as contant from "./config/constant";

export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      // 状态提升。MyHeader和MyFooter组件均使用该数据
      // todos: [
      //   { id: "001", title: "学习", done: true },
      //   { id: "002", title: "娱乐", done: false },
      // ],
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },

    // 勾选或取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todoObj) => {
        if (todoObj.id === id) todoObj.done = !todoObj.done;
      });
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todoObj) => todoObj.id !== id);
    },

    // 全选或取消全选
    checkAllTodo(done) {
      this.todos.forEach((todoObj) => (todoObj.done = done));
    },
    // 清除所有已完成的todo
    clearAllDone() {
      this.todos = this.todos.filter((todoObj) => !todoObj.done);
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on(contant.CHECK_TODO, this.checkTodo);
    this.$bus.$on(contant.DELETE_TODO, this.deleteTodo);
  },
  beforeDestroy() {
    this.$bus.$off(contant.CHECK_TODO);
    this.$bus.$off(contant.DELETE_TODO);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: insert 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
