import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'


function Check({ value }) {
    return (
        <Container maxWidth="lg">
          
        <Box sx={{ p: 3, m: 3, border: '1px dashed grey', boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)"}} >
            <Box> IOC {value.ioc} </Box>
            <Box> Descripción {value.description} </Box>

            <Box textAlign="right">
                <Button variant="text" color="secondary">
                    Edit
                </Button>
                <Button variant="text" color="secondary">
                    Delete
                </Button>
            </Box>
        </Box>
        </Container>

    )
}

export default Check;