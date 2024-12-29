import SearchBar from "../../components/searchBar";
import { Box } from "@mui/material";
import { Filter } from "../../components/filter";
import ProductCard from "../../components/productCard";

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
      <ProductCard name="laptop" description="lorem ipsum" image="https://www.notebookcheck.org/fileadmin/Notebooks/Lenovo/ThinkPad_E16_G1_21JUS08X00/IMG_0312.JPG" rating={4}/>
      <Filter/>
    </>
  );
};
