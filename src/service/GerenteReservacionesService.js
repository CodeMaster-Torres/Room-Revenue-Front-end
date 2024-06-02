import axios from "axios"

const URL_ALL_GERENTE_RESERVACIONES = 'http://localhost:8000/gerenteReservaciones/getGerenteReservaciones';
const URL_DELETE_GERENTE_RESERVACIONES = 'http://localhost:8000/gerenteReservaciones/deleteGerenteReservaciones';
const URL_UPDATE_GERENTE_RESERVACIONES = 'http://localhost:8000/gerenteReservaciones/updateGerenteReservaciones';
const URL_CREATE_GERENTE_RESERVACIONES = 'http://localhost:8000/gerenteReservaciones/saveGerenteReservaciones';


class GerenteReservacionesService{
    createGerenteReservaciones(gerenteReservaciones){
        return axios.post(URL_CREATE_GERENTE_RESERVACIONES, gerenteReservaciones);
    }
    getAllGerenteReservaciones(){
        return axios.get(URL_ALL_GERENTE_RESERVACIONES);
    }
    getById(id){
        return axios.get(`${URL_ALL_GERENTE_RESERVACIONES}/${id}`);
    }
    updateGerenteReservaciones(id, gerenteReservaciones){
        return axios.put(`${URL_UPDATE_GERENTE_RESERVACIONES}/${id}`, gerenteReservaciones);
    }
    deleteGerenteReservaciones(id){
        return axios.delete(URL_DELETE_GERENTE_RESERVACIONES + "/" + id);
    }

}
export default new GerenteReservacionesService();