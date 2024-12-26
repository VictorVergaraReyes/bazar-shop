//import React, { useState } from 'react';
import {
  Card,
  Typography,
  Box
} from '@mui/material';

interface ProductCardProps {
  image:string,
  price:string,
  name:string
}

export const ProductCard = ({} : React.FC<ProductCardProps>) => {

  return (<>
    <Card>
      <Box><img src="https://placehold.co/150x200" alt="Placeholder" /></Box>
      <Typography>$0.00</Typography>
      <Typography>Name</Typography>
    </Card>
  </>)
}