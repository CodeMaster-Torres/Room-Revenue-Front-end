
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import LoginComponen from './components/login/LoginComponen';
import PanelGerenteGeneral from './components/panels-gerente-general/PanelGerenteGeneral';
import PanelGestionPersonal from './components/panels-gerente-general/PanelGestionPersonal';
import ListDivCuartosComponent from './components/panels-gerente-general/ListDivCuartosComponent';
import AddDivCuartosComponent from './components/panels-gerente-general/AddDivCuartosComponent';
import AddGerenteReservaciones from './components/panels-gerente-general/AddGerenteReservaciones';
import ListGerenteGeneralComponent from './components/panels-gerente-general/ListGerenteGeneralComponent';
import ListRecepcionistaComponent from './components/panels-gerente-general/ListRecepcionistaComponent';
import AddRecepcionistaComponent from './components/panels-gerente-general/AddRecepcionistaComponent';
import PanelGestionReservasComponent from './components/panels-gerente-general/PanelGestionReservasComponent';
import ListReservasComponent from './components/panels-gerente-general/ListReservasComponent';
function App() {
  return (
   <div className='App'>
    <Router>
      <Routes>
      <Route path="/" element={<LoginComponen></LoginComponen>} />

      <Route path='/gerente-general' element={<PanelGerenteGeneral></PanelGerenteGeneral>}></Route>
      <Route path='/gerente-general-gestion-personal' element={<PanelGestionPersonal></PanelGestionPersonal>}></Route>
      <Route path='/gestionar-personal-div-cuartos' element={<ListDivCuartosComponent></ListDivCuartosComponent>}></Route>
      <Route path='/gestionar-personal-div-cuartos-add' element={<AddDivCuartosComponent></AddDivCuartosComponent>}></Route>
      <Route path='/gestionar-peronsal-edit/:id'element={<AddDivCuartosComponent></AddDivCuartosComponent>}></Route>

      <Route path='/gestionar-personal-gerente-reservas' element={<ListGerenteGeneralComponent></ListGerenteGeneralComponent>}></Route>
      <Route path='/gestionar-personal-gerente-reservas-add' element={<AddGerenteReservaciones></AddGerenteReservaciones>}></Route>
      <Route path='/gestionar-peronsal-gerente-reservas-edit/:id'element={<AddGerenteReservaciones></AddGerenteReservaciones>}></Route>

      <Route path='/gestionar-personal-recepcionista' element = {<ListRecepcionistaComponent></ListRecepcionistaComponent>}></Route>
      <Route path='/gestionar-personal-recepcionista-add' element={<AddRecepcionistaComponent></AddRecepcionistaComponent>}></Route>
      <Route path='/gestionar-personal-recepcionista-edit/:id' element={<AddRecepcionistaComponent></AddRecepcionistaComponent>}></Route>

      <Route path='/gestionar-reservas' element={<PanelGestionReservasComponent></PanelGestionReservasComponent>}></Route>
      <Route path='/gestionar-reservas-list' element={<ListReservasComponent></ListReservasComponent>}></Route>
      </Routes>
    </Router>

   </div>
  );
}

export default App;
