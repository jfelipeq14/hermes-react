import { UserIcon } from "@heroicons/react/16/solid";
import BarsChart from "../components/dashboard/BarsChart";
import PiesChart from "../components/dashboard/PiesChart";
import { administrator } from "../utilies/routes";
import Sidebar, { SidebarItem } from "./layout/Sidebar";

export default function Dashboard() {
  return (
    <div className="row">
      <Sidebar>
        {administrator.map((link) => {
          return (
            <SidebarItem
              key={link.name}
              name={link.name}
              href={link.href}
              icon={<link.icon width={30} />}
            />
          );
        })}
      </Sidebar>
      <div className="col-11 text-center justify-content-center align-items-center">
        <h1>Dashboard</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <BarsChart />
          </div>
          <div className="col-sm-12 col-md-4 p-5">
            <PiesChart />
          </div>
          <div className="col-sm-12 col-md-6 p-5 mx-auto">
            <div className="mx-auto">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="text-center">
                    <UserIcon width={130} color="silver" />

                    <p>Esteban Dido</p>
                    <div>
                      <span>Paquetes totales: </span>
                      <strong>20</strong>
                    </div>
                    <div>
                      <span>Total dinero: </span>
                      <strong>200000000</strong>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="text-center">
                    <UserIcon width={150} color="gold" />
                    <p>Esteban Dido</p>
                    <div>
                      <span>Paquetes totales: </span>
                      <strong>20</strong>
                    </div>
                    <div>
                      <span>Total dinero: </span>
                      <strong>200000000</strong>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="text-center">
                    <UserIcon width={120} color="bronze" />

                    <p>Esteban Dido</p>
                    <div>
                      <span>Paquetes totales: </span>
                      <strong>20</strong>
                    </div>
                    <div>
                      <span>Total dinero: </span>
                      <strong>200000000</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
