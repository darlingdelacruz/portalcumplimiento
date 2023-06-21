import Swal from "sweetalert2";
import url_server from "../../Principal/Ruta";

const CamposClientes = () => {
    
    function aviso(){

        Swal.fire({
            title:'¡Aviso!',
           
            html:`<div>
            <h3>Los archivos de excel deben estar de la siguiente manera, unicamente con esta columna:</h3>
            <p>(Asegurece de que su archivo no contenga mas columnas)</p>
           
            <table >
                <thead>
                    <tr>
                        <th scope="col">CODIGO</th>
                      
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       <td>94056</td>
                    </tr>
                    <tr>
                        <td>6515</td>
                      </tr>
                      <tr>
                       <td>45453</td>
                    </tr>
                    <tr>
                        <td>35354</td>
                      </tr>
                      <tr>
                       <td>53545</td>
                    </tr>
                    <tr>
                        <td>56757</td>
                      </tr>
                      <tr>
                       <td>58788</td>
                    </tr>
                    <tr>
                        <td>25545</td>
                      </tr>
                </tbody>
            </table>
        </div>`,
          })
    }

     //Funcion para guardar los eventos
     const eventos = () => {
        //Datos
        var datos = new FormData()
        datos.append('username',localStorage.getItem('username'));
        datos.append('modulo','Debida Diligencia');
        datos.append('herramienta','Campos Clientes');

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


const handleChange = (e) =>{
    var valor = (e.target.value).includes('.xlsx')
    var valor2 =(e.target.value).includes('xlsx.')
    var seleccionar = (document.getElementById('Button'))

    if(valor === false || valor2 === true){
        seleccionar.disabled = true;
        Swal.fire(
            'Error',
            'Debes subir un archivo de excel!',
            'error'
        )
    }

    else{

    
        seleccionar.disabled = false;
    
    }

}


//Funcion general para ejecutar la peticion
const ONSUBMIT  = (e) => {

    e.preventDefault();
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

    //El .files[0] es para convertirlo a binary
    var clientes_archivos = document.querySelector('input[type="file"]').files[0];

    //console.log(clientes_archivos)
    
        datos.append('Clientes',clientes_archivos)

        //Enviar Peticion
        fetch(url_server+'campos_clientes',{
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
            a.download = "Datos Clientes.xlsx";
            document.body.appendChild(a);
        
            Swal.fire({
                title: "Descarga Completada!",
                text: "El Resultado se descargo correctamente, Revise su bandeja de descarga!",
                icon: "success",
            });

            eventos();
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


aviso();
    return ( 
        <div className="text-center">
        <h2 
            className="font-black text-3xl text-center md:mr-2/3 mt-10 mb-5">Campos
            <span className="text-indigo-600" > Clientes</span>
        </h2>


        <div class="block  rounded-lg mt-10  text-center text-black" >
            <label  class="block text-sm  font-bold mt-10">Datos Clientes</label>
            <input 
               
                onChange={handleChange}
                id= 'clientes_archivos'
                name = "clientes_archivos" 
                type = "file" 
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                className="rounded-lg text-center border-4 mt-2"
                required
             />
          
        </div>
    
      
             <input
                id='Button'
                type="button"
                onClick={ONSUBMIT}
                className="bg-green-500 mt-10 p-2 md: w-3/2 text-white 
                rounded-lg hover:bg-sky-800 hover:font-bold hover:cursor-pointer"
                value="Descargar Reporte"
            />
        
     
    </div>
     );
}
 
export default CamposClientes;