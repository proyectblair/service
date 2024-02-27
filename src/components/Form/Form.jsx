import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Form.css'
const FormMain = () => {
    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for="nombre">Nombre</Label>
                    <Input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
                </FormGroup>
                <FormGroup>
                    <Label for="apellido">Apellido</Label>
                    <Input type="text" name="apellido" id="apellido" placeholder="Ingrese su apellido" />
                </FormGroup>
                <FormGroup>
                    <Label for="telefono">Teléfono</Label>
                    <Input type="tel" name="telefono" id="telefono" placeholder="Ingrese su teléfono" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Ingrese su email" />
                </FormGroup>
                <FormGroup>
                    <Label for="mensaje">Describe tu problema</Label>
                    <Input type="textarea" name="mensaje" id="mensaje" placeholder="Escriba su mensaje aquí" />
                </FormGroup>
                <Button color="primary">Enviar</Button>
            </Form>
        </Container>
    );
}

export default FormMain;

