export class Reservations {
  constructor() {
    this.id_reservation = 0;
    this.id_detail_programming_package = 0;
    this.id_customer = 0;
    this.date_reservation = new Date();
    this.price_reservation = 0;
    this.number_companions = 0;
    this.travel_customer = false;
    this.status = "" || "N" || "C" || "P" || "M" || "R" || "A" || "E" || "F";
  }
}
