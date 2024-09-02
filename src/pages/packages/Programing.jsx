import  Calendar  from "../../components/Calendar";
import { administrator } from "../../utilies/routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import ProgramingForm from "./ProgramingForm";

export default function Programing() {
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
        <div className="row p-2 ">
          <fieldset className="col-sm-12 col-md-4 ">
            <legend>Formulario</legend>
            <ProgramingForm />
          </fieldset>
          <fieldset className="col-sm-12 col-md-8">
            <legend>Agenda</legend>
            <Calendar />
          </fieldset>
        </div>
      </main>
    </div>
  );
}
