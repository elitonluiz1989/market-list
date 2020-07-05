import { AsyncStorage } from "react-native";

import * as Utils from 'App/common/helpers';

const validateKey = (key: string): string => {
  if (!key.includes('@')) {
    key = `@${key}`;
  }

  return key;
}

export default class Storage {

  static async getItem(key: string) {
    key = validateKey(key);

    const result = await AsyncStorage.getItem(key);

    return result;
  }

  static async getJson(key: string) {
    const data = await this.getItem(key);
    let parsedData = null;

    if (!Utils.isNullOrEmpty(data)) {
      parsedData = JSON.parse(<string>data);
    }

    return parsedData;
  }

  static async setItem(key: string, data: string) {
    key = validateKey(key);

    try {
      await AsyncStorage.setItem('@saved_lists', data);

      return true;
    } catch (ex) {
      return false;
    }
  }

  static async setJson(key: string, obj: any) {
    const data = JSON.stringify(obj);

    return this.setItem(key, data);
  }
}