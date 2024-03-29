export class DefinedDateFunction {
  static convertDateToJPFormat(date: Date | number) {
    return new Date(date).toISOString().slice(0, 10);
  }
}
