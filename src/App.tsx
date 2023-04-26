import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";

export const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
};
