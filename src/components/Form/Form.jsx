// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Snackbar } from '@mui/material';
import './Form.css';

const FormMain = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { target } = event;
        const formData = {
            nombre: target.nombre.value,
            apellido: target.apellido.value,
            telefono: target.telefono.value,
            email: target.email.value,
            mensaje: target.mensaje.value,
            secret: 'firebaseIsCool'
        };

        try {
            const response = await fetch(
              "https://contactform-z4em4uyszq-uc.a.run.app",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              }
            );
            console.log(response)
            console.log(formData)
            // Verificar si la solicitud fue exitosa (código 200)
            if (response.ok) {
                setSnackbarOpen(true); // Mostrar mensaje de éxito
            } else {
                console.error('Error en la solicitud:', response.statusText);
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false); // Cerrar el Snackbar
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
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
                            autoComplete="on"
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
                            autoComplete="on"
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
                            autoComplete="on"
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
                            autoComplete="on"
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
                            autoComplete="on"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>

            {/* Snackbar para mostrar mensaje de éxito */}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message="¡Formulario enviado con éxito!"
            />
        </Container>
    );
}

export default FormMain;