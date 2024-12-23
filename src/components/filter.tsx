import { Box } from "@mui/material"

const styles = {
    list:{
        width:'20vw',
        heigth:'20vh'
    }
}
export const Filter = () => {
    return (<>
        <Box sx={styles.list}>
            <ul>
                <li>Men</li>
                <li>Woman</li>
                <li>Unisex</li>
                <li>Kids</li>
            </ul>
        </Box>
    </>)
}