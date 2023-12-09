import Paciente from "./Paciente";

import {useEffect} from 'react'

function ListadoPacientes({pacientes, setEditopaciente, eliminarPaciente}) {

 useEffect(()=>{
  if (pacientes.length > 0) {
     console.log("Nuevo paciente agregado.");
  }
 }, [pacientes])   




  return (
    <>

{pacientes.length === 0 ? ( 
      <div>
        <center>
          <b
            style={{ fontSize: "25px", marginTop: "55px", fontWeight: "1000" }}
          >
            Listado de pacientes
          </b>

          <br />
          <br />
          <p style={{ fontWeight: "600" }}>
            Agregar algun registro para mostrar tus{" "}
            <span style={{ color: "#4b7bec" }}>pacientes y citas</span>
          </p>{" "}
        </center>

        <br />

        <div style={{ overflowY: "scroll", height: "600px" }}>
           
        { pacientes.map((paciente)=>{

          return(
            <Paciente
             key={paciente.id}
             paciente={paciente}
             setEditopaciente={setEditopaciente}
             eliminarPaciente={eliminarPaciente}
            />
          )
        }) }
        </div>
      </div>
) :  (

  <div>
  <center>
    <b
      style={{ fontSize: "25px", marginTop: "55px", fontWeight: "1000" }}
    >
      Listado de pacientes
    </b>

    <br />
    <br />
    <p style={{ fontWeight: "600" }}>
      Administra tus{" "}
      <span style={{ color: "#4b7bec" }}>pacientes y citas</span>
    </p>{" "}
  </center>

  <br />

  <div style={{ overflowY: "scroll", height: "600px" }}>
     
  { pacientes.map((paciente)=>{

    return(
      <Paciente
       key={paciente.id}
       paciente={paciente}
       setEditopaciente={setEditopaciente}
       eliminarPaciente={eliminarPaciente}
      />
    )
  }) }
  </div>
</div>



) } 

    </>
  );
}

export default ListadoPacientes;
