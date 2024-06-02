import axios from 'axios'

const URL_LOGIN = "http://localhost:8000/login";

class AuthService {
    async login(usuario, contraseña) {
        try {
            return axios.post(URL_LOGIN, { usuario, contraseña });
        } catch (error) {
            if (error.response) {
                // La solicitud se realizó y el servidor respondió con un código de estado
                console.error('Error de respuesta', error.response.data);
            } else if (error.request) {
                // La solicitud se realizó pero no se recibió respuesta
                console.error('Error de solicitud', error.request);
            } else {
                // Ocurrió un error al configurar la solicitud
                console.error('Error', error.message);
            }
            throw error;
        }
    }
}

export default new AuthService();
