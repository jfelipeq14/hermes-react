export class Pays {
  constructor() {
    this.id_pay = 0;
    this.id_reservation = 0;
    this.date_pay = new Date();
    this.price = 0;
    this.voucher = "";
    this.status = "" || "R" || "P" || "N" || "A";
  }
}
