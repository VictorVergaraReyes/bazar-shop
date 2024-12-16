import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
    <div>
      <h1>MainLayout</h1>
      <Outlet />
        <Footer/>

    </div>
  );
};
