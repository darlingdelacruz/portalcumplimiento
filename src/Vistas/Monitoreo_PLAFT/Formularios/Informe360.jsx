import { useState } from "react";
import Swal from "sweetalert2";
import url_server from "../../Principal/Ruta";

const Informe360 = () => {
    const [datosIforme, guardarDatos] = useState({
        noCliente: "",
        fechaInicio: "",
        fechaFinal: "",
        tiporeporte: false,
      });
    
      const handleChange = (e) => {
        guardarDatos({
          ...datosIforme,
          [e.target.name]: e.target.value,
        });
    
        console.log(datosIforme);
      };
    
      //Funcion para guardar los eventos
      const eventos = (e) => {
        //Datos
        var datos = new FormData();
        datos.append("username", localStorage.getItem("username"));
        datos.append("modulo", "Monitoreo PLAFT");
        datos.append("herramienta", "Informe 360 Clientes");
    
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
    
      const insertarDatos = (e) => {
        e.preventDefault();
    
        if (
          datosIforme.noCliente === 0 ||
          datosIforme.noCliente === "" ||
          datosIforme.fechaInicio === "" ||
          datosIforme.fechaFinal === ""
        ) {
          Swal.fire("Error!", "No debe de dejar campos incompleto", "error");
        } else if (datosIforme.fechaInicio > datosIforme.fechaFinal) {
          Swal.fire("Error!", "La fecha de inicio es mayor a la final", "error");
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
          datos.append("cod_cliente", datosIforme.noCliente);
          datos.append("fecha_inicial", datosIforme.fechaInicio);
          datos.append("fecha_final", datosIforme.fechaFinal);
          datos.append("tipoinforme", datosIforme.tiporeporte);
    
          //Enviar Peticion
          fetch(url_server + "vista_monitoreo_plaft_informe_360", {
            method: "POST",
            body: datos,
          })
            .then((resp) => {
              return resp.blob();
            })
            .then((blob) => {
              const mensaje = blob["type"];
    
              if (mensaje === "text/html") {
                console.log("no tiene");
                Swal.fire("Error!", "Este cliente no posee informe 360!", "error");
    
                return null;
              }
              var url = window.URL.createObjectURL(blob);
              var a = document.createElement("a");
              a.href = url;
              a.download = "Informe360.zip";
              document.body.appendChild(a);
    
              Swal.fire({
                title: "Descarga Completada!",
                text: "El informe 360 se descargo correctamente, Revise su bandeja de descarga!",
                icon: "success",
              });
              eventos();
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
      };
    return ( 
        <div className="text-center ">
            <h2 className="font-black text-3xl text-center md:mr-2/3 mt-10 mb-8">Formulario 
                <span className="text-indigo-600 font-bold"> Informe 360</span>
            </h2>
            

            <form
                onSubmit={insertarDatos} 
                className=" md: w-full s px-5 mb-10">
                <div className="mb-8 rounded-lg ">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
                        No. cliente:
                    </label>
                    <input  
                        id="number"
                        name="noCliente"
                        value={datosIforme.noCliente}
                        onChange={handleChange}
                        type="number"
                        placeholder="No. cliente"
                        className="border-2 text-center border-indigo-500/50 p-2 mt-2 placeholder:gray-400 rounded-md"
                        required
                    />
                   
                </div>

                <div className="mb-8 rounded-lg ">
                    <label className="block text-gray-700 uppercase font-bold">
                        Tipo de Informe:
                    </label>
                    <input  
                        id="number"
                        name="tiporeporte"
                        value={datosIforme.tiporeporte}
                        type="radio"
                        onChange={handleChange}
                        className="border-2  border-indigo-500/50 p-2 mt-2  rounded-md"
                        checked="checked"
                    /> Normal

                      <input  
                        id="number"
                        name="tiporeporte"
                        type="radio"
                        value={datosIforme.tiporeporte}
                        onChange={handleChange}
                        className="border-2 border-indigo-500/50  p-2 mt-2 ml-4  rounded-md"
                      
                    /> Avanzado
                   
                </div>
                
               
                <div className="mb-8 rounded-lg ">
                    <label htmlFor="fechaInicio" className="block text-gray-700 uppercase font-bold">
                        Fecha Inicio:
                    </label>
                    <input  
                        id="fechaInicio"
                        name="fechaInicio"
                        type="date"
                        value={datosIforme.fechaInicio}
                        onChange={handleChange}
                        min="2016-01-01"
                        className="border-2 border-indigo-500/50 p-2 mt-2 placeholder:gray-400 rounded-md"
                        required
                    />
                   
                </div>
                
                <div className="mb-8 rounded-lg ">
                    <label htmlFor="fechaFinal" className="block text-gray-700 uppercase font-bold">
                        Fecha Final:
                    </label>
                    <input  
                        id="fechaFinal"
                        type="date"
                        name="fechaFinal"
                        value={datosIforme.fechaFinal}
                        onChange={handleChange}
                        className="border-2 border-indigo-500/50 p-2 mt-2 placeholder:gray-400 rounded-md"
                        required
                    >
                    </input>
                </div>
               
                <input
                    type="submit"
                    className="bg-indigo-600 rounded-lg  p-3  text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value="Consultar Cliente"
                />

            </form>
               
        </div>

     );
}
 
export default Informe360;