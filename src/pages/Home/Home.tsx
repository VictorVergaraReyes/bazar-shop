import SearchBar from "../../components/searchBar";
import { Box } from "@mui/material";
import { Filter } from "../../components/filter";
import { ProductCard } from "../../components/productCard";

const styles = {
  searchBar: {
    display: "flex",
    alignItems: "center",
    width: "100vw",
    position:"fixed",
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
      <ProductCard/>
      <Filter/>
    </>
  );
};
