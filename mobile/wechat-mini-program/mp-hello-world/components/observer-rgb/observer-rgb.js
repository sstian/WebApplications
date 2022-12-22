// components/observer-rgb.js
Component({
  /**
   * 选项列表
   */
  options: {
    // 指定所有以 _ 开头的数据字段为纯数据字段
    pureDataPattern: /^_/
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    // 根据 rgb 对象的三个属性，动态计算该值
    fullColor: "0, 0, 0"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR() {
      const { r } = this.data._rgb;
      this.setData({
        "_rgb.r": (r + 5 > 255 ? 255 : r + 5)
      });
    },

    changeG() {
      const { g } = this.data._rgb;
      this.setData({
        "_rgb.g": (g + 5 > 255 ? 255 : g + 5)
      });
    },

    changeB() {
      const { b } = this.data._rgb;
      this.setData({
        "_rgb.b": (b + 5 > 255 ? 255 : b + 5)
      });
    }
  },

  /**
   * 数据监视器
   */
  observers: {
    // 使用通配符 ** 监听对象所有属性的变化
    "_rgb.**": function (obj) {
      this.setData({ fullColor: `${obj.r}, ${obj.g}, ${obj.b}` });
    }
  }
})
