import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";

const Layout = () => {
  
  function verificar(){

    const usuario = localStorage.getItem('username');

    if (usuario === null){
      window.location.href = "/login"
    }

    else{
      return null;
    }

}


verificar()
  return (
    <div className="md:block">
      <div className="">
        <Header />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
