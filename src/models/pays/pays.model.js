export class Pays {
  constructor() {
    this.idPay = 0;
    this.idReservation = 0;
    this.date_pay = new Date();
    this.price = 0;
    this.voucher = "";
    this.status = "" || "R" || "P" || "N" || "A";
  }
}
