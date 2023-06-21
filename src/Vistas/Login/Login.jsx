import React from 'react';
import logo from '/src/assets/logoBSC.ico';


import './sheet_1.css';
import Swal from 'sweetalert2';
import url_server from '../Principal/Ruta';



const d = new Date();
d.setTime(d.getTime() + (3*60*60*1000));

export default class Login extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            username:null
        }
        this.login = this.login.bind(this)
        this.ONSUBMIT = this.ONSUBMIT.bind(this)
      /* this.verificar_sesion = this.verificar_sesion.bind(this)*/
    }

     ONSUBMIT  () {
    
        //Datos
        var datos = new FormData()
        datos.append('username',this.state.username);
        datos.append('modulo','Login');
        datos.append('herramienta',"Login");
    
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
  
    
    login(){

        //Datos
        var datos = new FormData()
        datos.append('username',this.state.username)
     
        //Fetch
        fetch(url_server+'login',{method:'POST',body:datos}).then((resp)=>{
            return resp.json()

        }).then((json)=>{
            if(json['respuesta'] === 'login correcto'){

                //Crear Sesion Cokie)
                localStorage.setItem('username',this.state.username)

                //Guardar Pantallas
                localStorage.setItem('pantallas',json['pantallas'])

                //Guardar Areal
                localStorage.setItem('area',json['area'])

                //Guardar Areal
                localStorage.setItem('nombre',json['nombre'])

                window.location.href = "/inicio"

                this.ONSUBMIT();

            }else{
                Swal.fire({
                    title: "Error!",
                    text: "El usuario no existe!",
                    icon: "error",
                  });
            }
        })
    }

   /* verificar_sesion(){
        if (localStorage.getItem("username")){
            window.location.href = "/"
        }
             else if (localStorage.getItem("username") === "pruebatransito"){
            window.location.href = "#/reportecheques"
        }
       
        
    } */

    render(){

   

        return (
            <div className='bg-green-600'>
            <div class="container ">
                <div class="screen">
                    <div class="screen__content">
                            <img className='image-logo'  src = {logo}/>
                            <form class="login">

                                <div class="login__field">
                                    <i class="login__icon fas fa-user"></i>
                                    <input

                                        value = {this.state.username} 
                                        onChange =  {(e)=>{this.setState({username:e.target.value.toLowerCase()})}}
                                        type="text" class="login__input" 
                                        placeholder="Coloque su usuario"/>
                                </div>

                                <button 
                                    class="button login__submit"
                                    onClick = {()=>{this.login()}}
                                >
                                    <span class="button__text">Acceder</span>
                                    <i class="button__icon fas fa-chevron-right"></i>
                                </button>				
                            </form>
                        
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>		
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>

                    
                </div>

                
            </div>
            </div>
        )
    }
}