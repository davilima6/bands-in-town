import StorageService from './StorageService';

const APP_KEY1 = 'my-foo-key';
const APP_KEY2 = 'my-bar-key';

describe('StorageService', () => {
  beforeEach(() => {
    StorageService.clearAll();
  });

  test("returns stored key's value or null for undefined key", () => {
    const value = StorageService.get(APP_KEY1);

    expect(value).toBeNull();
  });

  test("sets key to value", () => {
    StorageService.set(APP_KEY1, '42');

    const value = StorageService.get(APP_KEY1);

    expect(value).toEqual('42');
  });

  test("clears a key to value", () => {
    StorageService.set(APP_KEY1, '42');
    StorageService.clear(APP_KEY1);

    const value = StorageService.get(APP_KEY1);

    expect(value).toBeNull();
  });

  test("clears all prefixed app keys", () => {
    StorageService.set(APP_KEY1, '42');
    StorageService.set(APP_KEY2, '128');
    StorageService.clearAll();

    const value1 = StorageService.get(APP_KEY1);
    const value2 = StorageService.get(APP_KEY2);

    expect(value1).toBeNull();
    expect(value2).toBeNull();
  });
});
