import { useState } from "react"
import Swal from "sweetalert2"
import url_server from "../../Principal/Ruta"

const InformeDDAmpliada = () => {
    
       //Inicializando las variables
       const [datosuser, guardarDatos] = useState({
        cod_cliente: ""
      
    })

   
    //Tomando los valores por cada cambio
    const handleChange = e =>{
    
        guardarDatos({
            ...datosuser,
            [e.target.name] : e.target.value
        })

   
    }
   //Funcion para capturar los eventos
   const ONSUBMIT  = () => {
   
    //Datos
    var datos = new FormData()
    datos.append('username',localStorage.getItem('username'));
    datos.append('modulo','Debida Diligencia');
    datos.append('herramienta','Informe DD Ampliada');
   
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
   const  general_reporteDD = (e) =>{
        

    e.preventDefault()
      //Modal de alerta para cuando se realice la descarga
      let timerInterval
      Swal.fire({
        title: 'Espere mientra se cargan los datos!',
        html: 'Descargando los datos requeridos... <b></b> ',
     
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          return;
        }
      })
      
    
            //Datos
            var datos = new FormData()
            datos.append('cod_cliente',datosuser.cod_cliente);
       

                //Enviar Peticion
                fetch(url_server+'informe_dd_ampliada',{
                    method:'POST',
                    body:datos
                }).then((resp)=>{
                    
                    return resp.blob()
                    
                }).then((blob)=>{
                
                    const mensaje= blob['type']
                
                    if(mensaje === 'text/html'){
                    console.log('no tiene')
                    Swal.fire(
                        'Error!',
                        'Hubo un error al generar el reporte!',
                        'error'
                    )

                    return null;
                        
                    }
                    var url = window.URL.createObjectURL(blob);
                    var a = document.createElement('a');
                   
                    a.href = url;
                    a.download = "Reporte DD Ampliada "+ datosuser.cod_cliente+ ".zip";
                    document.body.appendChild(a);
                
                    Swal.fire({
                        title: "Descarga Completada!",
                        text: "El Reporte DD Ampliada se descargo correctamente, Revise su bandeja de descarga!",
                        icon: "success",
                    });

                    ONSUBMIT();
                    a.click();    
                    a.remove();  //afterwards we remove the element again 
                
                }).catch((err)=>{
                    Swal.fire(
                        'Error inesperado!',
                        'Algo ha salido mal intente mas tarde!',
                        'error'
                    )
                    console.log(err)
                })   
                        

     
  }
    return ( 
        <div className="text-center">
            <h2 
                className="font-black text-3xl text-center md:mr-2/3 mt-10 mb-5">Informe DD
                <span className="text-indigo-600" > Ampliada</span>
            </h2>


            <div class="block  rounded-lg mt-10  text-center text-black" >
                <label htmlFor="number" class="block text-sm  font-bold mt-10">Numero de Cliente</label>
                <input 
                    id="number"
                    type="number"
                    name='cod_cliente' 
                    value={datosuser.cod_cliente}
                    onChange={handleChange}
                    placeholder="Numero del cliente"
                    className="rounded-lg text-center border-4 mt-2"
                    required
                 />
              
            </div>
        
          
                 <input
                    type="button"
                    onClick={general_reporteDD}
                    className="bg-green-500 mt-10 p-2 w-3/2 text-white 
                    rounded-lg hover:bg-sky-800 hover:font-bold hover:cursor-pointer"
                    value="Descargar Reporte"
                />
            
         
        </div>
     );
}
 
export default InformeDDAmpliada;