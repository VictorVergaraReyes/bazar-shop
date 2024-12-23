import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <h1>MainLayout</h1>
      <Outlet />
      <Footer />
    </div>
  );
};
