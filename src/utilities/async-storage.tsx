import AsyncStorage from '@react-native-async-storage/async-storage';

// @TODO enum AsyncStorage keys

const setInAsyncStore = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('done');
    return true;
  } catch (e) {
    throw Error('Create Event Failed');
  }
};
const getFromAsyncStore = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // read error
  }

  console.log('Done.');
};

class AsyncStoreAPI {
  constructor(storageKey) {
    this.storageKey = storageKey;
  }

  setInAsyncStore = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log('done');
      return true;
    } catch (e) {
      throw Error('Create Event Failed');
    }
  };
  getFromAsyncStore = async (key: string) => {
    try {
      console.warn(this.storageKey);
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // read error
    }

    console.log('Done.');
  };
}
export const AsyncStorageAPI = new AsyncStoreAPI('@event');
// export const AsyncStorageAPI = {setInAsyncStore, getFromAsyncStore};
