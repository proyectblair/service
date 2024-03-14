import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function ButtonRouter() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '7rem' }}>
      <Button variant="contained" color="primary" component={Link} to="/form-service">
        button service
      </Button>
    </Box>
  );
}
