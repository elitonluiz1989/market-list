import IModel from "App/common/interfaces/IModel";

const isNullOrUndefined = (value: any): boolean => {
  if (value != undefined && value != null) {
    return false;
  }

  return true;
}

const isNullOrEmpty = (value: string | null | undefined): boolean => {
  if (value != undefined && value != null && value != '') {
    return false;
  }

  return true;
}

const numericInputValue = (value: number, defaultValue: string = ''): string => {
  return value > 0 ? value.toString() : defaultValue;
};

const getNextListId = (list: IModel[]): number => {
  if (list.length === 0) {
    return 1;
  }

  let lastId = list.reduce((lastId: number, item: IModel): number => {
    return item.id > lastId ? item.id : lastId;
  }, 1);

  return lastId + 1;
}

const castList = <T>(obj: any): T[] => {
  let list = [];

  for (const item of obj) {
    list.push(<T>item);
  }

  return list;
}

export {
  isNullOrUndefined,
  isNullOrEmpty,
  numericInputValue,
  getNextListId,
  castList
}