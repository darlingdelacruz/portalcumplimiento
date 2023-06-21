
import { DataGrid } from '@mui/x-data-grid';
import url_server from '../Principal/Ruta';
import { useState } from 'react';

import { useEffect } from 'react';
const vistausuario = () => {



const columns = [
    { field: 'id', headerName: 'ID', width: 2},
    { field: 'Nombre_Solicitante', headerName: 'Nombre Solicitante', width: 300 },
    { field: 'Asunto', headerName: 'Asunto', width: 700 },
    { field: 'Nivel_Urgencia_Usuario', headerName: 'Nivel de Urgencia', width: 140 },
    { field: 'Progreso', headerName: 'Progreso', width: 190 },
   
  ];

  const [requerimiento, setrequerimientos]= useState([])
      useEffect(() => {
         //Datos
         var datos = new FormData();
         datos.append("username", localStorage.getItem("username"));
 
         //Enviar Peticion
         fetch(url_server + "ifplaft_obtener_tickets", {
         method: "POST",
         body: datos,
         })
         .then((data) => data.json())
         .then((data) => setrequerimientos(data.datos))


         
      }, []);
    

  return (
    <div className="text-center mt-20">

        <h2 className="font-black text-3xl text-center md:mr-2/3 mt-10 mb-8">Mis 
                <span className="text-indigo-600 font-bold"> Requerimientos</span>
                </h2>
        <div style={{height: 400, width: '100%' }}>

            <DataGrid
            rows={requerimiento}
            columns={columns}
            pageSize={12}
             />


        </div>
    </div>

   

  );
}

export default vistausuario;


