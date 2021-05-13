import { BiUser, BiSearch, BiCart } from "react-icons/bi";
import logo from "../../assets_gobeyond/corebiz_log.png";

function Header({ setWord, cartItems }) {
  return (
    <div className="header">
      <div className="container">
        <div className="row aling">
          <div className="col-md-2">
            <input
              type="image"
              id="logo"
              src={logo}
              className="navbar-header"
            />
          </div>
          <div className="col-md-6">
            <div className="row aling">
              <input
                type="text"
                onChange={(e) => setWord(e.target.value)} //Cambia el valor de la busqueda con cada letra agregada
                id="buscador"
                className="form-control form-control-sm"
                placeholder="¿Qué estas buscando?"
              />
              <BiSearch className="icon" />
            </div>
          </div>
          <div className="col-md-2">
            <BiUser className="icon" />
            Mi cuenta
          </div>
          <div className="col-md-2">
            <BiCart className="icon" />({cartItems.length})
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
