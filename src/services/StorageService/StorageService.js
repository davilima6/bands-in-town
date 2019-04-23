/**
 * StorageService service singleton
 * @function StorageService
 * @returns {Object} Public API of StorageService
 */
function StorageService(storage = "localStorage") {
  const STORAGE = window[storage];
  const APP_PREFIX = "foo";

  function get(key) {
    return STORAGE.getItem(`${APP_PREFIX}__${key}`);
  }

  function set(key, value) {
    STORAGE.setItem(`${APP_PREFIX}__${key}`, value);
  }

  function clear(key) {
    STORAGE.removeItem(`${APP_PREFIX}__${key}`);
  }

  function clearAll() {
    Object.keys(STORAGE).forEach(key => {
      if (key.startsWith(APP_PREFIX)) {
        this.clear(key.slice(APP_PREFIX.length));
      }
    });

    return true;
  }

  return {
    get,
    set,
    clear,
    clearAll
  };
}

const storageService = new StorageService();

export default storageService;
