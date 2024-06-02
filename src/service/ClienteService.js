import axios from "axios"

const URL_ALL_CLIENTES = "http://localhost:8000/clientes/getCliente";
const URL_CREATE_CLIENTE = "http://localhost:8000/clientes/saveCliente";
const URL_UPDATE_CLIENTE = "http://localhost:8000/clientes/updateCliente";
const URL_DELETE_CLIENTE = "http://localhost:8000/clientes/delete"


class ClienteService{
    createCliente(cliente){
        return axios.post(URL_CREATE_CLIENTE, cliente);
    }
    getAllClientes(){
        return axios.get(URL_ALL_CLIENTES);
    }
    getById(id){
        return axios.get(`${URL_ALL_CLIENTES}/${id}`);
    }
    deleteCliente(id){
        return axios.delete(`${URL_DELETE_CLIENTE}/${id}`);
    }
    updateCliente(id, cliente){
        return axios.put(`${URL_UPDATE_CLIENTE}/${id}`, cliente);
    }
}
export default new ClienteService();


