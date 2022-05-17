import Box from '@mui/material/Box';
import Button from '@mui/material/Button'


function Check({ value }) {
    return (
        <Box sx={{ p: 3, border: '1px dashed grey', boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)"}} >
            <Box> IOC {value.ioc} </Box>
            <Box> Descripción {value.description} </Box>

            <Box textAlign="right">
                <Button variant="text" color="secondary">
                    Edit
                </Button>
            </Box>
        </Box>

    )
}

export default Check;