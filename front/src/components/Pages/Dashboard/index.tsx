import { Grid } from '@mui/material';
import Estacoes from './Estacoes';
import Manifestacoes from './Manifestacoes';

const Dashboard = () => {



  return (
    <Grid container>
      <Estacoes />
      <Manifestacoes />
    </Grid>
  )

}

export default Dashboard;