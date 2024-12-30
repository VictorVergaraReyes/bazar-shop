import { Box, Typography } from "@mui/material";
import { theme } from "../../styled-components/theme";


const styles = {
  head: {
    fontSize: "14px",
    color:theme.palette.text.secondary
  },
  bodyText: {
    fontSize: "12px",
  },
  header: {
    width: "100vw",
    display: "flex",
    padding:"10px 0px",
    flexDirection: "row",
    position: "absolute",
    flexWrap: "wrap",
    justifyContent: "center",
    top: "0",
    backgroundColor:"#000"
  },
};

export const Header = () => {
  return (
    <>
      <Box sx={styles.header}>
        <Typography sx={styles.head}>Amazing discounts !!!</Typography>
      </Box>
    </>
  );
};
