
import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from "./Vistas/Login/Login";

import Layout from "./Vistas/Principal/Layout";

import Home from "./Vistas/Principal/Inicio/Inicio";

import DebidaDiligenciaInicio from "./Vistas/Debida_Diligencia/InicioDebidaDiligencia";
import Cheques from "./Vistas/Debida_Diligencia/Herramientas/Cheques";
import InformeDDAmpliada from "./Vistas/Debida_Diligencia/Herramientas/InformeDDAmpliada";
import CamposClientes from "./Vistas/Debida_Diligencia/Herramientas/CamposClientes";

import InicioMonitoreo from "./Vistas/Monitoreo_PLAFT/InicioMonitoreo";
import Informe360 from "./Vistas/Monitoreo_PLAFT/Formularios/Informe360";
import Clasificaciones065 from "./Vistas/Monitoreo_PLAFT/Formularios/Clasificaciones-ml-064-065";
import Clasificaciones075 from "./Vistas/Monitoreo_PLAFT/Formularios/Clasificaciones-alertas-ml-074-075";
import PerfilTransacionalvsPersonaFisica from "./Vistas/Monitoreo_PLAFT/Herramientas/PerfilTransacionalvsPersonaFisica";

import InicioCumplimientoNormativo from "./Vistas/CumplimientoNormativo/InicioCumplimientoNormativo";

import InicioOficial_Cumplimiento from "./Vistas/Oficial_Cumplimiento/InicioOficial_Cumplimiento";


import Vista_Formulario from './Vistas/Requerimientos/vistaformulario'
import Vista_Usuario from './Vistas/Requerimientos/vistausuario'
import Vista_Administrador from './Vistas/Requerimientos/vistaAdministrador'

import Inteligencia_Financiera from './Vistas/Inteligencia_Financiera_Plaft/InicioInteligenciaFinanciera'


function App() {
 

  return  (
    <BrowserRouter>
      <Routes>
     
        <Route path="login" element={<Login/>}/>
        <Route  path="/" element={<Layout/>}>

         
          <Route path="inicio" element={<Home/>}/>
       
          <Route path="debida_diligencia_plaft" element={<DebidaDiligenciaInicio/>}/>
          <Route path="reporte_cheques" element={<Cheques/>}/>
          <Route path="informeddampliada" element={<InformeDDAmpliada/>}/>
          <Route path="campos_clientes" element={<CamposClientes/>}/>


          <Route path="monitoreo_plaft" element={<InicioMonitoreo/>}/>
          <Route path="informe360" element={<Informe360/>}/>
          <Route path="perfil_Transacional_Persona_Fisicas" element={<PerfilTransacionalvsPersonaFisica/>}/>
          <Route path="monitoreo_plaft_clasificacion_alerta_ml_064" element={<Clasificaciones065/>}/>
          <Route path="vista_monitoreo_plaft_ml_74_75" element={<Clasificaciones075/>}/>



          <Route path="cumplimiento_normativo_plaft" element={<InicioCumplimientoNormativo/>}/>


          <Route path="Oficial_Cumplimiento" element={<InicioOficial_Cumplimiento/>}/>

          <Route path="vistaformulario" element={<Vista_Formulario/>}/>
          <Route path="vistausuario" element={<Vista_Usuario/>}/>
          <Route path="vistaadministrador" element={<Vista_Administrador/>}/>

          <Route path="inteligencia_financiera_plaft" element={<Inteligencia_Financiera/>}/>




         
        </Route>
      </Routes>

    </BrowserRouter>
     
  )
}

export default App
