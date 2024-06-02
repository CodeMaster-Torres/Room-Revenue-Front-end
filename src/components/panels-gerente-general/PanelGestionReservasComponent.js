import { Link } from "react-router-dom";

export default function PanelGestionReservasComponent() {
  return (
    <div className="container mt-5">
      <a href="/gerente-general" className="btn btn-secondary position-fixed top-0 start-0 m-3">Volver</a>
      <div className="row">
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Gestionar Reservaciones</h5>
              <p className="card-text">Aquí puedes gestionar a las reservaciones del hotel.</p>
              <Link to="/gestionar-reservas-list" className="btn btn-outline-secondary">Editar reservaciones</Link>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}> {/* Ajuste aquí */}
              <img src="/img/campana-de-recepcion.png" className="card-img-bottom" alt="Imagen relacionada" style={{ width: '64px', height: '64px' }} />
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Gestionar Habitaciones</h5>
              <p className="card-text">Aquí puedes gestionar a las habitaciones del hotel</p>
              <Link to="#" className="btn btn-outline-secondary">Editar habitaciones</Link>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}> {/* Ajuste aquí */}
              <img src="/img/llave-de-la-habitacion.png" className="card-img-bottom" alt="Imagen relacionada" style={{ width: '64px', height: '64px' }} />
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Gestionar Clientes</h5>
              <p className="card-text">Aquí puedes gestionar los clientes del hotel.</p>
              <Link to="#" className="btn btn-outline-secondary">Editar clientes</Link>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}> {/* Ajuste aquí */}
              <img src="/img/time-and-calendar.png" className="card-img-bottom" alt="Imagen relacionada" style={{ width: '64px', height: '64px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
