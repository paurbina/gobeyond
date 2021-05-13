import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (name && email) {
      fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });
    }
    setNameError(!name);
    setEmailError(!email);
  }

  const inputClassName = "form-control";

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-5">
          <input
            type="text"
            className={
              nameError ? inputClassName + " is-invalid" : inputClassName
            }
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && (
            <div className="invalid-feedback">Ingresa tu nombre</div>
          )}
        </div>
        <div className="form-group col-md-5">
          <input
            type="email"
            className={
              emailError ? inputClassName + " is-invalid" : inputClassName
            }
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <div className="invalid-feedback">Ingresa un correo válido</div>
          )}
        </div>
        <div className="form-group col-md-2">
          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="suscribirme"
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
