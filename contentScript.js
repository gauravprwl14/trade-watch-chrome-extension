// Content script for UI overlay and data extraction
class WatchlistOverlay {
    constructor() {
        this.initializeOverlay();
        this.setupEventListeners();
    }

    initializeOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'trade-watchlist-overlay';
        // Add overlay styling and structure
        document.body.appendChild(overlay);
    }

    setupEventListeners() {
        // Handle bookmark actions
        document.addEventListener('click', (e) => {
            if (e.target.matches('.bookmark-btn')) {
                this.handleBookmark(e);
            }
        });
    }

    async handleBookmark(e) {
        const stockData = this.extractStockData();
        await this.saveToIndexedDB(stockData);
    }
}

// Initialize overlay
new WatchlistOverlay(); 