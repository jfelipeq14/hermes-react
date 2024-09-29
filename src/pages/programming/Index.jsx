import  Calendar  from "../../components/Calendar";
import Sidebar from "../layout/Sidebar";
import ProgramingForm from "./ProgramingForm";

export default function ProgramingPage() {
  return (
    <div className="row">
      <Sidebar></Sidebar>
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
