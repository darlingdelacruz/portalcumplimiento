
import url_server from "../Principal/Ruta";

const InicioOficial_Cumplimiento = () => {
  //Funcion para guardar los eventos
  const ONSUBMIT = (herramienta) => {
    //Datos
    var datos = new FormData();
    datos.append("username", localStorage.getItem("username"));
    datos.append("modulo", "Inteligencia Financiera Plaft");
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
        Inteligencia Financiera
        <span className="text-indigo-600"> PLAFT</span>
      </h2>

      <div className="border-double border-4  font-bold opacity-75  md:w-2/6 rounded-lg mt-10  bg-green-700 text-center text-white">
        Tableros
      </div>

      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Tablero Transferencias recibidas")}
          href="https://app.powerbi.com/groups/24e5ac17-3795-4c19-9bdf-95b7e016f68b/reports/d4274b70-19d8-490e-8c4c-500472ed8bab/ReportSection49e69a0cbb1760cb84ca"
          target="_blank"
        >
          - Tablero Transferencias Recibidas
        </a>
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Tablero Transferencia Enviadas")}
          href="https://app.powerbi.com/groups/24e5ac17-3795-4c19-9bdf-95b7e016f68b/reports/ae3022a3-6f71-4813-87f5-65d4c6e0f9d0/ReportSection0c449f4f28c81a2d1fe1"
          target="_blank"
        >
          - Tablero Transferencia Enviadas
        </a>
      </div>
      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Tablero Operaciones MLD")}
          href="https://app.powerbi.com/links/5RHFNDdR_O?ctid=11f4c2de-29bc-4dc1-a608-0b14d713bbbc&pbi_source=linkShare"
          target="_blank"
        >
          - Tablero Operaciones MLD
        </a>
      </div>
      
    </div>
  );
};

export default InicioOficial_Cumplimiento;
