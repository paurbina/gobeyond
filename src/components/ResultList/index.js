import Product from "../Product";

function ResultList({ word, listProducts, addProduct }) {
  return (
    <div className="resultlist">
      {listProducts &&
        listProducts.map((product, key) => {
          const { productName } = product;
          return (
            productName.toLowerCase().includes(word.toLowerCase()) && (
              <Product key={key} product={product} addProduct={addProduct} />
            )
          );
        })}
    </div>
  );
}

export default ResultList;
