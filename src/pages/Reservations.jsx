export default function Reservations() {
  const documentTypes = [
    "CC",
    "CE",
    "PA",
    "SC",
    "CD",
    "TE",
    "PEP",
    "AS",
    "DU",
    "CCEX",
    "CEEX",
    "PAEX",
    "SCEX",
    "CDEX",
    "TEX",
    "RNEX",
    "PEPEX",
    "ASEX",
  ];

  //  Crear una constante con los prefijos telefonicos de todos los paises de suramerica
  const phonePrefixes = [
    { country: "Colombia", prefix: "+57" },
    { country: "Argentina", prefix: "+54" },
    { country: "Bolivia", prefix: "+591" },
    { country: "Brasil", prefix: "+55" },
    { country: "Chile", prefix: "+56" },
    { country: "Ecuador", prefix: "+593" },
    { country: "Guyana", prefix: "+592" },
    { country: "Paraguay", prefix: "+595" },
    { country: "Peru", prefix: "+51" },
    { country: "Surinam", prefix: "+597" },
    { country: "Uruguay", prefix: "+598" },
    { country: "Venezuela", prefix: "+58" },
    { country: "Guayana Francesa", prefix: "+594" },
    { country: "Islas Malvinas", prefix: "+500" },
    { country: "Islas Georgias del Sur", prefix: "+500" },
    { country: "Islas Sandwich del Sur", prefix: "+500" },
  ];

  return (
    <div className="row">
      <fieldset className="col-sm-12 col-md-4">
        <legend>Datos personales</legend>
        
      </fieldset>
    </div>
  );
}
