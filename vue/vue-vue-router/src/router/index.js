
import VueRouter from "vue-router";
import MyAbout from "../pages/MyAbout";
import MyHome from "../pages/MyHome";
import MyNews from "../pages/MyNews";
import MyMessage from "../pages/MyMessage";
import MyDetail from "../components/MyDetail";

const router = new VueRouter({
  // 路由器工作模式
  // mode: "hash",
  mode: "history",
  routes: [
    {
      // 命名路由
      name: "guanyu",
      path: "/about",
      component: MyAbout,
      meta: { title: "关于" },
      beforeEnter(to, from, next) {
        console.log("guanyu - beforeEnter(): to, from, next", to, from, next);
        next();
      }
    },
    {
      name: "zhuye",
      path: "/home",
      component: MyHome,
      meta: { title: "主页" },
      children: [
        {
          name: "xinwen",
          path: "news",
          component: MyNews,
          meta: { isAuth: true, title: "新闻" },
          // 独享路由守卫
          beforeEnter(to, from, next) {
            console.log("xinwen - beforeEnter(): to, from, next", to, from, next);
            // 判断是否需要鉴权
            if (!to.meta.isAuth) {
              next(); return;
            }
            // 鉴权
            const school = localStorage.getItem("school");
            if (school !== "snowflake") {
              window.alert(`学校名 ${school} 不对，无权限查看!`); return;
            }
            next();
          }
        },
        {
          name: "xiaoxi",
          path: "message",
          component: MyMessage,
          meta: { isAuth: true, title: "消息" },
          children: [
            {
              name: "xiangqing",
              // 1. query参数 路由
              path: "detail",
              // 2. params参数 路由，使用占位符声明接收params参数
              // path: "detail/:id/:title",
              component: MyDetail,
              meta: { isAuth: true, title: "详情" },
              // 1. object
              // props: {a: 1, b: "hello"},
              // 2. boolean - true，route prams -> component props
              // props: true,
              // 3. function, return value -> component props
              props({ query }) {
                return { id: query.id, title: query.title };
              }
            }
          ]
        }
      ]
    },
  ]
});

// 全局路由守卫
// 全局前置路由守卫：初始化时、每次路由切换时执行
router.beforeEach((to, from, next) => {
  console.log("router.beforeEach(): to, from, next", to, from, next);
  // 判断是否需要鉴权
  if (!to.meta.isAuth) {
    next(); return;
  }
  // 鉴权
  const school = localStorage.getItem("school");
  if (school !== "snowflake") {
    window.alert(`学校名 ${school} 不对，无权限查看!`); return;
  }
  next();

  // if (to.meta.isAuth) {
  //   const school = localStorage.getItem("school");
  //   console.log("school", school)
  //   if ( school === "snowflake") {
  //     next();
  //   } else {
  //     window.alert(`学校名 ${school} 不对，无权限查看!`)
  //   }
  // } else {
  //   next();
  // }
});

// 全局后置路由守卫：初始化时、每次路由切换时执行
router.afterEach((to, from) => {
  console.log("router.afterEach(): to, from", to, from);
  window.document.title = to.meta.title || "雪花系统";
});

export default router;
