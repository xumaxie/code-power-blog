import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '码力全开',
  description: '程序员的技术充电站',

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ],

  bundler: viteBundler(),

  theme: defaultTheme({
    logo: '/logo.svg',

    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '技术指南',
        children: [
          {
            text: 'Java',
            link: '/guide/java/',
          },
          {
            text: '前端',
            link: '/guide/frontend/',
          },
          {
            text: '后端',
            link: '/guide/backend/',
          },
        ],
      },
      {
        text: '实战项目',
        link: '/projects/',
      },
      {
        text: '关于',
        link: '/about/',
      },
    ],

    sidebar: {
      '/guide/java/': [
        {
          text: 'Java 基础',
          collapsible: true,
          children: [
            '/guide/java/基础/01-数据类型.md',
            '/guide/java/基础/02-面向对象.md',
          ],
        },
        {
          text: '并发编程',
          collapsible: true,
          children: [
            '/guide/java/并发/01-线程基础.md',
            '/guide/java/并发/02-线程池.md',
          ],
        },
        {
          text: '框架',
          collapsible: true,
          children: [
            '/guide/java/框架/01-Spring-IoC.md',
            '/guide/java/框架/SpringBoot/01-线程基础.md',
          ],
        },
        {
          text: '设计模式',
          collapsible: true,
          children: [
            '/guide/java/设计模式/01-单例模式.md',
          ],
        },
      ],
      '/guide/': [
        {
          text: '技术指南',
          children: [
            '/guide/java/README.md',
            '/guide/frontend/README.md',
            '/guide/backend/README.md',
          ],
        },
      ],
    },

    // 编辑链接
    editLink: false,

    // 最后更新时间
    lastUpdated: true,
    lastUpdatedText: '最后更新',

    // 贡献者
    contributors: false,
  }),
})
