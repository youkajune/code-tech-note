module.exports = {
  title: '柚咖学习小屋',
  description: '编程学习笔记',
  logo: "/public/秋怡2.png",
  theme: "reco",
  markdown: {
    // 代码块显示行号
    lineNumbers: true,
    // 文章目录页(右侧目录？)
    toc: {
        includeLevel:[1, 2, 3, 4]
    }
  },
  themeConfig: {
    // 配置导航栏
    nav: require("./nav"), // 实际的导航栏配置在 .vuepress/nav.js 中
    // 配置导航栏
    sidebar: require("./sidebar"), // 实际的侧边栏配置在 .vuepress/sidebar.js 中
    // 右侧目录页
    subSidebar: "auto",
    // sidebarDepth: 2,
    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  }
}
