import { useState, useEffect } from "react";
// import Paciente from "./paciente";
import Error from "./Error"

function Formulario({ pacientes, setPacientes, editopaciente, setEditopaciente }) {
  // formulario:
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  // alerta del formulario:
  const [error, setError] = useState("");

useEffect(()=>{
     if (Object.keys(editopaciente).length > 0) {
      setMascota(editopaciente.Mascota)
      setPropietario(editopaciente.Propietario)
      setEmail(editopaciente.Correo)
      setFecha(editopaciente.Fecha)
      setSintomas(editopaciente.Sintomas)  
     }
}, [editopaciente])



  function generarid() {
    
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha

  }

  const handle = (e) => {
    e.preventDefault();

    if ([mascota, propietario, email, fecha, sintomas].includes("")) {
      console.log("todos los campos deben estar llenos.");
      setError(true);
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      
      setError("");

      const nuevopaciente = {
        Mascota: mascota,
        Propietario: propietario,
        Correo: email,
        Fecha: fecha,
        Sintomas: sintomas,
      };


      if (editopaciente.id) {
        //para editar
   nuevopaciente.id = editopaciente.id

   const pacientesactualizados = pacientes.map( buscopaciente => buscopaciente.id === editopaciente.id ? 
    nuevopaciente : buscopaciente)

    setPacientes(pacientesactualizados)
    setEditopaciente({})

      }else{
        //para agregar
         nuevopaciente.id = generarid()
         setPacientes([...pacientes, nuevopaciente]);
      }


      setTimeout(() => {
        setMascota("");
        setPropietario("");
        setEmail("");
        setFecha("");
        setSintomas("");
      }, 500);
    }
  };

  return (
    <>
      <div>
        <center>
          <b
            style={{ fontSize: "25px", marginTop: "55px", fontWeight: "1000" }}
          >
            Seguimiento Pacientes
          </b>
          <br />
          <br />
          <p style={{ fontWeight: "600" }}>
            Añade pacientes y{" "}
            <span style={{ color: "#4b7bec" }}>administralos</span>
          </p>{" "}
        </center>

        <br />

        <form
          onSubmit={handle}
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px #dfe4ea",
          }}
          action=""
        >
          <div>
            <br />
            <label
              style={{
                fontWeight: "600",
                marginBottom: "10px",
                fontSize: "15px",
                marginLeft: "5%",
                width: "90%",
              }}
              htmlFor="mascota"
            >
              {error &&  <Error> Todos los campos son obligatorios. </Error>  }

              <br />
              Nombre de la mascota
            </label>
            <div className="input-group flex-nowrap">
              <input
                id="mascota"
                onChange={(e) => setMascota(e.target.value)}
                value={mascota}
                type="text"
                className="form-control"
                placeholder="Nombre de la mascota"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                style={{
                  width: "80%",
                  marginLeft: "20px",
                  marginRight: "20px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          <div>
            <br />
            <label
              style={{
                fontWeight: "600",
                marginBottom: "10px",
                fontSize: "15px",
                marginLeft: "5%",
              }}
              htmlFor="propietario"
            >
              Nombre del propietario
            </label>
            <div className="input-group flex-nowrap">
              <input
                id="propietario"
                onChange={(e) => setPropietario(e.target.value)}
                value={propietario}
                type="text"
                className="form-control"
                placeholder="Nombre del propietario"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                style={{
                  width: "80%",
                  marginLeft: "20px",
                  marginRight: "20px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          <div>
            <br />
            <label
              style={{
                fontWeight: "600",
                marginBottom: "10px",
                fontSize: "15px",
                marginLeft: "5%",
              }}
              htmlFor="email"
            >
              Email de contacto
            </label>
            <div className="input-group flex-nowrap">
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
                placeholder="Email contacto del propietario"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                style={{
                  width: "80%",
                  marginLeft: "20px",
                  marginRight: "20px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          <div>
            <br />
            <label
              style={{
                fontWeight: "600",
                marginBottom: "10px",
                fontSize: "15px",
                marginLeft: "5%",
              }}
              htmlFor="date"
            >
              Dia de alta
            </label>
            <div className="input-group flex-nowrap">
              <input
                id="date"
                type="date"
                onChange={(e) => setFecha(e.target.value)}
                value={fecha}
                className="form-control"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                style={{
                  width: "80%",
                  marginLeft: "20px",
                  marginRight: "20px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          <div>
            <br />
            <label
              style={{
                fontWeight: "600",
                marginBottom: "10px",
                fontSize: "15px",
                marginLeft: "5%",
              }}
              htmlFor="sintomas"
            >
              Sintomas
            </label>
            <textarea
              style={{
                width: "90%",
                marginLeft: "20px",
                marginRight: "20px",
                borderRadius: "10px",
                marginBottom: "25px",
              }}
              name=""
              id="sintomas"
              onChange={(e) => setSintomas(e.target.value)}
              value={sintomas}
              cols="60"
              rows="2"
            />
          </div>

          <button
            className="btn btn-primary"
            style={{
              width: "90%",
              marginLeft: "20px",
              marginRight: "20px",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          >
            {editopaciente.id ? 'Guardar edicion' : 'Agregar paciente'}
          </button>
          <br />
          <br />
        </form>
        <br />
        <br />
      </div>
    </>
  );
}

export default Formulario;
