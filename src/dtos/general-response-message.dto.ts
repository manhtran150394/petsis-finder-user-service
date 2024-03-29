export class GeneralResponseMessageDTO {
  constructor(statusCode: number, message: '') {
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
  }

  statusCode: number;
  message: any;
  data: any;
}
