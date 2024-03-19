import React from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import './Form.css'

const FormMain = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            nombre: event.target.nombre.value,
            apellido: event.target.apellido.value,
            telefono: event.target.telefono.value,
            email: event.target.email.value,
            mensaje: event.target.mensaje.value,
        };

        try {
            const result = await fetch('/contact_form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...formData, secret: 'firebaseIsCool' }),
            });

            // Hacer algo con el resultado de la solicitud, si es necesario
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}> {/* Aquí agregamos onSubmit para que el formulario se maneje correctamente */}
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
                        <Button variant="contained" color="primary" type="submit" fullWidth> {/* Aquí agregamos type="submit" para que el botón envíe el formulario */}
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default FormMain;
