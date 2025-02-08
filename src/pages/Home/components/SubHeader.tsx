import { Box } from "@mui/material"
import SearchBar from "../../../components/searchBar"

const styles = {
    searchBar: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      position:"relative",
      top:"10vh"
    },
  };

export const SubHeader = () => {
    return(<Box sx={{width:'100%'}}>
        <Box sx={styles.searchBar}>
        <SearchBar
          onSearch={() => {
            console.log("search");
          }}
        />
      </Box>    
    </Box>)
}