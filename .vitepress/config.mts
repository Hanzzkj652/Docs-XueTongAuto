import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/images/icon.svg' }]
  ],
  title: "学习通刷课工具用户使用文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '这是什么', link: '/about-it/what-is-this' },
      { text: '用户协议', link: '/privacy/EULA' }
    ],

    sidebar: [
      {
        text: '关于此工具',
        items: [
          { text: '这是什么', link: '/about-it/what-is-this' },
          { text: '开发背景', link: '/about-it/why-develop' }
        ]
      },
      {
        text: '使用指南',
        items: [
          { text: '获取渠道', link: '/guide/how-to-get' },
          { text: '使用方法', link: '/guide/use-method' },
          { text: '如何捐赠(Donate)', link: '/guide/how-to-donate' },
          { text: '用户隐私与安全性', link: '/guide/privacy-security' }
        ]
      },
      {
        text: '用户协议与隐私条款',
        items: [
          { text: 'XueTongAuto最终用户协议(EULA)', link: '/privacy/EULA' },
          { text: 'XueTongAuto隐私政策', link: '/privacy/privacy-policy' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '更新日志', link: '/other/update-log' },
          { text: '常见问题', link: '/other/faq' },
          { text: '注意事项', link: '/other/warning' }
        ]
      }
    ],
        

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hanzzkj652' }
    ],
    
  
  }
})
