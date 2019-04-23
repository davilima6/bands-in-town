/**
 * StorageService service singleton
 * @function StorageService
 * @returns {Object} Public API of StorageService
 */
function StorageService(storage = "localStorage") {
  const APP_PREFIX = "foo";
  const storage_ = window[storage];

  function get(key) {
    return storage_.getItem(`${APP_PREFIX}__${key}`);
  }

  function set(key, value) {
    storage_.setItem(`${APP_PREFIX}__${key}`, value);
  }

  function clear(key) {
    storage_.removeItem(`${APP_PREFIX}__${key}`);
  }

  function clearAll() {
    Object.keys(storage_).forEach(key => {
      if (key.startsWith(APP_PREFIX)) {
        this.clear(key.slice(APP_PREFIX.length + 2));
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
