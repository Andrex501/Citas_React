function Paciente({paciente, setEditopaciente, eliminarPaciente}) {

 console.log(paciente);

const preguntaEliminar = (mascota,id) =>{
 const pregunta = confirm(`¿Deseas eliminar la cita del paciente, ${mascota}?`)

 if (pregunta) {
  eliminarPaciente(id)
 }

}

 
  return (
    <>

<div >
<form
        style={{
          backgroundColor: "#fff",
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          boxShadow: "5px 5px 5px #dfe4ea",
        
        }}
        action=""
      >
        <div style={{ padding: "20px" }}>
          <p style={{ fontWeight: "600" }}>
            Nombre de la mascota:{" "}
            <span style={{ fontWeight: "normal" }}>{paciente.Mascota}</span>
          </p>
          <p style={{ fontWeight: "600" }}>
            Nombre del propietario:{" "}
            <span style={{ fontWeight: "normal" }}>{paciente.Propietario}</span>
          </p>
          <p style={{ fontWeight: "600" }}>
            Email de contacto:{" "}
            <span style={{ fontWeight: "normal" }}>
              {paciente.Correo}
            </span>
          </p>
          <p style={{ fontWeight: "600" }}>
            Dia de alta:{" "}
            <span style={{ fontWeight: "normal" }}>{paciente.Fecha}</span>
          </p>
          <p style={{ fontWeight: "600" }}>
            Sintomas: <span style={{ fontWeight: "normal" }}>{paciente.Sintomas}</span>
          </p>

          <button onClick={()=>setEditopaciente(paciente)} style={{marginRight: "20px"}} type="button" className="btn btn-success" >
            EDITAR
          </button>

          <button onClick={()=>preguntaEliminar(paciente.Mascota, paciente.id)} type="button" className="btn btn-danger">
            ELIMINAR
          </button>

        </div>

      </form>



</div>
     
<br />

    </>
  );
}

export default Paciente


