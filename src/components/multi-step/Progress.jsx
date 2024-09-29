import { useReserve } from "../../providers/ReserveProvider";

const Progress = () => {
  const [state] = useReserve();

  return (
    <div className="progress m-3">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${state.percent}%` }}
        aria-valuemin={state.percent}
        aria-valuemax="100"
      >
        {state.percent}%
      </div>
    </div>
  );
};

export default Progress;
