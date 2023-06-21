import { DataGrid } from "@mui/x-data-grid";
import url_server from "../Principal/Ruta";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import Swal from "sweetalert2";
const vistaAdministrador = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const columns = [
    { field: "id", headerName: "ID", width: 2 },
    {
      field: "Nombre_Solicitante",
      headerName: "Nombre Solicitante",
      width: 300,
    },
    {
      field: "Username",
      headerName: "Username",
      width: 100,
    },
    { field: "Asunto", headerName: "Asunto", width: 700 },
    {
      field: "Nivel_Urgencia_Usuario",
      headerName: "Nivel de Urgencia",
      width: 140,
    },
    { field: "Progreso", headerName: "Progreso", width: 190 },
  ];

  const [requerimiento, setrequerimientos] = useState([]);
  const [requerimientoid, setrequerimientoid] = useState({
    numero: "",
    username: "",
    asignacion:"",
    
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Cargar los valores al datagrid
  useEffect(() => {
    console.log(localStorage.getItem("username"));
    //Datos
    var datos = new FormData();
    datos.append("username", localStorage.getItem("username"));

    //Enviar Peticion
    fetch(url_server + "ifplaft_obtener_tickets_administrador", {
      method: "POST",
      body: datos,
    })
      .then((data) => data.json())
      .then((data) => setrequerimientos(data.datos));
  }, []);

  //Evento para tomar el id
  const handleRowClick = (params) => {
    handleOpen();
    requerimientoid.numero = params.row.id
    requerimientoid.username = params.row.Username
    //Datos
   
   /* var datos = new FormData();
    datos.append("id", params.row.id);

    //Enviar Peticion
    fetch(url_server + "ifplaft_obtener_tickets_id", {
      method: "POST",
      body: datos,
    })
      .then((data) => data.json())
      .then((data) => setid(data.datos));*/
  };

  //Trabajar manana traer los archivos
  const traerArchivo = (e) => {
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
          Swal.fire("Error!", "Hubo un error al generar el reporte!", "error");

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


  const handleChange = e =>{
    
    setrequerimientoid({
        ...requerimientoid,
        [e.target.name] : e.target.value
    })
  console.log(requerimientoid)
    

    

//asi ira la variable en el fetch aqui trae el nombre del archivo 0-15
    
}
 

  const editarRequerimiento = (e) =>{
    e.preventDefault();
    var datos = new FormData();
    datos.append("id", requerimientoid.numero);
    datos.append("binario_entrega",  document.querySelector('input[type="file"]').files[0]);
    datos.append("asignacion", requerimientoid.asignacion);
    datos.append("username", requerimientoid.username);
    datos.append("Extension_Binario_Entrega", requerimientoid.ext);

    //Enviar Datos
    fetch("http://172.20.23.85:5000/ifplaft_requerimientos_editar", {
      method: "POST",
      body: datos,
    })
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
    
        Swal.fire("Mensaje!", "Se ha insertado corretamente.!", "success");
       
        setTimeout(() => {
          
            location.reload();
           
        }, 1000);
      
      })
      
      .catch((err) => {
        console.log(err);
        //Modal emergente para cuando falle la insercion
        Swal.fire("Error", "Se ha Producido un error inesperado!", "error");
      });

      



  }

  return (
    <div className="text-center mt-20">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 className="font-black text-3xl text-center md:mr-2/3 mt-10 ">
            Editar Requerimiento
          </h2>
          <label
            htmlFor="detalles"
            className="block text-gray-700 pt-12 uppercase font-bold"
          >
            Cargar Archivo de respuesta:
          </label>


          <input
            id="ext"
            name="ext"
            onChange={handleChange}
            className="border-2  border-indigo-500/50 p-1  mt-2  rounded-md"
            type="file"
          />

          <label
            htmlFor="asignacion"
            className="block text-gray-700 pt-5 uppercase font-bold"
          >
            Asignar a:
          </label>

          <select
            name="asignacion"
            className="border-2  border-indigo-500/50 p-1 pt-4 text-center mt-2  rounded-md"
            onChange={handleChange}
            required
          >

            
            <option selected value="">
              ---Selecione al responsable ---
            </option>
            <option value="ddelacruz">Darling De La Cruz</option>
            <option value="jmedinar">Janniel Medina</option>
            <option value="ktmelendez">Kelvin Melendez</option>
          </select>
          <div className="pt-14 pb-4 pl-14">
            <input
              type="submit"
              id="Button"
              value="Editar Requerimiento"
              className="bg-indigo-600 rounded-lg  p-3   text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
              onClick={ editarRequerimiento}
            />
              
          
          </div>
        </Box>
      </Modal>

      <h2 className="font-black text-3xl text-center md:mr-2/3 mt-10 mb-8">
        Administrar
        <span className="text-indigo-600 font-bold"> Requerimientos</span>
      </h2>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={requerimiento}
          columns={columns}
          onRowClick={handleRowClick}
          pageSize={12}
        />
      </div>
    </div>
  );
};

export default vistaAdministrador;
