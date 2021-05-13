import { BiMailSend, BiHeadphone } from "react-icons/bi";

function Footer() {
  return (
    <div className="Footer jumbotron">
      <div className="row">
        <div className="col-md-4">
          <h6>Ubicación</h6>
          <div className="direccion">
            <p>
              Avenida Andromeda, 2000. Boco G e 8<br />
              Alphavile SP
              <br />
              brasil@corebiz.ag
              <br />
              +55 11 3090 1039
            </p>
          </div>
        </div>

        <div className="direccion col-4">
          <button className="btn btn-outline-primary">
            <BiMailSend />
            &nbsp; Contactanos
          </button>
          <button className="btn btn-outline-primary">
            <BiHeadphone />
            &nbsp; Habla con un consultor
          </button>
        </div>
        <div className="direccion col-4">
          <div>
            <p>Desarrollado por</p>
          </div>
          <div>
            <p>Powered by</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
