
import url_server from "../Principal/Ruta";

const InicioOficial_Cumplimiento = () => {
  //Funcion para guardar los eventos
  const ONSUBMIT = (herramienta) => {
    //Datos
    var datos = new FormData();
    datos.append("username", localStorage.getItem("username"));
    datos.append("modulo", "Oficial De Cumplimiento PLAFT");
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
        Oficial de Cumplimiento
        <span className="text-indigo-600"> PLAFT</span>
      </h2>

      <div className="border-double border-4  font-bold opacity-75  md:w-2/6 rounded-lg mt-10  bg-green-700 text-center text-white">
        Tableros
      </div>

      <div className=" mb-2 mt-2 hover:text-blue-800 ml-5 md:w-2/6">
        <a
          onClick={() => ONSUBMIT("Tablero General Oficial Cumplimiento")}
          href="https://app.powerbi.com/links/YY74Dc0k5N?ctid=11f4c2de-29bc-4dc1-a608-0b14d713bbbc&pbi_source=linkShare"
          target="_blank"
        >
          - Tablero Quienes son Nuestros Clientes
        </a>
      </div>
      
    </div>
  );
};

export default InicioOficial_Cumplimiento;
