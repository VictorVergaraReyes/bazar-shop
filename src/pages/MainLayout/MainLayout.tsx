import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Box } from "@mui/material";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Box sx={{padding:'0px 32px'}}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};
