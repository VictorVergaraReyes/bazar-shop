import { Box, Typography } from "@mui/material";
import { theme } from "../../styled-components/theme";

const footerData = [
  {
    head: "Support",
    body: [
      { text: "mail@sample.com", link: "" },
      { text: "(52) 55 08394756", link: "" },
    ],
  },
  {
    head: "Account",
    body: [
      { text: "My account", link: "" },
      { text: "Login register", link: "" },
      { text: "Cart", link: "" },
      { text: "Special Offer", link: "" },
    ],
  },
  {
    head: "Quick Link",
    body: [
      { text: "Privacy policy", link: "" },
      { text: "Terms of use", link: "" },
      { text: "FAQ", link: "" },
      { text: "Contact", link: "" },
    ],
  },
  {
    head: "Social Media",
    body: [
      { text: "Facebook", link: "" },
      { text: "Terms of use", link: "" },
      { text: "Instagram", link: "" },
    ],
  },
];

const styles = {
  head: {
    fontSize: "14px",
    color:theme.palette.text.secondary
  },
  bodyText: {
    fontSize: "12px",
  },
  footerStyle: {
    width: "100%",
    display: "flex",
    padding:"20px 0px",
    flexDirection: "row",
    position: "fixed",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    bottom: "0",
    backgroundColor:"#000"
  },
};

export const Footer = () => {
  return (
    <>
      <Box sx={styles.footerStyle}>
        {footerData.map((section) => {
          return (
            <Box key={section.head}>
              <Typography sx={styles.head}>{section.head}</Typography>
              {section.body.map((item) => (
                <Typography sx={styles.bodyText} key={item.text}>
                  {item.text}
                </Typography>
              ))}
            </Box>
          );
        })}
      </Box>
    </>
  );
};
