import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function ButtonRouter() {
  return (
    <div>
      <Button color="primary" component={Link} to="/form-service">
        button service
      </Button>
    </div>
  );
}
