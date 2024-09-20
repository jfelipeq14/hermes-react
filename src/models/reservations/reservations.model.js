export class Reservations {
  constructor() {
    this.id_reservation = 0;
    this.idDetailProgrammingPackage = 0;
    this.id_customer = 0;
    this.dateReservation = new Date();
    this.priceReservation = 0;
    this.numberCompanions = 0;
    this.travelCustomer = false;
    this.status = "" || "N" || "C" || "P" || "M" || "R" || "A" || "E" || "F";
  }
}
