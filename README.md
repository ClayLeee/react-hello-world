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
pnpm gh-deploy
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
├── tests/                         # 🧪 測試目錄
│   ├── hello-world-color.spec.ts  # 測試 Hello World 顏色
│   ├── test-report.md            # 測試報告文件
│   └── screenshots/              # 測試截圖
│       └── hello-world-current-blue.png
├── playwright-report/             # 🧪 測試報告
│   ├── index.html                # HTML 報告頁面
│   └── data/                     # 報告數據
│       └── e378df4f821650645f88f065623c8f36a0e63ca7.md  # 測試結果數據
├── test-results/                  # 🧪 測試結果
│   ├── .last-run.json            # 最後執行記錄
│   └── tests-hello-world-color-He-801cf-ify-Hello-world-text-is-red/  # 測試失敗記錄
│       └── error-context.md      # 錯誤上下文
├── .eslintrc.cjs
├── index.html
├── package.json
├── playwright.config.ts           # 🧪 Playwright 設定
├── vite.config.js
└── README.md
```

## 🧪 Playwright 相關檔案說明

專案中包含了以下 Playwright 測試相關的檔案和目錄：

### 測試檔案
- `tests/hello-world-color.spec.ts` - 測試 Hello World 文字顏色的測試腳本
- `tests/test-report.md` - 測試結果的詳細報告文件
- `tests/screenshots/` - 測試過程中拍攝的截圖目錄

### 測試報告
- `playwright-report/index.html` - HTML 格式的測試報告頁面
- `playwright-report/data/` - 報告相關的數據文件

### 測試結果
- `test-results/.last-run.json` - 最後執行的測試記錄
- `test-results/tests-hello-world-color-*` - 測試失敗的詳細記錄

### 設定檔
- `playwright.config.ts` - Playwright 測試框架的設定檔

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

5. 查看 playwright 測試結果 (http://localhost:9323)
```
npx playwright show-report
```

## Prompt

```
"issue: turn the hello world to red"
@.github Explore https://clayleee.github.io/react-hello-world/ to see if the issue is done
```
