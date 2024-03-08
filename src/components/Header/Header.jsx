// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import './Header.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function BasicButtons() {
  return (
    <div className='conteiner'>
    <Stack spacing={4} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </div>
  );
}