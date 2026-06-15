# AI 与教育手记 · 个人静态网站

纯静态 HTML/CSS/JS，无需任何构建工具，可直接部署到 GitHub Pages。

## 文件结构
```
.
├── index.html        # 首页（文章流 + 顶部分类导航 + 侧边栏）
├── about.html        # 关于页
├── style.css         # 全部样式
├── script.js         # 移动菜单 + 分类筛选
└── posts/            # 文章页
    ├── post-1.html
    ├── post-2.html
    ├── post-3.html
    └── post-4.html
```

## 部署到 GitHub Pages（3 步）
1. 新建一个仓库，比如叫 `myblog`，把以上所有文件上传进去。
2. 进入仓库 **Settings → Pages**，Source 选 `Deploy from a branch`，分支选 `main`、目录选 `/ (root)`，保存。
3. 等一两分钟，访问 `https://你的用户名.github.io/myblog/` 即可。

> 想用 `你的用户名.github.io` 作为主域名，就把仓库名改成 `你的用户名.github.io`，根目录直接就是首页。

## 怎么改成你自己的
- **改文案**：直接编辑 `index.html` 和 `about.html` 里的中文。
- **加文章**：复制 `posts/post-1.html` 改名为 `post-5.html`，改标题正文；再到 `index.html` 复制一张 `<article class="card">` 卡片，把链接指向新文件。
- **换配色**：改 `style.css` 顶部 `:root` 里的颜色变量（`--accent` 是主色调）。
- **改分类**：卡片上的 `data-cat` 值要和导航/侧边栏的 `data-cat` 一致，点击就能筛选。

## 说明
本站为原创设计，结构上参考了常见博客布局（文章流 + 分类导航 + 侧边栏），未复制任何第三方网站的代码、设计或内容。
