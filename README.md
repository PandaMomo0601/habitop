# Habitop（他律）官网项目

## 项目简介

Habitop（他律）是一款专注于习惯养成的移动应用，通过科学的方法帮助用户建立良好的生活习惯。本项目是 Habitop 应用的官方网站，主要提供用户服务协议和隐私政策条款的展示。

## 项目结构

```
habitop-web/
├── index.html          # 官网首页（两个按钮）
├── service.html        # 用户服务协议页面
├── privacy.html        # 隐私政策条款页面
├── css/
│   └── style.css      # 统一样式文件
├── js/
│   └── main.js        # JavaScript交互文件
├── images/            # 图片资源目录
└── README.md          # 项目说明文档
```

## 功能特性

### 🏠 官网首页
- 品牌展示：Habitop（他律）品牌标识和介绍
- 协议入口：用户服务协议和隐私政策条款的快速访问
- 响应式设计：支持各种设备尺寸的完美显示
- 现代化UI：采用Material Design风格，视觉效果优雅

### 📋 用户服务协议页面
- 完整协议内容：包含7个主要章节的详细条款
- 章节导航：快速定位到具体条款内容
- 返回功能：便捷的返回导航
- 打印友好：支持打印输出

### 🔒 隐私政策条款页面
- 隐私保护说明：详细说明数据收集和使用政策
- 用户权利：明确用户享有的各项权利
- 安全措施：介绍数据保护的具体措施
- 联系方式：提供多种联系渠道

### 🎨 设计特色
- **响应式布局**：完美适配桌面、平板、手机等各种设备
- **现代化设计**：采用CSS3新特性，视觉效果流畅
- **用户体验**：平滑动画、悬停效果、交互反馈
- **可访问性**：符合Web可访问性标准
- **性能优化**：代码精简，加载快速

## 技术栈

- **前端框架**：原生HTML5 + CSS3 + JavaScript
- **样式预处理器**：CSS变量（CSS Custom Properties）
- **响应式设计**：CSS Grid + Flexbox + Media Queries
- **动画效果**：CSS3 Animations + Transitions
- **浏览器兼容**：支持现代浏览器（Chrome、Firefox、Safari、Edge）

## 部署说明

### GitHub Pages 部署

1. **创建仓库**
   ```bash
   # 在GitHub上创建名为 habitop 的仓库
   # 仓库地址：https://github.com/PandaMomo0601/habitop
   ```

2. **上传代码**
   ```bash
   # 克隆仓库
   git clone https://github.com/PandaMomo0601/habitop.git
   
   # 进入项目目录
   cd habitop
   
   # 添加所有文件
   git add .
   
   # 提交更改
   git commit -m "Initial commit: Habitop官网项目"
   
   # 推送到GitHub
   git push origin main
   ```

3. **启用GitHub Pages**
   - 进入仓库设置（Settings）
   - 找到 Pages 选项
   - 选择 Source 为 main 分支
   - 保存设置

4. **访问地址**
   - 主页面：`https://pandamomo0601.github.io/habitop/`
   - 用户服务协议：`https://pandamomo0601.github.io/habitop/service.html`
   - 隐私政策条款：`https://pandamomo0601.github.io/habitop/privacy.html`

### 自定义域名部署（可选）

如果您有自定义域名，可以：

1. **购买域名**：如 `habitop.com` 或 `habitop.cn`
2. **配置DNS**：将域名解析到GitHub Pages
3. **设置自定义域名**：在GitHub Pages设置中添加自定义域名

## 在App中的集成

### 配置uni-id-pages

在 `habitop/uni_modules/uni-id-pages/config.js` 中配置：

```javascript
export default {
  // ... 其他配置
  agreements: {
    serviceUrl: 'https://pandamomo0601.github.io/habitop/service.html',
    privacyUrl: 'https://pandamomo0601.github.io/habitop/privacy.html',
    scope: ['register', 'login']
  }
}
```

### 使用WebView显示

App中使用内置WebView打开协议链接，用户可以在应用内查看协议内容，无需跳转到外部浏览器。

## 维护和更新

### 内容更新
- 修改对应的HTML文件内容
- 更新版本号和生效日期
- 提交到GitHub并推送

### 样式更新
- 修改 `css/style.css` 文件
- 测试各种设备尺寸的显示效果
- 确保响应式设计的完整性

### 功能更新
- 修改 `js/main.js` 文件
- 测试交互功能的正常性
- 确保跨浏览器兼容性

## 版本历史

### v1.0.0 (2024-01-15)
- 🎉 初始版本发布
- ✨ 完整的官网首页设计
- 📋 用户服务协议页面
- 🔒 隐私政策条款页面
- 📱 响应式设计支持
- 🎨 现代化UI设计
- ⚡ 性能优化和用户体验

## 联系方式

- **项目维护**：Habitop开发团队
- **技术支持**：通过GitHub Issues反馈问题
- **业务合作**：support@habitop.com

## 许可证

本项目采用 MIT 许可证，详见 LICENSE 文件。

---

**Habitop（他律）** - 让习惯养成变得简单有趣 🚀
