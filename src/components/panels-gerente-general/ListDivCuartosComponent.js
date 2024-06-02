import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import GerenteGeneralService from '../../service/GerenteGeneralService';

export default function ListDivCuartosComponent() {
  const [divCuartos, setDivCuartos] = useState([]);

  useEffect(() => {
    listarDivCuartos();
  }, []);

  const deleteDivCuartos = (divCuartosId) => {
    GerenteGeneralService.deleteDivCuartos(divCuartosId).then((response) => {
      listarDivCuartos();
    });
  };

  const listarDivCuartos = () => {
    GerenteGeneralService.getAllDivCuartos().then((response) => {
      setDivCuartos(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 md:px-6 py-8 md:py-12">
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div>
          <a href="/gerente-general-gestion-personal" className="btn btn-secondary position-fixed top-0 start-0 m-3">Volver</a>
        
            
          </div>
          <h1 className="text-2xl font-bold md:text-3xl">Gerentes División Cuartos</h1>
          <Link to="/gestionar-personal-div-cuartos-add" className="btn btn-primary">Agregar Gerente</Link>
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
              {divCuartos.map(divCuarto => (
                <tr key={divCuarto.id} className="group hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <td className="font-medium">{divCuarto.id}</td>
                  <td>{divCuarto.nombre}</td>
                  <td>{divCuarto.email}</td>
                  <td>{divCuarto.usuario}</td>
                  <td>{divCuarto.contraseña}</td>
                  <td className="flex items-center gap-2">
                    <Link to={`/gestionar-peronsal-edit/${divCuarto.id}`} className="btn btn-info">Editar</Link>&nbsp;&nbsp;
                    <button className="btn btn-danger" onClick={() => deleteDivCuartos(divCuarto.id)}>Eliminar</button>
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
