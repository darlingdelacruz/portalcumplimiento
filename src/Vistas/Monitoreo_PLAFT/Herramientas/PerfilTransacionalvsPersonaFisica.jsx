import { useState } from "react";
import Swal from "sweetalert2";
import url_server from "../../Principal/Ruta";

const PerfilTransacionalvsPersonaFisica = () => {
  const [datosIforme, guardarDatos] = useState({
    fecha_corrida: new Date(),
    fecha: new Date(),
  });

  //Funcion para guardar los eventos
  const ONSUBMIT = () => {
    //Datos
    var datos = new FormData();
    datos.append("username", localStorage.getItem("username"));
    datos.append("modulo", "Monitoreo PLAFT");
    datos.append("herramienta", "Perfil Transacional Persona Fisicas");

    //Enviar Datos
    fetch(url_server + "insertar-evento", {
      method: "POST",
      body: datos,
    })
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {})
      .catch((err) => {
        console.log("Error");
      });
  };
  function handleChange(e) {
    guardarDatos({
      ...datosIforme,
      [e.target.name]: e.target.value,
    });
  }

  const insertarDatos = (e) => {
    e.preventDefault();


    let date = new Date();
    
    const fechamew = datosIforme.fecha.toISOString().split("T")[0];
    if (date.getHours() >= 13  ){
      if (datosIforme.fecha_corrida > fechamew) {
        //Cualquier día menor que Viernes
        e.target.value = ""; //Resetear la fecha

        Swal.fire("Error!", "La fecha es mayor a la actual", "error"); //Dar feedback al usuario
      } else if (datosIforme.fechaInicio === "") {
        Swal.fire("Error!", "No debe de dejar campos incompleto", "error");
      } else {
        //Modal de alerta para cuando se realice la descarga
        let timerInterval;
        Swal.fire({
          title: "Espere mientra se cargan los datos!",
          html: "Descargando los datos requeridos... <b></b> ",

          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            return;
          }
        });

        //Datos
        var datos = new FormData();

        datos.append("fecha", datosIforme.fecha_corrida);

        //Enviar Peticion
        fetch(url_server + "vista_esquema_perfil_trx_pf", {
          method: "POST",
          body: datos,
        })
          .then((resp) => {
            return resp.blob();
          })
          .then((blob) => {
            const mensaje = blob["type"];

            if (mensaje === "application/json") {
              //console.log('no tiene')
              Swal.fire(
                "Error!",
                "El reporte solo puede generarse los días MIÉRCOLES y VIERNES!",
                "error"
              );

              return null;
            }
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement("a");
            a.href = url;
            a.download = "Perfil Transacional Personas Fisicas.xlsx";
            document.body.appendChild(a);

            Swal.fire({
              title: "Descarga Completada!",
              text: "El Perfil Transacional Personas Físicas se descargo correctamente, Revise su bandeja de descarga!",
              icon: "success",
            });
            ONSUBMIT();
            a.click();
            a.remove(); //afterwards we remove the element again
          })
          .catch((err) => {
            Swal.fire(
              "Error inesperado!",
              "Algo ha salido mal intente mas tarde!",
              "error"
            );
          });
      }
    }
    else{
      Swal.fire(
          'Error!',
          'Los informe se deben generar despues de las 1:00 PM!',
          'error'
      )
     }
  };

  return (
    <div className="text-center">
      <h2 className="font-black text-3xl text-center md:mr-2/3 mt-10 mb-5">
        Perfil Transacional Personas
        <span className="text-indigo-600"> vs </span>
        Personas Físicas
      </h2>

      <div class="block  rounded-lg mt-10  text-center text-black">
        <label htmlFor="number" class="block text-sm  font-bold mt-10">
          Fecha De Ejecución
        </label>
        <input
          type="date"
          name="fecha_corrida"
          value={datosIforme.fecha_corrida}
          onChange={handleChange}
          className="rounded-lg text-center border-4 mt-2"
          required
        />
      </div>

      <input
        type="button"
        onClick={insertarDatos}
        className="bg-green-500 mt-10 p-2 md: w-3/2 text-white 
                    rounded-lg hover:bg-sky-800 hover:font-bold hover:cursor-pointer"
        value="Descargar Reporte"
      />
    </div>
  );
};

export default PerfilTransacionalvsPersonaFisica;
