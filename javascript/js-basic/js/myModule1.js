function myModule1() {
  // 私有数据
  var msg = "Snowflake";

  // 操作数据的函数
  function doSomething() {
    console.log("myModule2 - doSomething() " + msg.toUpperCase());
  }
  function doOtherthing() {
    console.log("myModule2 - doOtherthing() " + msg.toLowerCase());
  }

  // 向外暴露对象（给外部使用的方法）
  return {
    doSomething, 
    doOtherthing
  };
}