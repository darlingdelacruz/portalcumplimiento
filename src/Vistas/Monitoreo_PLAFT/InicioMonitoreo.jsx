import { Link } from "react-router-dom";

const InicioMonitoreo = () => {
  //Funcion para guardar los eventos
  const ONSUBMIT = (herramienta) => {
    //Datos
    var datos = new FormData();
    datos.append("username", localStorage.getItem("username"));
    datos.append("modulo", "Monitoreo PLAFT");
    datos.append("herramienta", herramienta);

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
      <h2 className="font-black text-3xl text-center md:mr-2/3 mt-10 mb-5">
        Monitoreo
        <span className="text-indigo-600"> PLAFT</span>
      </h2>

      <div className="border-double border-4  font-bold opacity-75  md:w-2/6 rounded-lg mt-10  bg-green-700 text-center text-white">
        Tableros
      </div>

      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Tablero Matriz Requerimiento Negocios")}
          href="http://listcludwr/Reports_DWH/powerbi/PowerBI/PBICumplimiento/Requerimientos%20de%20alertas%20a%20negocios"
          target="_blank"
        >
          - Tablero Matriz Requerimiento Negocios
        </a>
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Tablero Mayores Depositantes")}
          href="https://app.powerbi.com/links/N3VME1HoQD?ctid=11f4c2de-29bc-4dc1-a608-0b14d713bbbc&pbi_source=linkShare"
          target="_blank"
        >
          - Tablero Mayores Depositantes


        </a>
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Ingresos vs Egresos")}
          href="http://listcludwr/Reports_DWH/powerbi/PowerBI/PBICumplimiento/Tablero%20Ingresos%20vs%20Egresos%20Cliente%20BSC"
          target="_blank"
        >
          - Ingresos vs Egresos
        </a>
      </div>

      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Tablero Sub Agentes Bancarios")}
          href="https://app.powerbi.com/groups/me/reports/bd7b3c27-6645-4193-a709-3081abab6328/ReportSectioneb97775d0801147b8c07"
          target="_blank"
        >
          - Tablero Sub Agentes Bancarios
        </a>
      </div>

      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Tablero Depósito a Cuenta")}
          href="http://listcludwr/Reports_DWH/powerbi/PowerBI/PBICumplimiento/Dep%C3%B3sitos%20a%20cuenta"
          target="_blank"
        >
          - Tablero Depósito a Cuenta
        </a>
      </div>
      
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Segmentación de Clientes")}
          href="https://listcludwr/Reports_DWH/powerbi/PowerBI/PBICumplimiento/Tablero%20Segmentaci%C3%B3n%20Clientes"
          target="_blank"
        >
          - Segmentación de Clientes{" "}
        </a>
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Tablero Mayores Ingresantes")}
          href="https://app.powerbi.com/links/u30RiwE8A2?ctid=11f4c2de-29bc-4dc1-a608-0b14d713bbbc&pbi_source=linkShare"
          target="_blank"
        >
          - Mayores Ingresantes{" "}
        </a>
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Tablero Clientes Ocasionales")}
          href="https://listcludwr/Reports_DWH/powerbi/PowerBI/PBICumplimiento/Clientes%20Ocasionales"
          target="_blank"
        >
          - Clientes Ocasionales{" "}
        </a>
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Tablero Clientes Cambiadores de Cheques (Doble Endolso)")}
          href="https://app.powerbi.com/links/2_SozBp2Pp?ctid=11f4c2de-29bc-4dc1-a608-0b14d713bbbc&pbi_source=linkShare"
          target="_blank"
        >
          - Clientes Cambiadores de Cheques (Doble Endolso){" "}
        </a>
      </div>
    

      <div className="border-double border-4  font-bold opacity-75  md:w-2/6 rounded-lg mt-10  bg-green-700 text-center text-white">
        Informes
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <Link
          // onClick={ () => ONSUBMIT('Informe 360 Clientes') }
          to="/informe360"
        >
          - Informe 360 Clientes
        </Link>
      </div>

      

      <div className="border-double border-4  font-bold opacity-75  md:w-2/6 rounded-lg mt-10  bg-green-700 text-center text-white">
        Esquemas de Monitoreo PLAFT
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <Link to="/Perfil_Transacional_Persona_Fisicas">
          - Perfil Transacional vs Personas Físicas
        </Link>
      </div>
    </div>
  );
};

export default InicioMonitoreo;
