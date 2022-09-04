module.exports = {
  title: '柚咖学习小屋', // 标题
  description: '编程学习笔记', // 描述
  // logo: "/public/秋怡2.png", // 首页图片
  theme: "reco", // 主题
  // head: [ ["link", {rel: "icon", href: ""}] ], // 这里可以添加自定义logo
  port: 8080, // 端口, 默认8080

  // 主题配置
  themeConfig: {
    author: "柚咖", // 作者名
    authorAvatar: "/秋怡3.png", // 作者头像, 右侧信息栏头像
    // logo: "/public/秋怡3.png", // 导航栏左侧图片
    type: 'blog', // 疑问：还有什么类型？
    nav: require("./nav"), // 配置导航栏. 实际的导航栏配置在 .vuepress/nav.js 中
    sidebar: require("./sidebar"), // 配置侧边栏. 实际的侧边栏配置在 .vuepress/sidebar.js 中
    subSidebar: "auto", // 文章的右侧目录页
    // sidebarDepth: 2,
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    // 博客设置
    blogConfig: {
      tag: {
        location: 6, // 在导航栏菜单中所占的位置，默认2
        text: '标签' // 默认 “标签”
      },
      category: {
        location: 7, // 在导航栏菜单中所占的位置，默认3
        text: '分类' // 默认 “分类”
      }
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true, // 代码块显示行号
    toc: {
        includeLevel:[1, 2, 3, 4]
    }
  },

  // 插件配置
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: [
          'miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'
        ],
        clean: false,
        messages: { 
          welcome: '欢迎来到我的博客', home: '首页', theme: '切换看板娘', close: '关闭' 
        },
        messageStyle: { right: '68px', bottom: '290px' },
        width: 250,
        height: 320
      }
    ],
  ]
}
