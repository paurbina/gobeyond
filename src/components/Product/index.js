export default function Product({ product, addProduct }) {
  const { imageUrl, listPrice, price, productName } = product;

  function handleBuyClick() {
    addProduct(product);
  }

  return (
    <div className="card-body">
      <img className="image" src={imageUrl} />
      <h4 className="card-title">{productName}</h4>
      {listPrice && <p className="card-text">de ${listPrice}</p>}
      <p className="card-text">por ${price}</p>
      <button className="btn btn-outline-primary" onClick={handleBuyClick}>
        COMPRAR
      </button>
    </div>
  );
}
