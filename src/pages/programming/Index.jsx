import { useState } from "react";
import Calendar from "../../components/Calendar";

import ProgramingForm from "./FormProgramming";
import Modals from "../../components/Modals";
import { ProgramationPackages } from "../../models/packs/programation-packages.model";

export default function ProgramingPage() {
  const [programming, setProgramming] = useState(new ProgramationPackages());
  const [open, setOpen] = useState(false);

  return (
    <>
      <fieldset className="p-2">
        <legend>Agenda</legend>
        <Calendar
          clicModal={(e) => {
            if (!e.event) {
              setProgramming({ ...programming, start: e.dateStr });
              setOpen(!open);
            } else {
              setProgramming({
                ...programming,
                dateExecute: e.event.extendedProps.start,
              });
              setOpen(!open);
            }
          }}
          programming={programming}
          setProgramming={setProgramming}
        />
      </fieldset>
      {open && (
        <Modals isOpen={open} clickModal={setOpen} size="md">
          <div className="  p-5">
            <fieldset>
              <legend>Programación</legend>
              <ProgramingForm
                programming={programming}
                setProgramming={setProgramming}
              />
            </fieldset>
          </div>
        </Modals>
      )}
    </>
  );
}
