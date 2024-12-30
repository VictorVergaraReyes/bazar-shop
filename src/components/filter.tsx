import { Box } from "@mui/material"

const styles = {
    list:{
        // width:'20%',
        // heigth:'100%'
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