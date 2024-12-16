import { Box } from "@mui/material";

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

export const Footer = () => {
  return (
    <>
      <Box>
        {footerData.map((section) => {
          return (
            <Box key={section.head}>
              <h1>{section.head}</h1>
              {section.body.map((item) => (
                <div key={item.text}>{item.text}</div>
              ))}
            </Box>
          );
        })}
      </Box>
    </>
  );
};
