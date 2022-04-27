import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Button from '@mui/material/Button'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://secfinance.com.ar/">
        Sec Finance
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//Sobre el button <Copyright sx={{ pt: 4 }} />

function ContainerG() {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              
            <Orders />
            </Paper>
          </Grid>
        </Grid>
        

        <Button color="primary">asdasdasdasdsadasdasasad</Button>
    
        <Box  mt={10}
        sx={{
          border: '2px solid grey', 
         
        }}
        >

          Esto es un box

        </Box>
        <Box
        sx={{
          border: '2px solid grey'
        }}
        >
          Esto es un box2
        </Box>


        
      </Container>

    </div>
  )
}

export default ContainerG;


