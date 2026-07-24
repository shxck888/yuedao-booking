# 月島文字燒 — 線上訂位系統

參考「海之星訂位系統」改寫的 LINE 線上訂位系統，用在官方 LINE。純前端（HTML + Tailwind）搭配 Google Apps Script 後端。

## 檔案

| 檔案 | 說明 |
| --- | --- |
| `booking.html` | 顧客線上訂位表單（在 LINE 裡開啟，送出後寫入試算表並發確認訊息） |
| `manage.html` | 顧客查看自己的訂位、修改備註、取消訂位 |
| `config.js` | 集中設定：後端網址、店名、LIFF ID |

## 和海之星的差異（文字燒客製）

- 配色改成月島主題（暖奶油 → 炙燒橘），對應鐵板／文字燒的暖意。
- 營業時段改為 **11:00–23:00**。
- 移除熱炒海鮮專用的「單點熱炒／桌菜」「桌菜價位 6000/8000」。
- 用餐方式改為 **單點／套餐吃到飽**；選套餐時顯示方案（平日 $499／假日 $599／豪華 $699／特訂）。
- 新增 **座位偏好**（鐵板桌／一般桌／吧台／不指定），會併入備註一起送出。
- 桌數上限選項加入 **包場**。

## 後端（沿用海之星同一套）

`config.js` 的 `GAS_URL` 目前指向海之星原本的 Google Apps Script，**兩店共用同一個試算表**。

- 為了相容，送出的欄位名稱與海之星完全一致（`name / phone / date / time / people / tables / type / tableValue / note / lineId`），所以資料可直接寫進現有試算表。
- 另外多送一個 `store: "月島文字燒"` 欄位標記店名。若之後你在 Apps Script 加一欄 `store` 並回傳，`manage.html` 就會自動只顯示月島的訂位；在還沒加之前，兩店訂位會混在同一張表。
- 若日後想讓月島用**獨立試算表**，只要換掉 `config.js` 裡的 `GAS_URL` 即可。

## 上線前一定要改：LIFF ID ⚠️

`config.js` 裡的 `LIFF_ID_BOOKING` 與 `LIFF_ID_MANAGE` 目前**沿用海之星的**，只能拿來測試。正式用在月島的官方 LINE 前：

1. 到 [LINE Developers](https://developers.line.biz/) 進入月島的 LINE 官方帳號所屬 Provider / Channel。
2. 在 **LIFF** 分頁新增兩個 LIFF App：
   - 一個 Endpoint URL 指向你託管的 `booking.html`
   - 一個指向 `manage.html`
   - Size 建議選 **Full**，並勾選需要的權限（`profile`、傳訊息）。
3. 把產生的兩個 LIFF ID 填回 `config.js` 的 `LIFF_ID_BOOKING`、`LIFF_ID_MANAGE`。
4. 在官方 LINE 的圖文選單或訊息把連結設成這兩個 LIFF URL。

## 託管方式（擇一）

這是純靜態網頁，放哪都行：

- **GitHub Pages**：建一個新 repo（例如 `tsukishima-booking`），上傳這三個檔案 + README，到 Settings → Pages 開啟，網址類似 `https://你的帳號.github.io/tsukishima-booking/booking.html`。
- 或 Netlify / Vercel / Cloudflare Pages，直接拖資料夾即可。

> 注意：`booking.html`、`manage.html` 一定要和 `config.js` 放在同一層目錄。

## 本機預覽

直接用瀏覽器打開 `booking.html` 即可看到外觀（LINE 相關功能需在 LINE App 內才會完整運作）。
