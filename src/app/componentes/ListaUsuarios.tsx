// src/components/ListaUsuarios.tsx
// Este componente muestra una lista de usuarios.
// Utiliza el endpoint GET 'https://jsonplaceholder.typicode.com/users' para obtener la lista de usuarios.
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Usuario {
  id: number;
  name: string;
  email: string;
}

const ListaUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get<Usuario[]>('https://jsonplaceholder.typicode.com/users');
        setUsuarios(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerUsuarios();
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.name} - {usuario.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
