import React, { useEffect, useState } from 'react';
import RecepciostaService from '../../service/RecepcionistaService';
import { Link } from 'react-router-dom';
export default function ListRecepcionistaComponent() {
    const[recepcionista, setRecepcionista] = useState([]);
    useEffect(()=>{
        listarRecepcionistas();
    },[]);

    const listarRecepcionistas = () => {
        RecepciostaService.getAllRecepcionistas().then((response)=>{
            setRecepcionista(response.data);
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }

    const deleteRecepcionista = () =>{
        RecepciostaService.deleteRecepcionista(recepcionista).then((response)=>{
            listarRecepcionistas();
        })
    }
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full px-4 md:px-6 py-8 md:py-12">
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div>
          <a href="/gerente-general-gestion-personal" className="btn btn-secondary position-fixed top-0 start-0 m-3">Volver</a>
        
            
          </div>
          <h1 className="text-2xl font-bold md:text-3xl">Recepcionistas</h1>
          <Link to="/gestionar-personal-recepcionista-add" className="btn btn-primary">Agregar Recepcionista</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Usuario</th>
                <th scope="col">Contraseña</th>
                <th scope="col">Operaciones</th>
              </tr>
            </thead>
            <tbody>
              {recepcionista.map(recep => (
                <tr key={recep.id} className="group hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <td className="font-medium">{recep.id}</td>
                  <td>{recep.nombre}</td>
                  <td>{recep.email}</td>
                  <td>{recep.usuario}</td>
                  <td>{recep.contraseña}</td>
                  <td className="flex items-center gap-2">
                    <Link to={`/gestionar-personal-recepcionista-edit/${recep.id}`} className="btn btn-info">Editar</Link>&nbsp;&nbsp;
                    <button className="btn btn-danger" onClick={() => deleteRecepcionista(recep.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}
