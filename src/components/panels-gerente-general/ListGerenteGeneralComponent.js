import React, { useEffect, useState } from 'react';
import GerenteReservacionesService from '../../service/GerenteReservacionesService'
import { Link } from 'react-router-dom';


export default function ListDivCuartosComponent() {
  const [gerenteRerservaciones, setGerenteReservaciones] = useState([]);

  useEffect(() => {
    listarGerenteReservaciones();
  }, []);

  const deleteGerenteReservaciones = (divCuartosId) => {
    GerenteReservacionesService.deleteGerenteReservaciones(divCuartosId).then((response) => {
        listarGerenteReservaciones();
    });
  };

  const listarGerenteReservaciones = () => {
    GerenteReservacionesService.getAllGerenteReservaciones().then((response) => {
        setGerenteReservaciones(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 md:px-6 py-8 md:py-12">
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div>
          <a href="/gerente-general-gestion-personal" className="btn btn-secondary position-fixed top-0 start-0 m-3">Volver</a>
        
            
          </div>
          <h1 className="text-2xl font-bold md:text-3xl">Gerentes Reservaciones</h1>
          <Link to="/gestionar-personal-gerente-reservas-add" className="btn btn-primary">Agregar Gerente</Link>
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
              {gerenteRerservaciones.map(gerenteReserva => (
                <tr key={gerenteReserva.id} className="group hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <td className="font-medium">{gerenteReserva.id}</td>
                  <td>{gerenteReserva.nombre}</td>
                  <td>{gerenteReserva.email}</td>
                  <td>{gerenteReserva.usuario}</td>
                  <td>{gerenteReserva.contraseña}</td>
                  <td className="flex items-center gap-2">
                    <Link to={`/gestionar-peronsal-gerente-reservas-edit/${gerenteReserva.id}`} className="btn btn-info">Editar</Link>&nbsp;&nbsp;
                    <button className="btn btn-danger" onClick={() => deleteGerenteReservaciones(gerenteReserva.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
