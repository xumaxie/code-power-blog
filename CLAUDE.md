# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Chinese technical blog built with VuePress 2.0, deployed on Vercel. The blog focuses on programming tutorials, primarily Java content with plans for frontend and backend articles.

## Development Commands

```bash
# Start development server (hot-reload at http://localhost:8080)
npm run docs:dev

# Build for production
npm run docs:build

# Install dependencies
npm install
```

## Architecture

### Tech Stack
- **VuePress 2.0 RC** - Static site generator with Vite bundler
- **Default Theme** - Standard VuePress theme with custom navigation
- **Sass** - For custom styling
- **Vercel** - Automatic deployment on git push

### Key Files
- `docs/.vuepress/config.js` - Main configuration (navbar, sidebar, theme settings)
- `vercel.json` - Deployment config (auto-deploys on push to main)
- `package.json` - Scripts and dependencies

## Content Structure

```
docs/
├── README.md           # Homepage
├── guide/
│   ├── java/          # Java tutorials (基础, 工具, 并发, 框架, 设计模式)
│   ├── frontend/      # Frontend content
│   └── backend/       # Backend content
├── about/             # About page
└── projects/          # Project examples (planned)
```

## Important Patterns

### Adding New Articles

When adding a new article, **always update the sidebar** in `docs/.vuepress/config.js`. The sidebar does not auto-discover files.

Example pattern for adding a file:
```javascript
{
  text: '分类名称',
  collapsible: true,
  children: [
    '/guide/java/分类/01-文章标题.md',
    '/guide/java/分类/02-另一篇文章.md',
  ],
},
```

### Article Naming
- Use numbered prefix for ordering: `01-xxx.md`, `02-xxx.md`
- Place articles in appropriate subdirectory under `docs/guide/`

### Deployment Workflow
1. Make changes locally
2. Test with `npm run docs:dev`
3. Commit and push to main branch
4. Vercel auto-deploys (check dashboard for status)

### Language
- All content is in Chinese (zh-CN)
- Sidebar and navbar text should be in Chinese
