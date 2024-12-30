//import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { Star } from "lucide-react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import { formatMoney } from "../utils/formatMoney";

interface ProductCardProps {
  name: string;
  image: string;
  rating: number;
  price: number;
}

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%', // Asegura que la tarjeta ocupe todo el alto disponible
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  "&:hover": {
    boxShadow: theme.shadows[5],
  },
  borderRadius: '12px'
}));

const ImageWrapper = styled("div")({
  position: "relative",
  flex: 1, // Permite que la imagen ocupe el espacio disponible
  minHeight: 0, // Importante para que flex: 1 funcione correctamente
});

// Eliminamos StyledCardMedia y usaremos CardMedia directamente

const RatingChip = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#403E43",
  "& .MuiChip-icon": {
    color: "#F97316",
  },
}));

const StyledButton = styled(Button)(({}) => ({
  borderRadius: "10px",
  backgroundColor: "#9b87f5",
  color: "white",
  fontSize:'12px',
  //padding: "8px 16px",
  "&:hover": {
    backgroundColor: "#7E69AB",
  },
}));

const ProductCard = ({
  name,
  image,
  rating,
  price,
}: ProductCardProps) => {
  return (
    // <Grid item xs={12} sm={6} md={4}> size={{ xs: 6, md: 8 }}
    <Grid size={{ xs: 4, sm: 3, md: 3 }}>
      <StyledCard>
        <ImageWrapper sx={{height:'75%'}}>
          <CardMedia
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            image={image}
          />
          <RatingChip
            icon={<Star size={16} style={{ fill: "#F97316" }} />}
            label={rating.toFixed(1)}
            size="small"
          />
        </ImageWrapper>
        <CardHeader
          title={name}
          sx={{
            fontSize:'9px',
            "& .MuiCardHeader-title": {
              fontSize:'16px',
              fontWeight: 600,
              color: "#403E43",
            },
          }}
        />
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height:'15%'
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize:'16px',
                fontWeight: 700,
                color: "#7E69AB",
              }}
            >
              {formatMoney(price)}
            </Typography>
            <StyledButton size="small">Add to Cart</StyledButton>
          </div>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

export default ProductCard;
