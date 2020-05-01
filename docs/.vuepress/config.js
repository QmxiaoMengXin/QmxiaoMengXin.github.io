module.exports = {
  title: '小明的博客',
  description: '欢迎来到我的个人博客',
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      { text: '首页', link: '/' },
      { text: 'js', link: '/js/' },
      { text: 'network', link: '/network/' },
      { text: 'Vue', link: '/vue/' },
      { text: '微博', link: 'https://weibo.com/u/6022335985?is_all=1' },
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 3, // 侧边栏显示2级
  },
}
