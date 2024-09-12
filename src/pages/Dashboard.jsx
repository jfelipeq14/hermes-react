import BarsChart from "../components/dashboard/BarsChart";
import LinesChart from "../components/dashboard/LinesChart";
import PiesChart from "../components/dashboard/PiesChart";

export default function Dashboard() {
  return (
    <div className="row text-center justify-content-center align-items-center">
      <h1>Dashboard</h1>
      <div className="col-sm-12 col-md-6">
        <BarsChart />
      </div>
      <div className="col-sm-12 col-md-6">
        <LinesChart />
      </div>
      <div className="col-sm-12 col-md-6 mx-auto">
        <div className="mx-auto">
          <PiesChart />
        </div>
      </div>
    </div>
  );
}
