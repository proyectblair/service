const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const {target} = event;
    const formData = {
      nombre: event.target.nombre.value,
      apellido: event.target.apellido.value,
      telefono: event.target.telefono.value,
      email: event.target.email.value,
      mensaje: event.target.mensaje.value,
    };

    const result = await fetch(
      '/contact_form',
      {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({...FormMain, secret: 'firebaseIsCool'}),
      }
    );

    // Hacer algo con el resultado de la solicitud, si es necesario
  };