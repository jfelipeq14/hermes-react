export class Pays {
  constructor() {
    this.idPayment = 0;
    this.idReservation = 0;
    this.datePayment = new Date();
    this.price = 0;
    this.voucher = "";
    this.status = "" || "R" || "P" || "N" || "A";
  }
}
