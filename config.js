window.CONFIG = {
  // 後端 Google Apps Script 網址（月島專用，最新部署＝與 LINE Webhook 同一支）
  GAS_URL: "https://script.google.com/macros/s/AKfycbzLFJPkIJKcFiGCz0Z_Fr-c5A6EBZvbVxS0wtUeUJ5U_FQhWgdZRBRAHYn3Nl92JSs/exec",

  // 店名：會一併寫入訂位資料，並顯示在 LINE 確認訊息中，用來和「海之星」區分
  STORE_NAME: "月島文字燒",

  // LINE LIFF ID（月島自己的，Channel 2010819387）
  // 注意：每個 LIFF App 的 Endpoint URL 必須對應到下面這支頁面：
  //   LIFF_ID_BOOKING 的 App → Endpoint 指向 booking.html
  //   LIFF_ID_MANAGE  的 App → Endpoint 指向 manage.html
  LIFF_ID_BOOKING: "2010819387-6RFGEMFV",
  LIFF_ID_MANAGE: "2010819387-ZYyp6zBn"
};
