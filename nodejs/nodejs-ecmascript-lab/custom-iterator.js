// 自定义数据遍历。用于面向对象思想：数据私有不可直接被访问

const team = {
  name: "终极一班",
  members: ["xiao ming", "xiao hua", "xiao hong", "knight"],
  // 添加 Symbol.iterator
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.members.length) {
          return { value: this.members[index++], done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (let t of team) {
  console.log(t);
}
