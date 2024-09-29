export class Users {
  constructor() {
    this.idUser = 0;
    this.idRole = 0;
    this.documentType =
      "" ||
      "CC" ||
      "CE" ||
      "PA" ||
      "SC" ||
      "CD" ||
      "TE" ||
      "PEP" ||
      "AS" ||
      "DU" ||
      "CCEX" ||
      "CEEX" ||
      "PAEX" ||
      "SCEX" ||
      "CDEX" ||
      "TEX" ||
      "RNEX" ||
      "PEPEX" ||
      "ASEX";
    this.identification = "";
    this.name = "";
    this.lastName = "";
    this.email = "";
    this.password = "";
    this.status = true;
  }
}
