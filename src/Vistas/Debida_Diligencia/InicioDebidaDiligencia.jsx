import React from "react";
import { Link } from "react-router-dom";

const InicioDebidaDiligencia = () => {
 //Funcion para guardar los eventos
 const ONSUBMIT = (herramienta) => {
    //Datos
    var datos = new FormData();
    datos.append("username", localStorage.getItem("username"));
    datos.append("modulo", "Debida Diligencia PLAFT");
    datos.append("Inicio", herramienta);

    //Enviar Datos
    fetch(url_server + "insertar-evento", {
      method: "POST",
      body: datos,
    })
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        //vacio chill
      })
      .catch((err) => {
        console.log("Error");
      });
  };

    return ( 
        <div className="">
        <h2 
            className="font-black text-3xl text-center md:mr-2/3 mt-10 mb-5">Debida Diligencia
            <span className="text-indigo-600" > PLAFT</span>
        </h2>
            
        <div className = "border-double border-4  font-bold opacity-75  md:w-2/6 rounded-lg mt-10  bg-green-700 text-center text-white">Tableros</div>

        <div className = " mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
            <a

            
            href='https://app.powerbi.com/groups/24e5ac17-3795-4c19-9bdf-95b7e016f68b/reports/2a5c33d1-617a-4791-af18-b7a96879e939/ReportSection9edde2cee0f35e2ea0a8' target="_blank">- Tablero Experiencia Colaborador</a>

        </div>

        <div className = " mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
            <a 
            onClick={() => ONSUBMIT('Maestra Cliente BSC')}
            href='http://listcludwr/Reports_DWH/powerbi/PowerBI/PBICumplimiento/Tablero%20Calidad%20de%20Datos%20Maestra%20Clientes' target="_blank">- Maestra Cliente BSC</a>
        </div>

        <div className = " mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
            <a 
             onClick={() => ONSUBMIT('Tablero DD Personas Fisica')}
            href='https://app.powerbi.com/links/iKRN4MT5ao?ctid=11f4c2de-29bc-4dc1-a608-0b14d713bbbc&pbi_source=linkShare&bookmarkGuid=383b8a0e-a4cf-41bf-82ba-775f748abed7' target="_blank">- Tablero DD Personas Fisica</a>
        </div>

        <div className = " mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
            <a 
                onClick={() => ONSUBMIT('Tablero DD Personas Fisica por Banca')}
            href='http://listcludwr/Reports_DWH/powerbi/PowerBI/PBICumplimiento/Tablero%20DD%20Personas%20Fisica%20por%20Banca' target="_blank">- Tablero DD Personas Fisica por Banca</a>
        </div>

        <div className = " mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
            <a 
                onClick={() => ONSUBMIT('DD Personas Jurídicas')}
                href='https://app.powerbi.com/links/JkR20NsxGU?ctid=11f4c2de-29bc-4dc1-a608-0b14d713bbbc&pbi_source=linkShare' target="_blank">- DD Personas Jurídicas</a>
        </div>
        <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Tablero Alertas Monitor DD")}
          href="https://app.powerbi.com/links/9mH2ARIOK4?ctid=11f4c2de-29bc-4dc1-a608-0b14d713bbbc&pbi_source=linkShare"
          target="_blank"
        >
          - Tablero Alertas Monitor DD
        </a>
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Tablero de Suplidores")}
          href="https://app.powerbi.com/groups/24e5ac17-3795-4c19-9bdf-95b7e016f68b/reports/606d4855-448d-4e04-9dcd-895675dce912/ReportSection"
          target="_blank"
        >
          - Tablero de Suplidores
        </a>
      </div>

        {/*<div className = " mb-2 mt-2 hover:text-blue-800 ml-5">
            <a
              onClick={() => ONSUBMIT('Maestra Cliente BSC')} 
                href='http://listcludwr/Reports_DWH/powerbi/PowerBI/PBICumplimiento/Tablero%20DD%20Personas%20Jur%C3%ADdicas%20por%20Banca' target="_blank">- Maestra Cliente BSC</a>
    </div>*/}




        <div className = "border-double border-4  font-bold opacity-75  md:w-2/6 rounded-lg mt-10  bg-green-700 text-center text-white">Formularios</div>
        
        <div className = " mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
            
            <Link to="/debida_diligencia_plaft">- Formulario evalucion riesgo productos</Link>
        </div>

        <div className = " mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
            <Link to="/debida_diligencia_plaft">- Formulario evalucion riesgo jurisdicion</Link>
        </div>

        <div className = " mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
            <Link to="/debida_diligencia_plaft">- Formularios_kyc</Link>
        </div>

        <div className = "border-double border-4  font-bold opacity-75  md:w-2/6 rounded-lg mt-10  bg-green-700 text-center text-white">Herramientas</div>


        <div className = " mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
            <Link to="/reporte_cheques">- Reporte cheques</Link>
        </div>

        <div className = " mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
            <Link to="/informeddampliada">- Informe DD Ampliada</Link>
        </div>

        <div className = " mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
            <Link to="/campos_clientes">- Campos Clientes</Link>
        </div>

            </div>
 );
}
 
export default InicioDebidaDiligencia;