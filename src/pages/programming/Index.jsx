import { useEffect, useState } from "react";
import Calendar from "../../components/Calendar";
import Sidebar from "../layout/Sidebar";
import ProgramingForm from "./FormProgramming";
import Modals from "../../components/Modals";

export default function ProgramingPage() {
  const [programing, setPrograming] = useState(null);

  const [open, setOpen] = useState(false);
  const [haveData, setHaveData] = useState(false);

  useEffect(() => {
    if (programing) {
      setHaveData(true);
    }
  }, [programing]);

  useEffect(() => {
    if (haveData) {
      setOpen(true);
    }
  }, [haveData]);

  return (
    <div className="row w-100 h-100">
      <Sidebar></Sidebar>
      <main className="col-10 justify-content-center align-items-center">
        <fieldset className="container p-2">
          <legend>Agenda</legend>
          <Calendar
            clicModal={(e) => {
              if (!e.event) {
                setPrograming({ ...programing, date_execution: e.dateStr });
                setOpen(!open);
              } else {
                setPrograming(e.event._def.extendedProps);
              }
            }}
          />
        </fieldset>
      </main>
      {open && (
        <Modals isOpen={open} clickModal={setOpen} size="md">
          <div className="container p-5">
            <fieldset>
              <legend>Formulario</legend>
              <ProgramingForm
                programing={programing}
                setPrograming={setPrograming}
              />
            </fieldset>
          </div>
        </Modals>
      )}
    </div>
  );
}
