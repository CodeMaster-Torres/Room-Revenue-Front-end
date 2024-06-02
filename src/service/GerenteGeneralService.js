import axios from "axios"

const URL_ALL_DIV_CUARTOS = 'http://localhost:8000/divCuartos/getDivCuartos';
const URL_DELETE_DIV_CUARTOS = 'http://localhost:8000/divCuartos/deleteDivCuartos';
const URL_UPDATE_DIV_CUARTOS = 'http://localhost:8000/divCuartos/updateDivCuartos';
const URL_CREATE_DIV_CUARTOS = 'http://localhost:8000/divCuartos/saveDivCuartos';

class GerenteGeneralService {
    createDivCuartos(divCuartos){
        return axios.post(URL_CREATE_DIV_CUARTOS, divCuartos);

    }
    getAllDivCuartos(){
        return axios.get(URL_ALL_DIV_CUARTOS);
    }
    getById(id){
        return axios.get(`${URL_ALL_DIV_CUARTOS}/${id}`);
    }
    updateDivCuartos(id, divCuartos){
        return axios.put(`${URL_UPDATE_DIV_CUARTOS}/${id}`, divCuartos);
    }
    deleteDivCuartos(id){
        return  axios.delete(URL_DELETE_DIV_CUARTOS + "/" + id);
    }

}

export default new GerenteGeneralService();