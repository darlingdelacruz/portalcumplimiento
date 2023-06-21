import url_server from "../../Principal/Ruta";
import Swal from 'sweetalert2';

const Cheques = () => {
    //Funcion para capturar los eventos
    const ONSUBMIT  = () => {
        
        //Datos
        var datos = new FormData()
        datos.append('username',localStorage.getItem('username'));
        datos.append('modulo','Debida Deligencia');
        datos.append('herramienta','Reporte de Cheques');
 
        //Enviar Datos
        fetch(url_server+'insertar-evento',{
            method:'POST',
            body:datos
        }).then((resp)=>{
            return resp.json()
        }).then((json)=>{
            
        })
        .catch((err)=>{
        
           console.log('Error')
        })
      }
     
    //Funcion para general reporte de cheques
    const general_reporte_cheques = (e) => {
      e.preventDefault();
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
      datos.append("username", localStorage.getItem("username"));

      //Enviar Peticion
      fetch(url_server + "datos_registro_cheques", {
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
            Swal.fire(
              "Error!",
              "Hubo un error al generar el reporte!",
              "error"
            );

            return null;
          }
          var url = window.URL.createObjectURL(blob);
          var a = document.createElement("a");
          let today = new Date();
          var fechahoy = today.toLocaleDateString();
          a.href = url;
          a.download = "Reporte de cheques " + fechahoy + ".xlsx";
          document.body.appendChild(a);

          Swal.fire({
            title: "Descarga Completada!",
            text: "El reporte de cheques se descargo correctamente, Revise su bandeja de descarga!",
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
          console.log(err);
        });
    };

    return ( 

        <div className="text-center">

            <h2 
                className="font-black text-3xl text-center md:mr-2/3 mt-10 mb-5">Reporte de 
                <span className="text-indigo-600" > Cheques</span>
            </h2>

            <input
                type="button"
                className="bg-green-500 mt-10 p-2 w-3/2 text-white 
                rounded-lg hover:bg-sky-800 hover:font-bold hover:cursor-pointer"
                value="Descargar Reporte"
                onClick={general_reporte_cheques}
            />
                
         
        </div>
        

     );
}
 
export default Cheques;