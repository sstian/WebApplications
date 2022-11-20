// 递归实现深拷贝

/**
 * @param {} data 
 * @return "Object" or "Array"
 */
function getDataType(data) {
  // [object Object], [object Array]
  return Object.prototype.toString.call(data).slice(8, -1);
}

function deepClone(data) {
  // 创建一个容器
  let container;
  // 判断数据类型
  switch (getDataType(data)) {
    case "Object": container = {}; break;
    case "Array": container = []; break;
    default: break;
  }
  // 遍历数据
  for (let index in data) {
    let currentData = data[index];
    // 获取键的类型
    let type = getDataType(currentData);
    if (type === "Object" || type === "Array") {
      // 引用类型，递归调用
      container[index] = deepClone(currentData);
    } else {
      // 非引用类型，直接复制
      container[index] = currentData;
    }
  }

  return container;
}

// 测试
const school = {
  name: "尚硅谷",
  position: ["北京", "上海", "广州", "深圳"],
  founder: {
    name: "刚子",
  },
  change: function () {
    console.log("改变");
  }
}

const newSchool = deepClone(school);
newSchool.position[0] = "beijing";
console.log(school);
console.log(newSchool);

// 输出
/*
{
  name: '尚硅谷',
  position: [ '北京', '上海', '广州', '深圳' ],
  founder: { name: '刚子' },
  change: [Function: change]
}
{
  name: '尚硅谷',
  position: [ 'beijing', '上海', '广州', '深圳' ],
  founder: { name: '刚子' },
  change: [Function: change]
}
*/