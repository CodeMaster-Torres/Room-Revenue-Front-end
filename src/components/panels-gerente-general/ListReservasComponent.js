import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReservaService from '../../service/ReservaService';
import ClienteService from '../../service/ClienteService';
import HabitacionService from '../../service/HabitacionService';


export default function ListReservasComponent() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    listarReservas();
  }, []);

  const listarReservas = () => {
    ReservaService.getAllReserva()
      .then(response => {
        setReservas(response.data);
      })
      .catch(error => {
        console.error('Error al obtener las reservas:', error);
      });
  };
  const deleteReserva = (idReserva) => {
    ReservaService.deleteReserva(idReserva)
      .then(() => {
        console.log('Reserva eliminada correctamente.');
        listarReservas();
      })
      .catch(error => {
        console.error('Error al eliminar la reserva:', error);
      });
  };

  const obtenerCliente = async (idCliente) => {
    try {
      const response = await ClienteService.getById(idCliente);
      return response.data;
    } catch (error) {
      console.error('Error al obtener el cliente:', error);
      return null;
    }
  };

  const obtenerHabitacion = async (idHabitacion) => {
    try {
      const response = await HabitacionService.getById(idHabitacion);
      return response.data;
    } catch (error) {
      console.error('Error al obtener la habitación:', error);
      return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 md:px-6 py-8 md:py-12">
    <div className="w-full max-w-4xl">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div>
          <a href="/gerente-general-gestion-personal" className="btn btn-secondary position-fixed top-0 start-0 m-3">Volver</a>
        </div>
        <h1 className="text-2xl font-bold md:text-3xl">Reservas</h1>
        <Link to="/gestionar-personal-recepcionista-add" className="btn btn-primary">Agregar Reserva</Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Número de Habitación</th>
              <th scope="col">Estatus</th>
              <th scope="col">Fecha de Entrada</th>
              <th scope="col">Fecha de Salida</th>
              <th scope="col">Número de Huéspedes</th>
              <th scope="col">Tarifa</th>
              <th scope="col">Cliente</th>
              <th scope="col">Operaciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map(reserva => (
              <tr key={reserva.id} className="group hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <td className="font-medium">{reserva.id}</td>
                <td>{reserva.num_habitacion}</td>
                <td>{reserva.estatus}</td>
                <td>{reserva.fecha_entrada}</td>
                <td>{reserva.fecha_salida}</td>
                <td>{reserva.numero_huespedes}</td>
                <td>{reserva.tarifa}</td>
                <td>{reserva.cliente.nombre}</td>
                <td className="flex items-center gap-2">
                  <Link to={`/gestionar-personal-recepcionista-edit/${reserva.id}`} className="btn btn-info">Editar</Link>&nbsp;&nbsp;
                  <button className="btn btn-danger" onClick={() => deleteReserva(reserva.id)}>Eliminar</button>
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
