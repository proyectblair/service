import React from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';

const FormMain = () => {
    return (
        <Container maxWidth="sm">
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Nombre"
                            variant="outlined"
                            name="nombre"
                            id="nombre"
                            placeholder="Ingrese su nombre"
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Apellido"
                            variant="outlined"
                            name="apellido"
                            id="apellido"
                            placeholder="Ingrese su apellido"
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Teléfono"
                            variant="outlined"
                            name="telefono"
                            id="telefono"
                            type="tel"
                            placeholder="Ingrese su teléfono"
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Ingrese su email"
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Describe tu problema"
                            variant="outlined"
                            name="mensaje"
                            id="mensaje"
                            multiline
                            rows={4}
                            placeholder="Escriba su mensaje aquí"
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth>
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default FormMain;


