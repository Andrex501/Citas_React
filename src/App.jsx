import { useState, useEffect } from "react";
import Header from "../componentes/Header";
import Formulario from "../componentes/Formulario";
import ListadoPacientes from "../componentes/ListadoPacientes";


function App() {
  const [pacientes, setPacientes] = useState([]);
  const [editopaciente, setEditopaciente] = useState({});

useEffect(() => {
  const obtenerLS = () => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    setPacientes(pacientesLS)
  }
  obtenerLS();
}, []);

useEffect(() => {
  localStorage.setItem('pacientes', JSON.stringify( pacientes ));
}, [pacientes])

const eliminarPaciente = (id) =>{
   const pacientesactualizados = pacientes.filter(paso => paso.id !== id)
   setPacientes(pacientesactualizados)
}

  return (
    <>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            editopaciente={editopaciente}
            setEditopaciente={setEditopaciente}
            />
          </div>
          <div className="col-sm-8">
            <ListadoPacientes
             pacientes={pacientes}
             setEditopaciente={setEditopaciente}
             eliminarPaciente={eliminarPaciente}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
