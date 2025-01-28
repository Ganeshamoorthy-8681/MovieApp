import { Outlet } from "react-router";
import { AppHeader } from "../app-header/AppHeader";
import "./app-layout.css";
import { AppFooter } from "@cs/components/app-footer/AppFooter";
export function AppBase()
{

  return (
    <div className="main-content">
      <AppHeader />
      <div className="page-content">
        <Outlet></Outlet>
        <AppFooter />
      </div>
    </div>
  );
}
