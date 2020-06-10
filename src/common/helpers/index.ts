const isNullOrEmpty = (value: string): boolean => {
  if (value != undefined && value != '' && value != null) {
    return false;
  }

  return true;
}

const numericInputValue = (value: number, defaultValue: string = ''): string => {
  return value > 0 ? value.toString() : defaultValue;
};

export {
  isNullOrEmpty,
  numericInputValue
}