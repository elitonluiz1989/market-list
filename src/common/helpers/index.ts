export function numericInputValue(value: number, defaultValue: string = ''): string {
  return value > 0 ? value.toString() : defaultValue;
};