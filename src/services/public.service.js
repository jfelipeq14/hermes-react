import { User } from "@/models";
import { loadAbort } from "../utilies/loadAbort";
import axios from "axios";

export const funct = () => {
  const controller = loadAbort();
  return {
    call: axios.get<User>("", { signal: controller.signal }),
    controller,
  };
};
