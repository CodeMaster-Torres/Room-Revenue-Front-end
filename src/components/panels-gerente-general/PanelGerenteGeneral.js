import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PanelGerenteGeneral() {
  return (
    <div className="container mt-5">
      <a href="/" className="btn btn-danger position-fixed top-0 end-0 m-3">Logout</a>
      <div className="jumbotron">
        <h1 className="display-4">Bienvenido</h1>
        <p className="lead">Sistema de reserva de hotel. Controle y administre de forma óptima y fácil el flujo de reservas, huéspedes y personal del hotel.</p>
        <hr className="my-1" />
        <p>Esta herramienta le permitirá llevar un control completo y detallado de sus reservas y huéspedes y tendrá acceso a herramientas especiales para tareas específicas.</p>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">👥 Administrar Personal</h5>
                <p className="card-text">Gestione el equipo de su hotel de manera eficiente.</p>
                <Link className="btn btn-primary" to={'/gerente-general-gestion-personal'}>Ir a Personal</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">📖 Administrar Reservas</h5>
                <p className="card-text">Controle las reservas y la ocupación del hotel.</p>
                <Link className="btn btn-success" to={'/gestionar-reservas'}>Ir a Reservas</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">🛏️ Administrar Habitaciones</h5>
                <p className="card-text">Administre las habitaciones y su disponibilidad.</p>
                <Link className="btn btn-secondary" to={'/gerente-general-gestion-habitaciones'}>Ir a Habitaciones</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
