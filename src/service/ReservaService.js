import axios from "axios"

const URL_ALL_RESERVA = 'http://localhost:8000/reservas/getReserva';
const URL_DELETE_RESERVA = 'http://localhost:8000/reservas/delete';
const URL_UPDATE_RESERVA = 'http://localhost:8000/reservas/update';
const URL_CREATE_RESERVA = 'http://localhost:8000/reservas/postReserva';


class ReservaService{
    createReserva(reserva){
        return axios.post(URL_CREATE_RESERVA, reserva);

    }
    getAllReserva(){
        return axios.get(URL_ALL_RESERVA);
    }
    getById(id){
        return axios.get(`${URL_ALL_RESERVA}/${id}`);
    }
    updateReserva(id, reserva){
        return axios.put(`${URL_UPDATE_RESERVA}/${id}`, reserva);
    }
    deleteReserva(id){
        return  axios.delete(URL_DELETE_RESERVA + "/" + id);


}
}
export default new ReservaService();

