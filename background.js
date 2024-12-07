// Background service worker for price updates and sync
const SYNC_INTERVAL = 5 * 60 * 1000; // 5 minutes

// Set up alarm for periodic sync
chrome.alarms.create('priceUpdate', {
    periodInMinutes: 5
});

// Handle alarm events
// chrome.alarms.onAlarm.addListener((alarm) => {
//     if (alarm.name === 'priceUpdate') {
//         updateStockPrices();
//     }
// });

// async function updateStockPrices() {
//     // Fetch watchlist from IndexedDB
//     const watchlist = await getWatchlistFromDB();

//     // Update prices for each stock
//     for (const stock of watchlist) {
//         const updatedPrice = await fetchLatestPrice(stock.symbol);
//         await updateStockInDB(stock.symbol, updatedPrice);
//     }
// } 