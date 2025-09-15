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

### 方法一：自動部署（推薦）

1. 將程式碼推送到 GitHub 儲存庫的 `main` 分支
2. 前往 GitHub 儲存庫設定頁面
3. 點選左側選單的 "Pages"
4. 在 "Source" 部分選擇 "GitHub Actions"
5. 推送程式碼後，GitHub Actions 會自動建置並部署

### 方法二：手動部署

```bash
# 安裝依賴
pnpm install

# 建置並部署
pnpm deploy
```

## 部署步驟詳細說明

### 1. 建立 GitHub 儲存庫

1. 在 GitHub 建立新的儲存庫，名稱為 `react-hello-world`
2. 將本地程式碼推送到儲存庫：

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用戶名/react-hello-world.git
git push -u origin main
```

### 2. 啟用 GitHub Pages

1. 前往 GitHub 儲存庫頁面
2. 點選 "Settings" 選項卡
3. 在左側選單中找到 "Pages"
4. 在 "Source" 部分選擇 "GitHub Actions"

### 3. 等待自動部署

- 推送程式碼後，GitHub Actions 會自動觸發
- 可以在 "Actions" 選項卡查看部署進度
- 部署完成後，網站會在 `https://你的用戶名.github.io/react-hello-world` 可用

## 技術堆疊

- React 18
- Vite
- ESLint
- GitHub Actions
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
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .eslintrc.cjs
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
