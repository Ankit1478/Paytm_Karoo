import { AppbarClient } from "../../components/AppbarClient";
import Dashboard from "../../components/Dashboard";
import { SidebarItem } from "../../components/SidebarItem";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (<div>
    <AppbarClient></AppbarClient>
    <div className="flex">
      <div >
        <div>
          <Dashboard></Dashboard>
        </div>
      </div>
      {children}
    </div>
  </div>
  );
}

