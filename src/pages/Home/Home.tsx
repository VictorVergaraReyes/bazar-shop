import { SubHeader } from "./components/SubHeader";
import { Filter } from "../../components/filter";
import { RecomendedProducts } from "./components/RecomendedProducts";
import { TopProducts } from "./components/TopProducts";
import { PrincipalCard } from "../MainLayout/PrincipalCard";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";




export const Home = () => {
  return (
    <Box sx={{width:'100%'}}>
      <SubHeader/>
      <Grid container spacing={2}>
        <Grid size={3}><Filter/></Grid>
        <Grid size={9}><PrincipalCard/></Grid>
      </Grid>
      
      
      <h2>Recomended for you</h2>
      <RecomendedProducts/>
      <h2>Top products</h2>
      <TopProducts/>
    </Box>
  );
};
