export class Users {
  constructor() {
    this.id_user = 0;
    this.id_role = 0;
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
    this.email = "";
    this.password = "";
    this.state = true;
  }
}
