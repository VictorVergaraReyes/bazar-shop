import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Rating,
  Box,
  Chip,
  IconButton,
  Tooltip,
  useTheme,
  styled,
} from '@mui/material';
import {
  ShoppingCart as CartIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  LocalOffer as DiscountIcon,
} from '@mui/icons-material';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
    discount?: number;
    stock: number;
    category: string;
  };
  onAddToCart: (productId: string) => void;
  colorScheme?: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
}

const StyledCard = styled(Card)<{ colors: ProductCardProps['colorScheme'] }>(
  ({ theme, colors }) => ({
    maxWidth: 345,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s ease-in-out',
    backgroundColor: colors?.primary || theme.palette.background.paper,
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.shadows[8],
    },
  })
);

const StyledPrice = styled(Typography)<{ hasDiscount?: boolean }>(
  ({ hasDiscount }) => ({
    textDecoration: hasDiscount ? 'line-through' : 'none',
    color: hasDiscount ? 'text.secondary' : 'text.primary',
  })
);

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  colorScheme = {},
}) => {
  const theme = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    id,
    name,
    description,
    price,
    originalPrice,
    rating,
    image,
    discount,
    stock,
    category,
  } = product;

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = () => {
    onAddToCart(id);
  };

  return (
    <StyledCard colors={colorScheme}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
          sx={{ objectFit: 'cover' }}
        />
        {discount && (
          <Chip
            icon={<DiscountIcon />}
            label={`${discount}% OFF`}
            color="error"
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              backgroundColor: colorScheme.accent || theme.palette.error.main,
            }}
          />
        )}
        <IconButton
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'white',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
          }}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? (
            <FavoriteIcon sx={{ color: theme.palette.error.main }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          sx={{ color: colorScheme.secondary || 'text.primary' }}
        >
          {name}
        </Typography>

        <Box sx={{ mb: 1 }}>
          <Chip
            label={category}
            size="small"
            sx={{
              backgroundColor: colorScheme.secondary || theme.palette.primary.light,
              color: 'white',
            }}
          />
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, flexGrow: 1 }}
        >
          {description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={rating} precision={0.5} readOnly size="small" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({rating})
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 1,
            mb: 2,
          }}
        >
          {originalPrice && (
            <StyledPrice variant="body1" hasDiscount>
              ${originalPrice}
            </StyledPrice>
          )}
          <Typography variant="h6" component="span" color="primary.main">
            ${price}
          </Typography>
        </Box>

        <Tooltip title={stock === 0 ? 'Out of stock' : 'Add to cart'}>
          <span>
            <Button
              variant="contained"
              startIcon={<CartIcon />}
              fullWidth
              onClick={handleAddToCart}
              disabled={stock === 0}
              sx={{
                backgroundColor: colorScheme.accent || theme.palette.primary.main,
                '&:hover': {
                  backgroundColor:
                    colorScheme.accent || theme.palette.primary.dark,
                },
              }}
            >
              {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          </span>
        </Tooltip>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;