import { useState } from "react";
import Swal from "sweetalert2";



const  vistaformulario = () => {

        var today = new Date();
        const [requerimiento, guardarRequerimiento] = useState({
            username:localStorage.getItem('username'),
            asunto:'',
            usuario:localStorage.getItem('nombre'),
            area:localStorage.getItem('area'),
            categoria:'',
            urgencia:'',
            fecha_entrega:'0-0-0000',
            fecha_creacion:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
            archivo: '',
            nota:'',
            asignado:'InteligenciaPlaft',
            progreso:'0%',
            ext:'',
            fecha_deseada:''
          

        })
        const eventos = () => {
            //Datos
            var datos = new FormData()
            datos.append('username',localStorage.getItem('username'));
            datos.append('modulo','Requerimientos');
            datos.append('herramienta','Insertar Requerimiento');
    
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
        const handleChange = e =>{
           
                guardarRequerimiento({
                    ...requerimiento,
                    [e.target.name] : e.target.value
                })


                console.log(requerimiento)
                

            //asi ira la variable en el fetch aqui trae el nombre del archivo 0-15
                
            }
       
           

            const ONSUBMIT = e => {
                e.preventDefault();
              
                
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
                

                if(requerimiento.username === null |requerimiento.nombre === null){
                    Swal.fire("Error!", "No te haz logueado.", "error");

                }
                else if(requerimiento.categoria === '' || requerimiento.categoria ==='' ){
                    Swal.fire("Error!", "No debe de dejar campos en blanco.", "error");

                }
            
                else if (requerimiento.ext === ''){
                    
                    var datos = new FormData();
             
                    datos.append("area", requerimiento.area);
                    datos.append("username", requerimiento.username);
                    datos.append("nombre_solicitante", requerimiento.usuario);
                    datos.append("categoria", requerimiento.categoria);
                    datos.append("asunto", requerimiento.asunto);
                    datos.append("nivel_urgencia_usuario", requerimiento.urgencia);
                    datos.append("comentarios", requerimiento.nota);
                    datos.append("progreso", requerimiento.progreso);
                    datos.append("fecha_deseada", requerimiento.fecha_deseada);

                  
                    
                    //Enviar Datos
                    fetch("http://172.20.23.85:5000/ifplaft_ticket_insertar", {
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


                else{
    
      
                     var datos = new FormData();
                    datos.append("area", requerimiento.area);
                    datos.append("username", requerimiento.username);
                    datos.append("nombre_solicitante", requerimiento.usuario);
                    datos.append("categoria", requerimiento.categoria);
                    datos.append("asunto", requerimiento.asunto);
                    datos.append("nivel_urgencia_usuario", requerimiento.urgencia);
                    datos.append("comentarios", requerimiento.nota);
                    datos.append("binario",  document.querySelector('input[type="file"]').files[0]);
                    datos.append("progreso", requerimiento.progreso);
                    datos.append("binario_ext", requerimiento.ext);
                    datos.append("fecha_deseada", requerimiento.fecha_deseada);


                  
                    
                    //Enviar Datos
                    fetch("http://172.20.23.85:5000/ifplaft_ticket_insertar", {
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
                
              
              
                
                }
             
        
                
            

        return (
            <>
            
                <div className="text-center mt-20">
                <h2 className="font-black text-3xl text-center md:mr-2/3 mt-10 mb-8">Formulario 
                <span className="text-indigo-600 font-bold"> Requerimientos</span>
                </h2>
                
                    
                        <form 
                            onSubmit={ONSUBMIT}
                      
                         >
                           
                            
                                <div>
                                    
                                    <label htmlFor='asunto' className="block  text-gray-700 uppercase font-bold">
                                        Asunto del requerimiento: 
                                    </label>

                                    <input
                                       
                                        name = "asunto" 
                                        value={requerimiento.asunto}
                                        onChange={handleChange}
                                        type = "text" 
                                        className="border-2 text-center w-80  border-indigo-500/50  pt-1 rounded-md"
                                        required 

                                    />
                        
                                </div>
                                   
                                <div>

                                    <label htmlFor='urgencia' className="block text-gray-700 pt-12 uppercase font-bold">
                                        Nivel de Urgencia: 
                                    </label>
                                    
                                    <select 

                                        name="urgencia"
                                        className="border-2  border-indigo-500/50 p-1 pt-4 text-center mt-2  rounded-md"
                                        value={requerimiento.urgencia}
                                        onChange={handleChange}
                                        required

                                    >
                                        <option selected value='' >---Selecione el Nivel de la Urgencia---</option>
                                        <option  value="Alta" >Alta</option>
                                        <option  value="Media" >Media</option>
                                        <option  value="Baja">Baja</option>
                                       

                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="fecha_deseada" className="block text-gray-700 pt-12 uppercase font-bold">
                                    Fecha Deseada:
                                    </label>
                                    <input
                                    type="date"
                                    name="fecha_deseada"
                                    value={requerimiento.fecha_deseada}
                                    onChange={handleChange}
                                    className="border-2 text-center w-80 border-indigo-500/50    pt-1 rounded-md"
                                    required 
                                    />
                                </div>

                                <div>

                                    <label htmlFor='categoria' className="block text-gray-700 pt-12 uppercase font-bold">
                                        Categoria: 
                                    </label>

                                    <select 

                                        name="categoria"
                                        className="border-2  border-indigo-500/50 p-1 pt-4 text-center mt-2  rounded-md"
                                        value={requerimiento.categoria}
                                        onChange={handleChange}
                                        required

                                    >
                                        <option selected value='' >---Selecione una Categoria---</option>
                                        
                                        <option  value="Creación de Tableros" >Creación de Tableros</option>
                                        <option  value="Machine Learning" >Machine Learning</option>
                                        <option  value="Reporte Automatizados">Reporte Automatizados</option>
                                        <option  value="Solicitud de Informacion">Solicitud de Informacion</option>
                                        <option  value="Estudio Estadístico">Estudio Estadístico</option>
                                        <option  value="Remediación Solucion IFPLAFT">Remediación Solucion IFPLAFT</option>
                                        <option  value="Mejora Remediación Solución IFPLAFT">Mejora Remediación Solución IFPLAFT</option>
                                        <option  value="Scripting">Scripting/Automatización</option>
                                        <option  value="Modificación de Tableros">Modificación de Tableros</option>
                                        <option  value="Solución TI">Solución TI</option>
                                        <option  value="Requerimiento Banco Corresponsal">Requerimiento Banco Corresponsal</option>

                                    </select>
                                    </div>          
                                <div>
                                    
                                    <label htmlFor='asunto' className="block text-gray-700 pt-12 uppercase font-bold">
                                        Nombre del Solicitante: 
                                    </label>

                                    <input
                                       
                                        name = "usuario" 
                                        value={requerimiento.usuario}
                                        onChange={handleChange}
                                        type = "text" 
                                        disabled
                                        className="border-2 text-center w-80 border-indigo-500/50    pt-1 rounded-md"
                                        required 

                                    />
                        
                                </div>
                                <div>

                                    <label htmlFor='area' className="block text-gray-700 pt-12 uppercase font-bold">
                                        Gerencias: 
                                    </label>

                                    <select 

                                        name="area"
                                        className="border-2  border-indigo-500/50 p-1 pt-4 text-center mt-2  rounded-md"
                                        value={requerimiento.area}
                                        onChange={handleChange}
                                        disabled
                                        required

                                    >

                                        <option  value="Cumplimiento Normativo" >Cumplimiento Normativo</option>
                                        <option  value="Debida Diligencia" selected>Debida Diligencia</option>
                                        <option  value="Monitoreo Plaft">Monitoreo Plaft</option>
                                        

                                    </select>
                                    </div>
                          
                                <div>
                                    <label
                                        htmlFor='detalles' 
                                        className="block text-gray-700 pt-12 uppercase font-bold"
                                    >
                                        Detalles del requerimiento: 
                                    </label>
                                    
                                    <input
                                        
                                        id='ext'
                                        name='ext'
                                        className="border-2  border-indigo-500/50 p-1  mt-2  rounded-md"

                                        type="file"
                                       
                                        onChange={handleChange}
                                     

                                    />

                                </div>

                                <div>
                                    <label htmlFor='notas' className="block text-gray-700 pt-12 uppercase font-bold">
                                        Notas del requerimiento: 
                                    </label> 
                                        <textarea
                                            name='nota'
                                            rows="4"
                                            cols="30"
                                            value={requerimiento.nota}
                                            onChange={handleChange}
                                            className="border-2  border-indigo-500/50 p-1  mt-2  rounded-md"
                                            
                                    />
                                      
                                </div>

                                <div className='pt-8 pb-4'>
                                    <button id='Button'                      
                                className="bg-indigo-600 rounded-lg  p-3   text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all">
                                        Insertar Requerimiento
                                    </button>
                                </div>      
                                
                       
                        </form>
                            
                        
                </div>   
                  
              
            </>
        )
    }

export default vistaformulario;