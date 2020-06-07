export default class Currency {
  static format(value: number): string {
    return value.toFixed(2);
  }

  static input(value: string): string {
    let sanitizedValue = value.replace(/\.|,/g, '');

    if (Number(sanitizedValue) > 0) {
      let newValue = sanitizedValue;
      let length = sanitizedValue.length;

      if (length === 1) {
        newValue = '0.0' + sanitizedValue;
      } else if (length === 2) {
        newValue = '0.' + sanitizedValue
      } else if (length >= 3) {
        let breakPos: number = sanitizedValue.length - 2;
        newValue = sanitizedValue.substr(0, breakPos) + '.' +
          sanitizedValue.substr(breakPos, length);
      }
      return Number(newValue).toFixed(2);
    }

    return '';
  }
}