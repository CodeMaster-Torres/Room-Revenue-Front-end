import axios from "axios";
const URL_ALL_RECEPCIONISTAS = 'http://localhost:8000/recepcionista/getRecepcionistas';
const URL_DELETE_RECEPCIONISTA = 'http://localhost:8000/recepcionista/deleteRecepcionista';
const URL_UPDATE_RECEPCIONISTA = 'http://localhost:8000/recepcionista/updateRecepcionista';
const URL_CREATE_RECEPCIONISTA = 'http://localhost:8000/recepcionista/saveRecepcionista';


class RecepcionistaService{
    createRecepcionista(recepcionista){
        return axios.post(URL_CREATE_RECEPCIONISTA, recepcionista);
    }
    getAllRecepcionistas(){
        return axios.get(URL_ALL_RECEPCIONISTAS);
    }
    getById(id){
        return axios.get(`${URL_ALL_RECEPCIONISTAS}/${id}`);
    }
    updateRecepcionista(id, recepcionista) {
        return axios.put(`${URL_UPDATE_RECEPCIONISTA}/${id}`, recepcionista);
    }
    deleteRecepcionista(id){
        return axios.delete(`${URL_DELETE_RECEPCIONISTA}/${id}`)
    }
}

export default new RecepcionistaService();