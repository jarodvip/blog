# whale — Hexo Theme

一个独立开发者风格的暗色终端主题。灵感来源于 GitHub 风格的个人博客预览页面。

## 特性

- **暗色终端美学** — 深色背景、等宽字体、终端窗口装饰
- **Tailwind 风格设计** — 原生 CSS 实现，无需外部框架依赖
- **完整页面类型** — 首页、文章、归档、分类、标签、通用页面
- **响应式设计** — 移动端适配
- **动画效果** — 滚动淡入、ticker 跑马灯、闪烁光标
- **国际化支持** — 中文语言包

## 安装

```bash
git clone https://github.com/jarodvip/hexo-theme-whale.git themes/whale
```

然后在 Hexo 根目录的 `_config.yml` 中设置：

```yaml
theme: whale
```

## 配置

主题的配置文件位于 `themes/whale/_config.yml`，包含以下主要配置项：

- **导航菜单** — `theme.menu` 定义顶部导航链接
- **社交链接** — `theme.social` 添加 GitHub/Twitter/Email
- **Hero 区域** — `theme.hero` 自定义首页首屏内容
- **数据条** — `theme.stats` 显示站点统计数据
- **运作方式** — `theme.howItWorks` 三栏介绍
- **订阅** — `theme.subscribe` 邮件订阅区域
- **Footer** — `theme.footer` 页脚信息

## 文件结构

```
whale/
├── _config.yml          # 主题配置
├── languages/           # 国际化
│   └── zh-CN.yml
├── layout/              # 模板文件
│   ├── index.njk        # 首页
│   ├── post.njk         # 文章页
│   ├── archive.njk      # 归档页
│   ├── category.njk     # 分类索引
│   ├── categories.njk   # 分类列表
│   ├── tag.njk          # 标签索引
│   ├── tags.njk         # 标签列表
│   ├── page.njk         # 通用页面
│   ├── layout.njk       # 布局模板
│   └── partials/        # 局部模板
│       ├── hero.njk
│       ├── ticker.njk
│       ├── stats.njk
│       ├── how-it-works.njk
│       ├── latest-articles.njk
│       ├── side-cards.njk
│       └── subscribe.njk
├── source/              # 静态资源
│   ├── css/style.css
│   └── js/main.js
└── scripts/             # 自定义脚本
```

## License

MIT
