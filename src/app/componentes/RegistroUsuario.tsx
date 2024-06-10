// src/components/RegistroUsuario.tsx
// Este componente maneja el formulario de registro de usuarios.
// Utiliza el endpoint POST 'https://jsonplaceholder.typicode.com/users' para registrar nuevos usuarios.
// src/components/RegistroUsuario.tsx
import React, { useState } from 'react';
import axios from 'axios';

const RegistroUsuario: React.FC = () => {
  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mensaje, setMensaje] = useState<string>('');

  const handleRegistro = async () => {
    if (!nombre || !email) {
      setMensaje('Por favor ingrese un nombre y un correo electrónico.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMensaje('Por favor ingrese un correo electrónico válido.');
      return;
    }

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', { name: nombre, email });
      setMensaje('Usuario registrado correctamente');
      console.log(response.data); // Puedes ver la respuesta del servidor en la consola
    } catch (error) {
      setMensaje('Error al registrar el usuario');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Registrar Usuario</h2>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleRegistro}>Registrar</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default RegistroUsuario;
