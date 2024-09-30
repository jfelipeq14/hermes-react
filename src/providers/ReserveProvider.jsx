/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const ReserveContext = createContext();

export function useReserve() {
  return useContext(ReserveContext);
}

const reducer = (state, action) => {
  // {type, data}
  switch (action.type) {
    case "SET_CUSTOMER": {
      return { ...state, customer: { ...action.data } };
    }
    case "SET_COMPANIONS": {
      return { ...state, companions: { ...action.data } };
    }
    case "SET_PAYMENT": {
      return { ...state, payment: { ...action.data } };
    }
    case "CHANGE_PERCENT": {
      return { ...state, percent: action.data };
    }
  }
  return state;
};

export default function ReserveProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { percent: 0 });

  return (
    <ReserveContext.Provider value={[state, dispatch]}>
      {children}
    </ReserveContext.Provider>
  );
}
