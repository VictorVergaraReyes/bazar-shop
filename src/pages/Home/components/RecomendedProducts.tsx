//import { Box } from "@mui/material";
import ProductCard from "../../../components/productCard";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
const recomended = [
  {
    name: "Lenovo Thinkpad",
    description: "Slim and powefull",
    image:
      "https://www.notebookcheck.org/fileadmin/Notebooks/Lenovo/ThinkPad_E16_G1_21JUS08X00/IMG_0312.JPG",
    price:7500,    
      rating: 4.5,
  },
  {
    name: "Google Pixel 8",
    description: "Cool camera",
    image: "https://i.blogs.es/adefd2/pixel-8-16/375_375.jpeg",
    price:12000,    
    rating: 4,
  },
  {
    name: "Samsung curve monitor",
    description:
      "https://www.costco.com.mx/medias/sys_master/products/hc3/h92/189581990985758.jpg",
    image:
      "https://www.costco.com.mx/medias/sys_master/products/hc3/h92/189581990985758.jpg",
    price:2900,    
      rating: 4,
  },
  {
    name: "Ergonomic mouse",
    description: "Logitech lift ergonomic mouse",
    image:
      "https://www.zegucom.com.mx/productos/910-006472/miniatura/webp/img_1.webp",
    price:900,    
      rating: 5,
  },
];

const StyledBox = styled(Grid)(() => ({
  height: "300px",
  maxWidth: "sm",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  overflow: "hidden",
}));

export const RecomendedProducts = () => {
  return (
    <StyledBox container spacing={2}>
      {recomended.map((product) => (
        <ProductCard
          name={product.name}
          image={product.image}
          rating={product.rating}
          price={product.price}
        />
      ))}
    </StyledBox>
  );
};
