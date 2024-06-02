import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RecepcionistaService from '../../service/RecepcionistaService';

export default function AddRecepcionistaComponent() {
      // Estados para los campos del formulario
   const [nombre, setNombre] = useState('');
   const [email, setEmail] = useState('');
   const [usuario, setUsuario] = useState('');
   const [contraseña, setContraseña] = useState('');
   const [tipoUsuario] = useState('RECEPCIONISTA');

   const {id} = useParams();
   const navigate = useNavigate();

   const saveOrUpdate = (e) => {
    e.preventDefault();
    const recepcionista = { nombre, email, usuario, contraseña, tipoUsuario };
    
    // Si hay un ID, actualizamos, si no, creamos uno nuevo
    if (id) {
        RecepcionistaService.updateRecepcionista(id, recepcionista)
            .then(() => navigate('/gestionar-personal-recepcionista'))
            .catch(console.error);
    } else {
        RecepcionistaService.createRecepcionista(recepcionista)
            .then(() => navigate('/gestionar-personal-recepcionista'))
            .catch(console.error);
    }
};

const title = () => (
    <h2 className='text-center'>
        {id ? 'Actualizar Recepcionista' : 'Agregar Recepcionista'}
    </h2>
);
const back = () => navigate('/gestionar-personal-recepcionista');

// Efecto para cargar la información del gerente al editar
useEffect(() => {
    if (id) {
        RecepcionistaService.getById(id)
            .then((response) => {
                const { nombre, email, usuario, contraseña } = response.data;
                setNombre(nombre);
                setEmail(email);
                setUsuario(usuario);
                setContraseña(contraseña);
            })
            .catch(console.error);
    }
}, [id]);


  return (
    <div className='container'>
    <div className='card'>
        <div className='card-body'>
            <div className='login'> {title()} </div>
            <form onSubmit={saveOrUpdate}>
                {/* Campos del formulario */}
                <div className='space-y-4'>
                    {/* Campo Nombre */}
                    <div className='inputBox'>
                        <input
                            type='text'
                            
                            name='nombre'
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                        <span>Nombre</span>
                    </div>

                    {/* Campo Email */}
                    <div className='inputBox'>
                        <input
                            type='email'
                            
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <span>Email</span>
                    </div>

                    {/* Campo Usuario */}
                    <div className='inputBox'>
                        <input
                            type='text'
                            
                            name='usuario'
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                        />
                        <span>Usuario</span>
                    </div>

                    {/* Campo Contraseña */}
                    <div className='inputBox'>
                        <input
                            type='password'
                            
                            name='contraseña'
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            required
                        />
                        <span>Contraseña</span>
                    </div>
                </div>

                {/* Botones de acción */}
                <div className='flex justify-between'>
                    <button type='button' onClick={back} className='enter'>Cancelar</button>
                    <button type='submit' className='enter'>Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

