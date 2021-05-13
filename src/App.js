import { useState, useEffect } from "react";
import "./App.css";
import "bootswatch/dist/lux/bootstrap.min.css";

//components
import ResultList from "./components/ResultList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Suscripcion";
import Banner from "./components/Banner";

const savedItems = JSON.parse(localStorage.getItem("cartItems"));

function App() {
  const [listProducts, setlistProducts] = useState(null);
  useEffect(() => {
    fetch("https://corebiz-test.herokuapp.com/api/v1/products", {
      method: "GET", // or 'PUT'
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        setlistProducts(response);
      });
  }, []);

  const [word, setWord] = useState("");
  const [cartItems, setCartItems] = useState(savedItems || []); // Recibir datos iniciales de storage

  function addProduct(product) {
    const newCart = [...cartItems, product];
    setCartItems(newCart);
    // guardar en storage
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  }

  return (
    <div className="App">
      <Header setWord={setWord} cartItems={cartItems} />
      <Banner />
      <ResultList
        word={word}
        listProducts={listProducts}
        addProduct={addProduct}
      />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
