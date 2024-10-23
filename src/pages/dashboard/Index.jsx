import { UserIcon } from "@heroicons/react/16/solid";
import BarsChart from "../../components/dashboard/BarsChart";
import PiesChart from "../../components/dashboard/PiesChart";

export default function DashboardPage() {
  return (
    <fieldset className="row p-2 g-2">
      <legend>Dashboard</legend>

      {/* Gráfico de barras */}
      <div className="col-sm-12 col-md-6 ">
        <div className="border border-1 rounded p-3 h-100">
          <h3 className="text-center mb-3">Venta de paquetes</h3>
          <div className=" ">
            <BarsChart />
          </div>
        </div>
      </div>

      {/* Gráfico de torta */}
      <div className="col-sm-12 col-md-6 ">
        <div
          className="border border-1 rounded p-3 position-relative"
          style={{ height: "440px" }}
        >
          <h3 className="text-center mb-3">Ventas 2024</h3>
          <div
            className="position-absolute w-100 h-100 top-0 start-0 d-flex flex-column justify-content-center"
            style={{
              paddingTop: "2.8rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              paddingBottom: "1.5rem",
            }}
          >
            <div className="h-100 w-100 d-flex align-items-center justify-content-center">
              <PiesChart />
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 clientes */}
      <div className="col-12">
        <div className="border border-1 rounded p-3">
          <h3 className="text-center ">Top 3 clientes 2024</h3>
          <div className="row justify-content-center">
            {/* Cliente Plata */}
            <div className="col-sm-12 col-md-4 text-center">
              <div className=" ">
                <UserIcon width={130} color="silver" />
                <p className="h5 mt-2">Esteban Dido</p>
                <div>
                  <span>Paquetes totales: </span>
                  <strong>10</strong>
                </div>
                <div>
                  <span>Total dinero: </span>
                  <strong>$2,000,000</strong>
                </div>
              </div>
            </div>

            {/* Cliente Oro */}
            <div className="col-sm-12 col-md-4 text-center">
              <div className=" ">
                <UserIcon width={150} color="gold" />
                <p className="h5 mt-2">Esteban Quito</p>
                <div>
                  <span>Paquetes totales: </span>
                  <strong>20</strong>
                </div>
                <div>
                  <span>Total dinero: </span>
                  <strong>$20,000,000</strong>
                </div>
              </div>
            </div>

            {/* Cliente Bronce */}
            <div className="col-sm-12 col-md-4 text-center">
              <div className=" ">
                <UserIcon width={120} color="#cd7f32" />
                <p className="h5 mt-2">Esteban Co</p>
                <div>
                  <span>Paquetes totales: </span>
                  <strong>5</strong>
                </div>
                <div>
                  <span>Total dinero: </span>
                  <strong>$200,000</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
}
