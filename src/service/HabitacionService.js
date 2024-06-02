import axios from "axios"

const URL_ALL_HABITACION = 'http://localhost:8000/habitaciones/getHabitacion';
const URL_DELETE_HABITACION = 'http://localhost:8000/habitaciones/deleteHabitacion';
const URL_UPDATE_HABITACION = 'http://localhost:8000/habitaciones/updateHabitacion';
const URL_CREATE_HABITACION = 'http://localhost:8000/habitaciones/postHabitacion';


class HabitacionService{
    createhabitacion(habitacion){
        return axios.post(URL_CREATE_HABITACION, habitacion);

    }
    getAllhabitacion(){
        return axios.get(URL_ALL_HABITACION);
    }
    getById(id){
        return axios.get(`${URL_ALL_HABITACION}/${id}`);
    }
    updatehabitacion(id, habitacion){
        return axios.put(`${URL_UPDATE_HABITACION}/${id}`, habitacion);
    }
    deletehabitacion(id){
        return  axios.delete(URL_DELETE_HABITACION + "/" + id);


}
}
export default new HabitacionService();

