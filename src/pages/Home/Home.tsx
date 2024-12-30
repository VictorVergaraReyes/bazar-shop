import SearchBar from "../../components/searchBar";
import { Box } from "@mui/material";
import { Filter } from "../../components/filter";
import { RecomendedProducts } from "./components/RecomendedProducts";
import { TopProducts } from "./components/TopProducts";
import { PrincipalCard } from "../MainLayout/PrincipalCard";
import Grid from "@mui/material/Grid2";

const styles = {
  searchBar: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    position:"relative",
    top:"10vh"
  },
};


export const Home = () => {
  return (
    <>
      <Box sx={styles.searchBar}>
        <SearchBar
          onSearch={() => {
            console.log("search");
          }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid size={3}><Filter/></Grid>
        <Grid size={9}><PrincipalCard/></Grid>
      </Grid>
      
      
      <h2>Recomended for you</h2>
      <RecomendedProducts/>
      <h2>Top products</h2>
      <TopProducts/>
    </>
  );
};
