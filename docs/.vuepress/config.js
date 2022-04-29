module.exports = {
  title: "strongking",
  description: "strongking博客",
  theme: "reco",
  base: "/learn-vue/react/",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "strongking博客",
        items: [
          { text: "Github", link: "https://github.com/strongkin" },
          {
            text: "掘金",
            link: "https://juejin.cn",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "学前必读", path: "/" }],
      },
      {
        title: "基础学习",
        path: "/handbook/ConditionalTypes",
        collapsable: false, // 不折叠
        children: [
          { title: "vue 相关原理进阶", path: "/handbook/ConditionalTypes" },
          {
            title: "react-redux 的新特性 useSelector, useDispatch",
            path: "/handbook/Generics",
          },
          { title: "vue组件开发", path: "/handbook/Commponet" },
          { title: "ssr", path: "/handbook/Ssr" },
        ],
      },
    ],
  },
}
