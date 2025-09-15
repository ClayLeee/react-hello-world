# React Hello World

一個簡單的 React 專案，在畫面中心顯示藍色的 "Hello world" 字樣。

## 功能特色

- 使用 Vite 建置工具，快速開發體驗
- 響應式設計，畫面居中顯示
- 藍色 "Hello world" 文字
- 支援 GitHub Pages 部署

## 本地開發

### 安裝依賴

```bash
pnpm install
```

### 啟動開發伺服器

```bash
pnpm dev
```

開啟瀏覽器訪問 `http://localhost:5173`

### 建置專案

```bash
pnpm build
```

## 部署到 GitHub Pages

### 使用 gh-pages 套件部署

```bash
# 安裝依賴
pnpm install

# 建置並部署
pnpm deploy
```

這會自動建置專案並推送到 `gh-pages` 分支。

## 技術堆疊

- React 18
- Vite
- ESLint
- gh-pages (部署工具)
- GitHub Pages

## 專案結構

```
react-hello-world/
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
