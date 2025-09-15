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

## 注意事項
1. 專案需要安裝 @playwright/test
```
pnpm add -D @playwright/test
```

2. 它會需要 playwright 瀏覽器
```
npx playwright install
```

3. 執行 playwright test
```
npx playwright test tests/xxx.spec.ts
```

4. 要看測試結果會生成 playwright.config.ts 檔案在根目錄，其中會有需要安裝 node 的 typescript 文件
```
/* Fail the build on CI if you accidentally left test.only in the source code. */
forbidOnly: !!process.env.CI,
/* Retry on CI only */
retries: process.env.CI ? 2 : 0,
/* Opt out of parallel tests on CI. */
workers: process.env.CI ? 1 : undefined,
```

```
pnpm add -D @types/node
```

## Prompt

```
@.github Explore @https://clayleee.github.io/react-hello-world/
```
