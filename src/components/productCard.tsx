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

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  rating: number;
  price?: string;
}

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "sm",
  width: "auto",
  height: "100%",
  overflow: "hidden",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: theme.shadows[5],
  },
  borderRadius:'12px'
}));

const ImageWrapper = styled("div")({
  position: "relative",
  aspectRatio: "2/1",
  overflow: "hidden",
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
  borderRadius: "9999px",
  backgroundColor: "#9b87f5",
  color: "white",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: "#7E69AB",
  },
}));

const ProductCard = ({
  name,
  description,
  image,
  rating,
  price = "$999.99",
}: ProductCardProps) => {
  return (
    // <Grid item xs={12} sm={6} md={4}> size={{ xs: 6, md: 8 }}
    <Grid size={{ xs: 4, sm: 3, md: 2 }}>
      <StyledCard>
        <ImageWrapper>
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
              fontWeight: 600,
              color: "#403E43",
            },
          }}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "#8E9196", mb: 3 }}>
            {description}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#7E69AB",
              }}
            >
              {price}
            </Typography>
            <StyledButton size="small">Add to Cart</StyledButton>
          </div>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

export default ProductCard;
