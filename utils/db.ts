// IndexedDB utilities
export class StockDatabase {
  private db: IDBDatabase | null = null;
  private readonly DB_NAME = 'TradeWatchlistDB';
  private readonly STORE_NAME = 'stocks';

  async initialize() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, 1);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        db.createObjectStore(this.STORE_NAME, { keyPath: 'symbol' });
      };
    });
  }

  async addStock(stock: StockData) {
    if (!this.db) await this.initialize();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.STORE_NAME], 'readwrite');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.put(stock);
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
} 