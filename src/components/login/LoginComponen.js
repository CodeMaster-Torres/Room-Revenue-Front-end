import React, { useState } from 'react'
import '../../styles/styles-login.css'
import { Link, useNavigate } from 'react-router-dom'; 
import AuthService from '../../service/AuthService';
export default function LoginComponen() {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState(''); // Asegúrate de usar 'contraseña' en lugar de 'password'
    const [error, setError] = useState('');

    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await AuthService.login(usuario, contraseña);
            console.log(response.data); // Manejar la respuesta del backend, por ejemplo, redirigir al usuario a una página de inicio.
            const tipoUsuario = response.data;
            let ruta;
            if (response.data) {
                switch(tipoUsuario){
                    case 'Gerente General':
                        ruta = '/gerente-general';
                        break;
                    default :
                        console.log("no se encontro ruta");
                }
                if(ruta){
                    navigate(ruta);
                }

                
                setUserType(tipoUsuario);
           
                setError('');
            } else {
                setError('Error: No se pudo obtener el tipo de usuario.');
            }
        } catch (error) {
            setError('Error de inicio de sesión. Por favor, verifica tus credenciales.');
        }
    };

  return (
    <div class="container">
        
        <div class="card">
            <Link class="login">Log in</Link>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
            <div class="inputBox">
                <input type="text" 
                required="required"
                 name='usuario' 
                 value={usuario} onChange={(e) =>{setUsuario(e.target.value)}}></input>
                <span class="user">Usuario</span>
            </div>

            <div class="inputBox">
                <input type="password" 
                required="required"
                name='constraseña'
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                ></input>
                <span>Password</span>
            </div>
            {/* <input type='submit' className='enter'>Enter</input> */}
            <button type="submit"class="enter"  >Enter</button>
            
        </form>
        </div>
    </div>
  );
}
