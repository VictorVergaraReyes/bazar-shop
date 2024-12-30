import { Box,
    // Card, CardMedia
 } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import { useState } from "react";

import { useParams } from 'react-router-dom';


export const ProductDetail = () => {
    let { productId } = useParams();

    // const [image, setimage] = useState('')
    // const [name, setname] = useState('')

    // setname("Bleu chanel")
    // setimage("https://www.chanel.com/images//t_one/t_fragrance//q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/bleu-de-chanel-parfum-spray-3-4fl-oz--packshot-default-107180-9539148775454.jpg")

    console.log("id",productId);
    return (
        <Box>
            {/* <Grid container spacing={2}>
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
            </Grid> */}
        </Box>
    )
}