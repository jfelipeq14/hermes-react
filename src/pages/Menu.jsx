import CardMenu from "../components/CardMenu";
import { administrator } from "../utilies/routes";
import Sidebar, { SidebarItem } from "./layout/Sidebar";

export default function Menu() {
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
      <main className="col-11">
        <div className="container text-center">
          <div className="d-flex flex-wrap justify-content-around align-items-center">
            {administrator.map((admin) => (
              <CardMenu
                key={admin.name}
                title={admin.name}
                logo={<admin.icon width={60} />}
                href={admin.href}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
