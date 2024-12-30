import { Box,Card, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface ProductDetailProps {
    id:number;
    name: string;
    image: string;
    rating: number;
    price: number;
    description: string;
  }

export const ProductDetail = ({id,name,image,rating,price,description}:ProductDetailProps) => {

    console.log(id,name,image,rating,price,description);
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Card>
                        <CardMedia image={image}/>
                    </Card>
                </Grid>
                <Grid size={6}>
                    <Box>
                        {name}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}