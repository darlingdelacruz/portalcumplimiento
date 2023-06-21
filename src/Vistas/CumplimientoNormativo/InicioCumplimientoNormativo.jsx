import { Link } from "react-router-dom";
import url_server from "../Principal/Ruta";

const InicioCumplimientoNormativo = () => {
  //Funcion para guardar los eventos
  const ONSUBMIT = (herramienta) => {
    //Datos
    var datos = new FormData();
    datos.append("username", localStorage.getItem("username"));
    datos.append("modulo", "Cumplimiento Normativo PLAFT");
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
      <h2 className="font-black text-3xl text-center md:mr-2/3 mt-10 mb-5">
        Gerencia Cumplimiento Normativo
        <span className="text-indigo-600"> PLAFT</span>
      </h2>

      <div className="border-double border-4  font-bold opacity-75  md:w-2/6 rounded-lg mt-10  bg-green-700 text-center text-white">
        Tableros
      </div>

      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() =>
            ONSUBMIT("Tablero Matriz Requerimientos Cumplimiento PLAFT")
          }
          href="http://listcludwr/Reports_DWH/powerbi/PowerBI/PBICumplimiento/Tablero%20Matriz%20Requerimientos%20Cumplimiento%20Norm%20PLAFT"
          target="_blank"
        >
          - Tablero Matriz Requerimientos Cumplimiento PLAFT
        </a>
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Indicadores RTE")}
          href="https://app.powerbi.com/groups/24e5ac17-3795-4c19-9bdf-95b7e016f68b/reports/3a54e4ce-b49b-481d-84b9-bbddd39679b1/ReportSectionf0bd6f6f0568479d0474"
          target="_blank"
        >
          - Indicadores RTE
        </a>
      </div>

      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Seguimiento Errores RTE")}
          href="http://listcludwr/Reports_DWH/powerbi/PowerBI/PBICumplimiento/Seguimiento%20errores%20RTE"
          target="_blank"
        >
          - Seguimiento Errores RTE
        </a>
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Transacciones en efectivo en USD")}
          href="https://app.powerbi.com/groups/24e5ac17-3795-4c19-9bdf-95b7e016f68b/reports/576a65f4-528b-4110-b63c-3b87be6b63c0/ReportSection"
          target="_blank"
        >
          - Transacciones en efectivo en USD
        </a>
      </div>

      <div className="border-double border-4  font-bold opacity-75  md:w-2/6 rounded-lg mt-10  bg-green-700 text-center text-white">
        Herramientas
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <Link to="/cumplimiento_normativo_plaft">
          - Carta Inicial De Cliente
        </Link>
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <Link to="/cumplimiento_normativo_plaft">- Formulario IF-02</Link>
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <Link to="/cumplimiento_normativo_plaft">
          - Matriz de Requerimientos SIB
        </Link>
      </div>
    </div>
  );
};

export default InicioCumplimientoNormativo;
