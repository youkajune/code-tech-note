// 整体的侧边栏配置文件，分别根据不同的导航路径加载不同的 sidebar.js 文件
module.exports = {
    // C 侧边栏
    "/C/base/": require("../C/sidebar"), // 加载 /C/base/sidebar.js 文件
    // C++ 侧边栏
    "/C++/base/": require("../C++/sidebar"), // 加载 /C++/base/sidebar.js 文件
    // Java 侧边栏
    "/Java/JavaSE/": require("../Java/sidebar"), // 加载 /Java/JavaSE/sidebar.js 文件
    "/Java/JavaEE/": require("../Java/sidebar"), // 加载 /Java/JavaSE/sidebar.js 文件
    "/Java/Spring/": require("../Java/sidebar"), // 加载 /Java/JavaSE/sidebar.js 文件
    // Python 侧边栏
    "/Python/base/": require("../Python/sidebar") // 加载 /Python/base/sidebar.js 文件
}