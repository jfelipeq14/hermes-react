import { useState } from "react";
import { EyeIcon, TicketIcon, UserPlusIcon } from "@heroicons/react/16/solid";
import Sidebar from "../layout/Sidebar";
import Modals from "../../components/Modals";

export default function PaysPage() {
  const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false);
  const [acompanantesModalIsOpen, setAcompanantesModalIsOpen] = useState(false);
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);
  const [selectedClientIndex, setSelectedClientIndex] = useState(null);

  const clients = [
    {
      cedula: "1021804",
      nombre: "Alan Sanchez",
      contacto: "3011111101",
      cantidadAcompañantes: 2,
      cantidadPagos: 2,
      acompanantes: [
        {
          nombre: "Alan",
          cedula: "102180",
          contacto: "3011111101",
          eps: "Sura",
          correo: "alan@gmail.com",
        },
        {
          nombre: "Brayana",
          cedula: "10238032",
          contacto: "3032478",
          eps: "Sabia salud",
          correo: "brayana@gmail.com",
        },
      ],
    },
    {
      cedula: "10252322",
      nombre: "Juan Felipe",
      contacto: "308749327",
      cantidadAcompañantes: 0,
      cantidadPagos: 2,
    },
  ];

  const sales = [
    {
      id: 1,
      nombresPaquete: "Family",
      valorPaquete: 24000,
      cantidad: 1,
      fechaRes: "06/05/2024",
      fechaEjecucion: "10/05/2024",
      clientIndex: 0,
      estado: "Reservado",
    },
    {
      id: 2,
      nombresPaquete: "Family",
      valorPaquete: 24000,
      cantidad: 1,
      fechaRes: "06/05/2024",
      fechaEjecucion: "10/05/2024",
      clientIndex: 1,
      estado: "Finalizado",
    },
  ];

  const handleShowDetails = (clientIndex) => {
    setSelectedClientIndex(clientIndex);
    setDetailsModalIsOpen(true);
  };

  const handleShowAcompanantes = (clientIndex) => {
    setSelectedClientIndex(clientIndex);
    setAcompanantesModalIsOpen(true);
  };

  const handleShowImages = (clientIndex) => {
    setSelectedClientIndex(clientIndex);
    setImageModalIsOpen(true);
  };

  return (
    <div className="row w-100 h-100">
      <Sidebar />
      <main className="col-10 justify-content-center align-items-center">
        <div className="row p-2">
          <fieldset className="col-12">
            <legend>Ventas</legend>
            <header className="row">
              <div className="col-6 my-2">
                <input
                  type="text"
                  id="identification"
                  className="form-control form-control-sm my-2"
                  placeholder="Buscar"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
            </header>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Acciones</th>
                  <th scope="col">Nombre pack</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">FechaRes</th>
                  <th scope="col">FechaEjecu</th>
                  <th scope="col">Cliente</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((sale) => (
                  <tr key={sale.id}>
                    <td className="d-flex">
                      <button
                        className="btn m-0 p-0"
                        onClick={() => handleShowDetails(sale.clientIndex)}
                      >
                        <EyeIcon width={20} />
                      </button>
                      <button
                        className="btn m-0 p-0"
                        onClick={() => handleShowAcompanantes(sale.clientIndex)}
                      >
                        <UserPlusIcon width={20} />
                      </button>
                      <button
                        className="btn m-0 p-0"
                        onClick={() => handleShowImages(sale.clientIndex)}
                      >
                        <TicketIcon width={20} />
                      </button>
                    </td>
                    <td>{sale.nombresPaquete}</td>
                    <td>{sale.valorPaquete}</td>
                    <td>{sale.cantidad}</td>
                    <td>{sale.fechaRes}</td>
                    <td>{sale.fechaEjecucion}</td>
                    <td>{clients[sale.clientIndex].nombre}</td>
                    <td>{sale.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
        </div>
      </main>
      {detailsModalIsOpen && selectedClientIndex !== null && (
        <Modals
          isOpen={detailsModalIsOpen}
          clickModal={setDetailsModalIsOpen}
          size="lg"
        >
          <fieldset className="container p-4 ">
            <legend>Información de la Venta</legend>
            <table className="table">
              <thead>
                <tr>
                  <th>Cédula</th>
                  <th>Nombre</th>
                  <th>Contacto</th>
                  <th>Cantidad acompañantes</th>
                  <th>Cantidad Pagos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{clients[selectedClientIndex].cedula}</td>
                  <td>{clients[selectedClientIndex].nombre}</td>
                  <td>{clients[selectedClientIndex].contacto}</td>
                  <td>{clients[selectedClientIndex].cantidadAcompañantes}</td>
                  <td>{clients[selectedClientIndex].cantidadPagos}</td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </Modals>
      )}
      {acompanantesModalIsOpen &&
        selectedClientIndex !== null &&
        clients[selectedClientIndex].acompanantes && (
          <Modals
            isOpen={acompanantesModalIsOpen}
            clickModal={setAcompanantesModalIsOpen}
            size="lg"
          >
            <fieldset className="container p-4 ">
              <legend>Información de Acompañantes</legend>
              <table className="table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Cédula</th>
                    <th>Contacto</th>
                    <th>EPS</th>
                    <th>Correo</th>
                  </tr>
                </thead>
                <tbody>
                  {clients[selectedClientIndex].acompanantes.map(
                    (acompanante, index) => (
                      <tr key={index}>
                        <td>{acompanante.nombre}</td>
                        <td>{acompanante.cedula}</td>
                        <td>{acompanante.contacto}</td>
                        <td>{acompanante.eps}</td>
                        <td>{acompanante.correo}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </fieldset>
          </Modals>
        )}
      {imageModalIsOpen && selectedClientIndex !== null && (
        <Modals
          isOpen={imageModalIsOpen}
          clickModal={setImageModalIsOpen}
          size="lg"
        >
          <fieldset className="container p-4 ">
            <legend>Comprobantes de pago</legend>
            <div className="row">
              <div className="col-6">
                <img
                  src="https://diarioriente.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-29-at-10.05.47-AM.jpeg"
                  alt="Imagen 1"
                  className="img-fluid"
                />
              </div>
              <div className="col-6">
                <img
                  src="https://diarioriente.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-29-at-10.05.47-AM.jpeg"
                  alt="Imagen 2"
                  className="img-fluid"
                />
              </div>
            </div>
          </fieldset>
        </Modals>
      )}
    </div>
  );
}
