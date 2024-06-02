import { Link } from "react-router-dom";

export default function PanelGestionPersonal() {
  return (
    <div className="container mt-5">
      <a href="/gerente-general" className="btn btn-secondary position-fixed top-0 start-0 m-3">Volver</a>
      <div className="row">
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Gestionar Recepcionistas</h5>
              <p className="card-text">Aquí puedes gestionar a los recepcionistas del hotel.</p>
              <Link to="/gestionar-personal-recepcionista" className="btn btn-outline-secondary">Editar personal</Link>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}> {/* Ajuste aquí */}
              <img src="/img/campana-de-recepcion.png" className="card-img-bottom" alt="Imagen relacionada" style={{ width: '64px', height: '64px' }} />
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Gestionar Gerentes División Cuartos</h5>
              <p className="card-text">Aquí puedes gestionar a los gerentes de la división de cuartos.</p>
              <Link to="/gestionar-personal-div-cuartos" className="btn btn-outline-secondary">Editar personal</Link>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}> {/* Ajuste aquí */}
              <img src="/img/llave-de-la-habitacion.png" className="card-img-bottom" alt="Imagen relacionada" style={{ width: '64px', height: '64px' }} />
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Gestionar Gerentes Reservaciones</h5>
              <p className="card-text">Aquí puedes gestionar a los gerentes de reservaciones del hotel.</p>
              <Link to="/gestionar-personal-gerente-reservas" className="btn btn-outline-secondary">Editar personal</Link>
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
