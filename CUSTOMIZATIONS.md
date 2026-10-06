# 本站客製紀錄（NotionNext 4.10.10）

本專案以上游 [notionnext-org/NotionNext](https://github.com/notionnext-org/NotionNext) `v4.10.10` 為基底，
再套用以下客製。之後升級時，先以新版覆蓋，再依本清單逐項套回。

升級前的完整版本保留在 `main` 分支的 commit `86aa4f2`（v4.9.3）。

## 設定值

- `blog.config.js`：NOTION_PAGE_ID（含 `journal:` 子站）、THEME=matery、LANG=zh-TW、SINCE=2025、
  NEXT_REVALIDATE_SECOND=10、AUTHOR / BIO / LINK / KEYWORDS、ENABLE_RSS=false、GREETING_WORDS、
  `CHATBASE_ID`（放在檔案最後，會覆蓋 `conf/ai.config.js` 的預設值）
- `conf/ad.config.js`、`public/ads.txt`：AdSense
- `conf/analytics.config.js`：Google Analytics
- `conf/code.config.js`：prism one-dark / one-light、關閉 CODE_MAC_BAR
- `conf/font.config.js`：font-normal、Noto Sans TC / Noto Serif TC
- `conf/post.config.js`：分享按鈕清單、404 等待 10 秒
- `public/favicon.ico`、`package.json` homepage

## matery 主題（使用中）

- `themes/matery/config.js`
  - `MATERY_USE_THEME_PALETTE: false`：關閉 4.10.7+ 的主題調色板覆蓋，保留下列多種藍/灰色
  - `MATERY_WIDGET_TO_COMMENT: false`
- 配色：indigo → blue（400/500/600/700）或 gray（700），涉及
  ArticleInfo、BlogPostArchive、BlogPostCard、Catalog、CategoryGroup、FloatDarkModeButton、Footer、Header、
  Hero、JumpToTopButton、MenuGroupCard、MenuItemCollapse、MenuItemDrop、MenuList、PaginationNumber、
  Progress、SideBar、TagItemMiddle、TagItemMini、index.js（分類列表 hover）
- `style.js`：捲軸顏色 `#3b82f6`、`.notion-quote` 字級 0.8em
- `index.js`：文章頁移除版權說明與其下方虛線分隔線
- `components/RightFloatButtons.js`：移除右下角 SocialButton
- `components/TagItemMiddle.js`：保留舊版標籤外觀（rounded-xl、text-md）
- `components/Announcement.js`：上方 mt-2
- `components/ArticleInfo.js`：時間/瀏覽數圖示後加空格
- `components/TagGroups.js`：「標籤」繁體

## 全站元件

- `components/AlgoliaSearchModal.js`：搜尋視窗文字繁中化
- `components/ui/dashboard/DashboardButton.js`：「儀表板」
- `components/AnalyticsBusuanzi.js`：PV / UV 之間加間距
- `styles/notion.css`：`.notion-quote` 字級 0.8em、文字色 #374151

## hexo 主題（未使用，保留）

- `config.js`：關閉圖片交錯、版權說明、跳到評論
- `style.js`：連結底線與顏色 `#3755bf`
- `index.js`：主區 pt-8
- `components/Announcement.js`：shadow
- `components/Footer.js`：間距與 PoweredBy 換行

## 其他

- `.github/workflows`：只保留 codeql、docker-ghcr、pushUrl、sync（sync 訊息繁中化）。
  上游新增的 ci、deploy-docs-site、labeler、originality-proofs、stale、bump-version 未加入，避免在本 repo 產生失敗的 Actions。
