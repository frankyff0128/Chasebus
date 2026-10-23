/* 飛巴：讓手機可以把網站加到桌面。不快取任何內容，永遠讀取最新版本。 */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
